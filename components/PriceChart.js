"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export default function GenericChart({ csvUrl }) {
  const ref = useRef();
  const [chartWidth, setChartWidth] = useState(350); // Initial width

  // Dynamically update the chart width based on the parent container
  useEffect(() => {
    const updateWidth = () => {
      if (ref.current?.parentElement) {
        const parentWidth = ref.current.parentElement.offsetWidth;
        setChartWidth(parentWidth);
      }
    };

    // Update width on component mount and window resize
    updateWidth();
    window.addEventListener("resize", updateWidth);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    d3.csv(csvUrl).then((data) => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let chartData = [];
      let lastValidDate = null;

      data.forEach((row) => {
        months.forEach((m, i) => {
          const value = row[m];
          if (value !== "" && value != null && !isNaN(+value)) {
            const price = +value;
            const date = new Date(+row.Year, i);
            chartData.push({ date, price });
            if (!lastValidDate || date > lastValidDate) {
              lastValidDate = date;
            }
          }
        });
      });

      chartData = chartData.filter((d) => d.date <= lastValidDate);

      const height = 250,
        margin = { top: 20, right: 20, bottom: 30, left: 40 };

      const svg = d3
        .select(ref.current)
        .attr("width", chartWidth) // Use dynamic width
        .attr("height", height);

      svg.selectAll("*").remove();

      const x = d3
        .scaleTime()
        .domain([d3.min(chartData, (d) => d.date), lastValidDate])
        .range([margin.left, chartWidth - margin.right]);

      // Calculate y-axis domain starting from the minimum price - 0.5
      const minPrice = d3.min(chartData, (d) => d.price);
      const y = d3
        .scaleLinear()
        .domain([minPrice - 0.5, d3.max(chartData, (d) => d.price)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(
          d3
            .axisBottom(x)
            .ticks(d3.timeYear.every(1))
            .tickFormat(d3.timeFormat("%Y"))
        );

      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

      // Draw colored line segments
      for (let i = 1; i < chartData.length; i++) {
        const prev = chartData[i - 1];
        const curr = chartData[i];
        let color = "#888";
        if (curr.price > prev.price) color = "red";
        else if (curr.price < prev.price) color = "green";

        svg
          .append("line")
          .attr("x1", x(prev.date))
          .attr("y1", y(prev.price))
          .attr("x2", x(curr.date))
          .attr("y2", y(curr.price))
          .attr("stroke", color)
          .attr("stroke-width", 2);
      }

      // Tooltip and focus (unchanged)
      const tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "eggs-tooltip")
        .style("position", "absolute")
        .style("background", "white")
        .style("border", "1px solid #ccc")
        .style("padding", "6px 10px")
        .style("border-radius", "4px")
        .style("pointer-events", "none")
        .style("opacity", 0);

      const focus = svg.append("g").style("display", "none");
      focus
        .append("circle")
        .attr("r", 5)
        .attr("fill", "#69b3a2")
        .attr("stroke", "#333")
        .attr("stroke-width", 1.5);

      svg
        .append("rect")
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .attr("width", chartWidth - margin.left - margin.right)
        .attr("height", height - margin.top - margin.bottom)
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .on("mouseover", () => {
          focus.style("display", null);
          tooltip.style("opacity", 1);
        })
        .on("mouseout", () => {
          focus.style("display", "none");
          tooltip.style("opacity", 0);
        })
        .on("mousemove", function (event) {
          const [mx] = d3.pointer(event);
          const x0 = x.invert(mx + margin.left);
          const bisectDate = d3.bisector((d) => d.date).left;
          const i = bisectDate(chartData, x0, 1);
          const d0 = chartData[i - 1];
          const d1 = chartData[i];
          const d = !d1 || (d0 && x0 - d0.date < d1.date - x0) ? d0 : d1;

          focus.attr("transform", `translate(${x(d.date)},${y(d.price)})`);
          tooltip
            .html(
              `<strong>${d3.timeFormat("%b %Y")(
                d.date
              )}</strong><br/>Price: $${d.price.toFixed(2)}`
            )
            .style("left", event.pageX + 15 + "px")
            .style("top", event.pageY - 28 + "px");
        });

      return () => {
        tooltip.remove();
      };
    });
  }, [csvUrl, chartWidth]);

  return <svg ref={ref}></svg>;
}

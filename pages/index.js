import Link from "next/link";
import PriceChart from "../components/PriceChart";

export default function Home() {
  return (
    <div className="container vh-100">
      <div className="component-box">
        <div className="text-center w-100">
          <p>
            <b>Eggs</b>,{" "}
            <span className="detail">Grade A, large, per doz.</span>
          </p>
          <PriceChart csvUrl="/eggs-avg.csv" />
          <div className="prose mt-4">
            Egg prices are a useful indicator of consumer pressures because eggs
            are a staple in nearly every household, making their cost highly
            visible. Recent sharp increases, driven by inflation and supply
            disruptions like avian flu, signal rising basic living expenses that
            may force consumers to adjust spending or eating habits. Since eggs
            are affordable and widely bought, price changes reflect broader
            economic forces-such as supply chain issues and production
            costs-making them a practical gauge of inflation’s impact on daily
            life.
          </div>
        </div>
      </div>

      <div className="component-box">
        <div className="text-center w-100">
          <p>
            <b>Consumer Price Index</b>,{" "}
            <span className="detail">U.S. City Average</span>
          </p>
          <PriceChart csvUrl="/cpi.csv" />
          <div className="prose mt-4">
            <p>
              The Consumer Price Index (CPI), calculated monthly by the U.S.
              Bureau of Labor Statistics, measures the average change over time
              in prices paid by consumers for a representative basket of goods
              and services, such as food, housing, transportation, and
              healthcare. As the most widely used indicator of inflation, the
              CPI tracks shifts in the cost of living, guiding policymakers,
              businesses, and consumers in adjusting wages, benefits, and
              economic decisions; when the CPI rises, it signals higher living
              costs and reduced purchasing power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

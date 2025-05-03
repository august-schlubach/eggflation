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
            visible. Since eggs are affordable and widely bought, price changes
            reflect broader economic forces-such as supply chain issues and
            production costs-making them a practical gauge of inflation’s impact
            on daily life.
          </div>
        </div>
        <div className="news-links mt-4">
          <ul>
            <li>
              <a
                href="https://thehill.com/opinion/campaign/5275227-egg-price-inflation-cal-maine/ "
                target="_blank"
                rel="noopener noreferrer">
                Egg companies are getting government bailouts while
                price-gouging consumers
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=ivkDQzMQBL4&ab_channel=PBSNewsHour"
                target="_blank"
                rel="noopener noreferrer">
                As egg prices rise, some take a crack at chicken rentals
              </a>
            </li>
          </ul>
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

        <div className="news-links mt-4">
          <ul>
            <li>
              <a
                href="https://www.cnn.com/2025/04/30/business/us-pce-inflation-consumer-spending-march "
                target="_blank"
                rel="noopener noreferrer">
                Consumer spending soared in March as Americans tried to get
                ahead of tariffs
              </a>
            </li>
            <li>
              <a
                href="https://apnews.com/article/economy-inflation-trump-spending-80bc940b852c4821faae2b420916ea2e"
                target="_blank"
                rel="noopener noreferrer">
                US inflation cools and Americans step up spending as they brace
                for tariff impact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

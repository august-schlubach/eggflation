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
        </div>
      </div>

      <div className="component-box">
        <div className="text-center w-100">
          <p>
            <b>Consumer Price Index</b>,{" "}
            <span className="detail">U.S. City Average</span>
          </p>
          <PriceChart csvUrl="/cpi.csv" />
        </div>
      </div>
    </div>
  );
}

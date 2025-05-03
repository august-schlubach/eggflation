import Link from "next/link";
import EggsChart from "../components/EggsChart";

export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="center-box">
        <div className="text-center w-100">
          <p>
            <b>Eggs</b>,{" "}
            <span className="detail">Grade A, large, per doz.</span>
          </p>
          <EggsChart />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import EggsChart from "../components/EggsChart";

export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="center-box">
        <div className="text-center w-100">
          <h2>The Price of Eggs</h2>
          <p>March: $6.23</p>

          <EggsChart />
          <p>
            <Link href="/info">More Info</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

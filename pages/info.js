import Link from "next/link";

export default function Info() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="center-box">
        <div className="text-center w-100">
          <p>Eggflation</p>
          <p>An informative service by August</p>
          <p>Data Source: bls.gov</p>
          <Link href="/">Back</Link>
        </div>
      </div>
    </div>
  );
}

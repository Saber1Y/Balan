import { CiWarning } from "react-icons/ci";

export default function Warning() {
  return (
    <div
      className="flex text-center items-center justify-center gap-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
      role="alert"
    >
      <CiWarning className="h-6 w-6 text-yellow-700" />
      <p className="font-bold">
        Portfolio drift detected 2.5% deviation, Rebalance recommended strategy
        to rebalance now!
      </p>
      <p className="underline font-bold">Rebalance Now.</p>
    </div>
  );
}

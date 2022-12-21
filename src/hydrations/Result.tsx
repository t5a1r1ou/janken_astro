import type { FC } from "react";
import { useSnapshot } from "valtio";
import { state } from "../state/state";

const Result: FC = () => {
  const snap = useSnapshot(state);
  const { result } = snap;
  return <p className="card__result">{result}</p>;
};

export default Result;

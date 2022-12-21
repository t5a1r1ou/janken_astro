import type { FC } from "react";
import { useSnapshot } from "valtio";
import { state } from "../state/state";

const Title: FC = () => {
  const snap = useSnapshot(state);
  const { ready } = snap;
  return (
    <p className="card__title">{`${ready ? "じゃんけん..." : "ぽんっっ！"}`}</p>
  );
};

export default Title;

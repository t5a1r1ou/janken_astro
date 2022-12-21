import type { FC, ReactNode } from "react";
import { useSnapshot } from "valtio";
import { state } from "../state/state";
import type { PlayerType } from "../types/types";

type Props = {
  children: ReactNode;
  type: PlayerType;
};

const HandController: FC<Props> = (props) => {
  const { type, children } = props;

  const snap = useSnapshot(state);
  const hand = snap[type];

  return (
    <>
      <div className={`cardBox__imgContainer ${hand}`}>{children}</div>
      <p className="cardBox__hand">
        {hand === "thinking" ? "かんがえちゅう..." : null}
        {hand === "rock" ? "グー" : null}
        {hand === "scissors" ? "チョキ" : null}
        {hand === "paper" ? "パー" : null}
      </p>
    </>
  );
};

export default HandController;

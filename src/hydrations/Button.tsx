import type { FC } from "react";
import type { Hands } from "../types/types";

type Props = {
  type: Hands;
  onClickButton: (type: Hands) => void;
};

const Button: FC<Props> = (props) => {
  const { type, onClickButton } = props;

  return (
    <button className="navigation__button" onClick={() => onClickButton(type)}>
      {type === "rock" ? "グー" : null}
      {type === "scissors" ? "チョキ" : null}
      {type === "paper" ? "パー" : null}
      {type === "thinking" ? "もういちど" : null}
    </button>
  );
};

export default Button;

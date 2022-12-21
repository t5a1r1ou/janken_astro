import type { FC } from "react";
import { result } from "../state/state";
import Button from "./Button";
import type { Hands } from "../types/types";

type Props = {
  handType: Hands;
};

const StartButton: FC<Props> = (props) => {
  const { handType } = props;

  return <Button onClickButton={result} type={handType} />;
};

export default StartButton;

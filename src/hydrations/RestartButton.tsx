import type { FC } from "react";
import { restart } from "../state/state";
import Button from "./Button";

const RestartButton: FC = () => {
  return <Button onClickButton={restart} type={"thinking"} />;
};

export default RestartButton;

import type { FC, ReactNode } from "react";
import { useSnapshot } from "valtio";
import { state } from "../state/state";

type Props = {
  children: ReactNode;
};

const ButtonList: FC<Props> = ({ children }) => {
  const snap = useSnapshot(state);
  const { ready } = snap;

  return (
    <nav className={`navigation ${ready ? "start" : "restart"}`}>
      {children}
    </nav>
  );
};

export default ButtonList;

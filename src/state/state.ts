import { proxy } from "valtio";
import type { Hands } from "../types/types";

type State = {
  you: Hands;
  cpu: Hands;
  ready: boolean;
  result: "あなたのかち！" | "あいこ！" | "あなたのまけ..." | "";
};

export const state = proxy<State>({
  you: "thinking",
  cpu: "thinking",
  ready: true,
  result: "",
});

export const result = (you: Hands) => {
  const hands: Omit<Hands[], "thinking"> = ["rock", "scissors", "paper"];
  const cpuIndex = Math.floor(Math.random() * 3);
  const cpu = hands[cpuIndex];
  state.cpu = cpu;
  state.you = you;
  state.ready = false;
  if (you === cpu) {
    state.result = "あいこ！";
  } else if (
    (you === "rock" && cpu === "scissors") ||
    (you === "scissors" && cpu === "paper") ||
    (you === "paper" && cpu === "rock")
  ) {
    state.result = "あなたのかち！";
  } else {
    state.result = "あなたのまけ...";
  }
};

export const restart = () => {
  state.cpu = "thinking";
  state.you = "thinking";
  state.ready = true;
  state.result = "";
};

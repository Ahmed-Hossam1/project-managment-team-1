import { useMutation } from "@tanstack/react-query";
import { askAI } from "@/features/Dashboard/api/AskAI.api";

export const useAskAI = () => {
  return useMutation({
    mutationFn: askAI,
  });
};

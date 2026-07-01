
import { useQuery } from "@tanstack/react-query";
import { getMeetings } from "../api/Meetings";
export const useMeetings = () => {
  return useQuery({
    queryKey: ["meetings"],
    queryFn: getMeetings,
  });
};
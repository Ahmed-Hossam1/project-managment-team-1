import { getTeams } from "@/features/Dashboard/api/Teams";
import { useQuery } from "@tanstack/react-query";
export const useTeams = () => {
  return useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });
};
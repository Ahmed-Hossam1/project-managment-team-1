import { getTasks } from "@/features/Dashboard/api/Tasks";
import { useQuery } from "@tanstack/react-query";
export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};
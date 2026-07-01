import { getDashboardRecents } from "@/features/Dashboard/api/DashboardRecents";
import { useQuery } from "@tanstack/react-query";
export const useDashboardRecents = () => {
  return useQuery({
    queryKey: ["dashboardRecents"],
    queryFn: getDashboardRecents,
  });
};
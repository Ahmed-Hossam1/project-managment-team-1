import { getDashboardStats } from "@/features/Dashboard/api/DashboardStats";
import { useQuery } from "@tanstack/react-query";
export const useDashboardStats = () => {
  return useQuery({
    queryKey: ["dashboardStats"],
    queryFn: getDashboardStats,
  });
  
};
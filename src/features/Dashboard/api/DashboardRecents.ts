import api from "@/lib/axios";

export const getDashboardRecents = async () => {
  const { data } = await api.get("/dashboard/recent-files");
  return data;
};
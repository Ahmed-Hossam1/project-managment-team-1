import api from "@/lib/axios";

export const getTeams = async () => {
  const { data } = await api.get("/teams");
  return data;
};
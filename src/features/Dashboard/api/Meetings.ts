import api from "@/lib/axios";

export const getMeetings = async () => {
  const { data } = await api.get("/meetings");
  return data;
};
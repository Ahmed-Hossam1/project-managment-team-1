import api from "@/lib/axios";

export const getTasks = async () => {
  const { data } = await api.get("/tasks");
  return data;
};
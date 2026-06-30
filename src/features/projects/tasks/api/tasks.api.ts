import apiClient from "@/services/ApiClient";
import type {
  ApiTask,
  CreateTaskPayload,
  UpdateTaskPayload,
  TasksResponse,
} from "../types/tasks";

export const tasksApi = {
  getAll: () => apiClient.get<TasksResponse>("/tasks"),
  getById: (id: number) => apiClient.get<ApiTask>(`/tasks/${id}`),
  create: (data: CreateTaskPayload) => apiClient.post<ApiTask>(`/tasks`, data),
  update: (id: number, data: UpdateTaskPayload) =>
    apiClient.put<ApiTask>(`/tasks/${id}`, data),
  delete: (id: number) => apiClient.delete<ApiTask>(`/tasks/${id}`),
};

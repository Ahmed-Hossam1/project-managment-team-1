import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Board } from "@/features/TasksPage/components/Board/Board";
import { Toolbar } from "@/features/TasksPage/components/Toolbar/Toolbar";
import { useTasks } from "@/features/TasksPage/hooks/useTasks";

export default function TasksPage() {
  const { data, isPending, isError, error } = useTasks();
  const [selectedProject, setSelectedProject] = useState<string>("all");

  const allTasks = data?.data ?? [];

  const filteredTasks = useMemo(() => {
    if (selectedProject === "all") return allTasks;
    return allTasks.filter(
      (task) => String(task.project_id) === selectedProject,
    );
  }, [allTasks, selectedProject]);

  return (
    <DashboardLayout>
      <main className="space-y-6 p-6">
        <Toolbar
          tasks={allTasks}
          selectedProject={selectedProject}
          onProjectChange={setSelectedProject}
        />

        <Board
          tasks={filteredTasks}
          isPending={isPending}
          isError={isError}
          error={error}
        />
      </main>
    </DashboardLayout>
  );
}

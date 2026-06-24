import React from "react";
import type { TaskItem } from "./TaskColumn";
import TaskColumn from "./TaskColumn";

const TODO_TASKS: TaskItem[] = [
  { id: "todo-1", name: "Create user interview", progress: 40 },
  { id: "todo-2", name: "Create Wireframe", progress: 75 },
  { id: "todo-3", name: "Create user flow", progress: 20 },
  { id: "todo-4", name: "Design log in screen", progress: 55 },
];

const DONE_TASKS: TaskItem[] = [
  { id: "done-1", name: "Update design system", progress: 100 },
  { id: "done-2", name: "Create information architected", progress: 100 },
  { id: "done-3", name: "Make survey", progress: 100 },
  { id: "done-4", name: "create Wireframe", progress: 100 },
  { id: "done-5", name: "create Wireframe", progress: 100 },
];

export default function TasksTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 w-full items-start">
      <TaskColumn
        title="To do"
        count={TODO_TASKS.length}
        tasks={TODO_TASKS}
        variant="todo"
      />
      <TaskColumn
        title="Done"
        count={DONE_TASKS.length}
        tasks={DONE_TASKS}
        variant="done"
      />
    </div>
  );
}

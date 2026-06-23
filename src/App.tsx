import { RouterProvider } from "react-router-dom";
import { router } from "./Auth/Routers/Routering";

export default function App() {
  return (
    <div className="w-full h-screen bg-Auth-bg">
      <RouterProvider router={router} />
    </div>
  );
}
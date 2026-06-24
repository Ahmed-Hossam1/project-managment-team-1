import { FileText } from "lucide-react";

const ACTIVITIES = [
  { id: "1",  detail: "Completed task User Research Analysis", time: "1h ago" },
  { id: "2",  detail: "Updated Design System Updates", time: "4h ago" },
  { id: "3",  detail: "Joined meeting Sprint Planning Meeting", time: "1d ago" },
  { id: "4",  detail: "Commented on Dashboard Layout Design", time: "2d ago" },
];

export default function OverviewTab() {
  return (
    <div className="flex flex-col gap-8 py-6">
      {/* About */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">About</h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-4xl">
          Experienced UI/UX Designer with over 5 years of expertise in creating user-centered digital
          experiences. Passionate about design systems, accessibility, and leading creative teams to deliver
          exceptional products. Strong background in user research, wireframe, prototyping, and front-end
          development.
        </p>
      </div>

      {/* Recent Activities */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Recent Activates
        </h2>
        <div className="flex flex-col gap-3 max-w-4xl">
          {ACTIVITIES.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-white hover:bg-slate-50/50 rounded-xl border border-slate-100/80 shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500">
                  <FileText size={18} strokeWidth={2} />
                </div>
                <div className="text-sm">
                  <span className="text-slate-800 font-semibold">{activity.detail}</span>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

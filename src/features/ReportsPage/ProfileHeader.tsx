import { Calendar, Briefcase, Clock, Settings, Pencil } from "lucide-react";
import ProfileStatsCard from "./ProfileStatsCard";

interface ProfileHeaderProps {
  isEditing: boolean;
  onToggleEdit: () => void;
}

const AVATAR_URL =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80";

export default function ProfileHeader({
  isEditing,
  onToggleEdit,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-6 border-b border-slate-100">
      {/* User info */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <img
            src={AVATAR_URL}
            alt="Mohamed Salah"
            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
          />
          <button
            type="button"
            onClick={onToggleEdit}
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm text-white hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer z-10"
          >
            {isEditing ? (
              <Pencil size={11} strokeWidth={2.5} />
            ) : (
              <Settings size={12} strokeWidth={2.5} />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Mohamed Salah
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm font-medium">
            <span className="text-slate-600">UI/UX Designer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline-block" />
            <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar size={15} />
              <span>Joind Apr 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats cards (hidden in edit mode) */}
      {!isEditing && (
        <div className="flex flex-wrap sm:flex-nowrap gap-4 items-center w-full lg:w-auto">
          <ProfileStatsCard
            title="Completed Tasks"
            value={140}
            icon={<Briefcase size={22} />}
            iconBgColorClass="bg-blue-50 hover:bg-blue-100"
            iconColorClass="text-blue-600"
          />
          <ProfileStatsCard
            title="Hours Worked"
            value={345}
            icon={<Clock size={22} />}
            iconBgColorClass="bg-pink-50 hover:bg-pink-100"
            iconColorClass="text-pink-600"
          />
        </div>
      )}
    </div>
  );
}

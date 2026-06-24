import { User, Mail, Check, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfileEditForm() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto py-6">
      {/* Personal Info Section */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <h2 className="text-lg font-bold text-slate-900">Personal Info</h2>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            You can change your personal information settings here.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-bold text-slate-700">
              Full Name
            </Label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <Input
                defaultValue="Mohamed Salah"
                className="pl-9 h-10 rounded-xl"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-bold text-slate-700">
              Email Address
            </Label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <Input
                defaultValue="Admin@Example.com"
                className="pl-9 h-10 rounded-xl"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-bold text-slate-700">
              Phone Number
            </Label>
            <div className="flex items-center gap-0 border border-input rounded-xl overflow-hidden focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
              <div className="flex items-center gap-1 px-3 border-r border-slate-100 cursor-pointer select-none shrink-0">
                <span className="text-base">🇪🇬</span>
                <ChevronDown size={14} className="text-slate-400" />
              </div>
              <input
                defaultValue="+20 (123) 456-9878"
                className="w-full h-10 px-3 text-sm text-slate-800 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Availability Status */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-bold text-slate-700">
              Availability Status
            </Label>
            <Select defaultValue="available">
              <SelectTrigger className="w-full h-10 rounded-xl">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
                <SelectItem value="away">Away</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <h2 className="text-lg font-bold text-slate-900">Experience</h2>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            You can change Experience settings here.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Job Title */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-bold text-slate-700">
              Job Title
            </Label>
            <Input
              defaultValue="Senior UI/UX Designer"
              className="h-10 rounded-xl"
            />
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-bold text-slate-700">
              Years of Experience
            </Label>
            <Input
              defaultValue="6 Years"
              className="h-10 rounded-xl"
            />
          </div>

          {/* Current Team / Project */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <Label className="text-xs font-bold text-slate-700">
              Current Team / Project
            </Label>
            <Input
              defaultValue="CollabSpace - Web Platform"
              className="h-10 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <Button
        variant="brand"
        className="w-full h-11 rounded-xl text-base font-semibold gap-2"
      >
        Save
        <Check size={18} strokeWidth={2.5} />
      </Button>
    </div>
  );
}

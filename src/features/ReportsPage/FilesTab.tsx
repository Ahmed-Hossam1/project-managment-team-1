import React from "react";
import { Download } from "lucide-react";

interface FileItem {
  id: string;
  name: string;
  author: string;
  size: string;
  time: string;
}

const MOCK_FILES: FileItem[] = Array.from({ length: 9 }, (_, index) => ({
  id: `file-${index + 1}`,
  name: "Design mockups",
  author: "By Ahmed Hassan",
  size: "6.4 MB",
  time: "1h ago",
}));

// Custom PDF document icon with a folded corner and PDF label
const PdfIcon = () => (
  <svg
    className="w-10 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105"
    viewBox="0 0 40 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main Red Page Body */}
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H28L40 12V44C40 46.2091 38.2091 48 36 48H4C1.79086 48 0 46.2091 0 44V4Z"
      fill="#EF4444"
    />
    {/* Folded Corner flap */}
    <path
      d="M28 0V8C28 10.2091 29.7909 12 32 12H40L28 0Z"
      fill="#F87171"
    />
    {/* PDF text label */}
    <text
      x="7"
      y="34"
      fill="white"
      fontSize="9"
      fontWeight="900"
      fontFamily="Inter, sans-serif"
    >
      PDF
    </text>
  </svg>
);

export default function FilesTab() {
  return (
    <div className="py-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_FILES.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-pointer"
          >
            {/* Left section: Icon and details */}
            <div className="flex items-center gap-4">
              <PdfIcon />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                  {file.name}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {file.author}
                </span>
                <span className="text-[11px] text-slate-400 font-normal">
                  {file.size} • {file.time}
                </span>
              </div>
            </div>

            {/* Right section: Download action */}
            <button
              className="p-2 hover:bg-slate-50 active:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors duration-200"
              aria-label="Download file"
            >
              <Download size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

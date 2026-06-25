import {
  ArrowDown,
  ArrowUpRight,
  Backpack,
  Calculator,
  CalendarDays,
  ClipboardCheck,
  ClipboardClock,
  ClipboardList,
  Download,
  FileText,
  Gauge,
} from "lucide-react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Chart, {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import StatsCard from "@/components/shared/StatsCard";
import { Link } from "react-router-dom";
export const description = "A line chart with dots";
import pdf from "@/assets/[CITYPNG.COM]PDF File Document Red Icon - 1000x1000 1.svg"
import jsx from "@/assets/image 1837.svg"
import sql from "@/assets/image 1838.svg"
import Charts from "@/components/ui/chart";
import avatar from "@/assets/Avatar.svg"
import avatar2 from "@/assets/Avatar2.svg"
import avatar3 from "@/assets/Avatar3.svg"
import image from "@/assets/image 2.svg"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const statistics = [
  {
    title: "Pending Tasks",
    value: "32",
    progressValue: "32/94",
    subValue: "+9% from last month",
    icon: <ClipboardClock />,
    color: "bg-[#FA9E00]",
    backgroundColor: "bg-[#FFF5E6]",
    iconColor: "#FA9E00"
  },
  {
    title: "In Progress",
    value: "40",
    progressValue: "40/94",
    subValue: "+12% from last month",
    icon: <ClipboardList />,
    color: "bg-[#005AFB]",
    backgroundColor: "bg-[#E6EFFF]",
    iconColor: "#005AFB"
  },
  {
    title: "Completed",
    value: "32",
    progressValue: "22/94",
    subValue: "+16% from last month",
    icon: <ClipboardCheck />,
    color: "bg-[#2BA52E]",
    backgroundColor: "bg-[#EAF6EA]",
    iconColor: "#2BA52E"
  },
];

const progresses = [
  {
    Name: "Mohaned habib ",
    progressValue: "12/14",
    progress: "w-9/12",
  },
  {
    Name: "Sara Hassan",
    progressValue: "10/16",
    progress: "w-8/12"
  },
  {
    Name: "Ali Moahamed",
    progressValue: "4/12",
    progress: "w-2/6"
  },
  {
    Name: "Khalid Mousa",
    progressValue: "11/16",
    progress: "w-4/6"
  },
  {
    Name: "Mahmoud Salah",
    progressValue: "6/12",
    progress: "w-6/12"
  }
]

export default function DashboardPage() {
  return (
    <div className="container m-auto  px-4  my-6">
    
      <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 ">
        {statistics.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            subValue={item.subValue}
            icon={item.icon}
            color={item.color}
            backgroundColor={item.backgroundColor}
            progressValue={item.progressValue}
            iconColor={item.iconColor}
          />
        ))}

      
        <div className="p-4 shadow-sm text-black  space-y-2 rounded-sm flex justify-between">
          <div className="space-y-3">
            <h2 className="text-gray-600 font-medium">Completion Rate</h2>
            <h2 className="text-2xl font-bold">33%</h2>
            <div className="flex items-center gap-2">
              <ArrowUpRight size={18} className="text-green-700" />
              <span className="text-xs text-gray-500 md:text-sm">
                +10% From last month
              </span>
            </div>
          </div>
          <div>
            <Gauge className="text-gray-400" />
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5 w-full">
   
        <div className="lg:col-span-6 bg-white rounded-lg  ">
          <Charts />
        </div>

        <div className="lg:col-span-3 bg-white h-auto lg:max-h-80 rounded-lg p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-black">Active Projects</h2>
            <Link to="/projects" className="text-blue-500 text-sm">See All</Link>
          </div>
          
          <div className="rounded-sm my-4">
            <div className="flex space-x-1.5 items-center mb-2">
              <Backpack className="bg-[#F2EAF2] text-[#7D2D7E] p-1 text-2xl rounded-full w-7 h-7" />
              <h2 className="font-medium text-sm">Alpha</h2>
            </div>
            <div className="w-full bg-[#F2EAF2] rounded-full h-2">
              <div className="bg-purple-900 h-2 rounded-full w-1/2"></div>
            </div>
            <h2 className="mt-1 text-xs text-gray-500">Task: 100/140</h2>
          </div>

          <div className="rounded-sm pt-2">
            <div className="flex space-x-1.5 items-center mb-2">
              <Backpack className="bg-[#E6F8F7] text-[#04B5AE] p-1 text-2xl rounded-full w-7 h-7" />
              <h2 className="font-medium text-sm">SepetGo</h2>
            </div>
            <div className="w-full bg-[#E6F8F7] rounded-full h-2">
              <div className="bg-[#04B5AE] h-2 rounded-full w-5/12"></div>
            </div>
            <h2 className="mt-1 text-xs text-gray-500">Task: 52/120</h2>
          </div>
        </div>

        
        <div className="lg:col-span-3 space-y-4 rounded-lg h-auto lg:max-h-80 bg-white py-5 px-3 shadow-sm">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-black">Recent files</h2>
            <Link to="/projects/alpha/files" className="text-blue-500 text-sm">See All</Link>
          </div>

          <div className="flex justify-between items-center space-x-2 border-b border-gray-100 pb-2">
            <img src={pdf} className="w-8 h-8 shrink-0" alt="pdf" />
            <div className="text-xs flex-1 min-w-0">
              <h2 className="truncate font-medium">UX_Research_Summary.pdf</h2>
              <p className="text-gray-400">By Mohanad Wahib • 13:00</p>
            </div>
            <Download className="w-4 h-4 text-gray-500 shrink-0 cursor-pointer" />
          </div>

          <div className="flex justify-between items-center space-x-2 border-b border-gray-100 pb-2">
            <img src={jsx} className="w-8 h-8 shrink-0" alt="jsx" />
            <div className="text-xs flex-1 min-w-0">
              <h2 className="truncate font-medium">Dashboard_Layout_React.jsx</h2>
              <p className="text-gray-400">By Wahib salem • 14:06</p>
            </div>
            <Download className="w-4 h-4 text-gray-500 shrink-0 cursor-pointer" />
          </div>

          <div className="flex justify-between items-center space-x-2">
            <img src={sql} className="w-8 h-8 shrink-0" alt="sql" />
            <div className="text-xs flex-1 min-w-0">
              <h2 className="truncate font-medium">Database_Schema_v2.sql</h2>
              <p className="text-gray-400">By Mohamed Nadir • 13:00</p>
            </div>
            <Download className="w-4 h-4 text-gray-500 shrink-0 cursor-pointer" />
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mt-7 w-full">
        
        <div className="lg:col-span-3 space-y-4 bg-white rounded-lg p-5 shadow-sm flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-center">
            <h2 className="text-black font-bold">Tasks</h2>
            <Link to="/" className="text-blue-500 text-sm">View All</Link>
          </div>

          <div className="rounded-sm">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium truncate max-w-[70%]">Create Wireframes</h2>
              <h2 className="bg-red-100 rounded-full text-red-700 px-2.5 py-0.5 text-xs font-semibold">High</h2>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <h2>Due Today</h2>
              <p>82%</p>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
              <div className="h-1 bg-blue-800 rounded-full w-8/12"></div>
            </div>
          </div>

          <div className="rounded-sm">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium truncate max-w-[70%]">User Research</h2>
              <h2 className="bg-yellow-100 rounded-full text-yellow-700 px-2.5 py-0.5 text-xs font-semibold">Medium</h2>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <h2>Due Dec 18</h2>
              <p>52%</p>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
              <div className="h-1 bg-blue-800 rounded-full w-1/2"></div>
            </div>
          </div>

          <div className="rounded-sm">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium truncate max-w-[70%]">Design System Updates</h2>
              <h2 className="bg-green-100 rounded-full text-green-700 px-2.5 py-0.5 text-xs font-semibold">Low</h2>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <h2>Due Dec 20</h2>
              <p>42%</p>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
              <div className="h-1 bg-blue-800 rounded-full w-5/12"></div>
            </div>
          </div>
        </div>

       
        <div className="lg:col-span-3 space-y-4 bg-white rounded-lg p-5 shadow-sm ">
          <div className="flex space-x-3 items-center">
            <h2 className="text-black font-bold">Teams</h2>
            <h2 className="flex items-center text-sm text-gray-600 bg-gray-50 px-2 py-0.5 rounded">UI/UX <ArrowDown className="w-4 h-4 ml-1" /></h2>
          </div>
          <div className="flex justify-between text-xs font-semibold text-gray-400 pb-1">
            <h2>Name</h2>
            <h2>Tasks</h2>
          </div>

          <div className="space-y-3 overflow-y-auto max-h-56 pr-1">
            {progresses.map((item, index) => (
              <div key={index} className="flex justify-between items-center space-x-2">
                <img src={avatar} className="w-7 h-7 rounded-full shrink-0" alt="avatar" />
                <div className="flex-1 ">
                  <h2 className="text-xs font-medium ">{item.Name}</h2>
                  <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
                    <div className={`h-1 bg-blue-800 rounded-full ${item.progress}`}></div>
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-700 shrink-0">
                  <p>{item.progressValue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

   
        <div className="lg:col-span-3 space-y-5 bg-white rounded-lg p-5 shadow-sm ">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-black">Upcoming event</h2>
            <Link to="/" className="text-blue-500 text-sm">View All</Link>
          </div>
          
          <div className="space-y-4 overflow-y-auto max-h-60 pr-1">
            
            <div className=" rounded-md ">
              <div className="flex justify-between items-start">
                <h2 className="text-sm font-medium text-gray-800">Design Review</h2>
                <h2 className="flex items-center text-xs  px-1.5 py-0.5 rounded font-medium">Today <CalendarDays className="w-3 h-3 ml-1" /></h2>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex ">
                  <img src={avatar2} className="w-6 h-6 rounded-full border-2 border-white" />
                  <img src={avatar3} className="w-6 h-6 rounded-full border-2 border-white" />
                  <img src={avatar2} className="w-6 h-6 rounded-full border-2 border-white" />
                </div>
                <h2 className="text-xs text-gray-400 font-medium">14:00-15:00</h2>
              </div>
            </div>

      
            <div className="border-b border-gray-50 pb-2">
              <div className="flex justify-between items-start">
                <h2 className="text-sm font-medium text-gray-800">Sprint planning</h2>
                <h2 className="flex items-center text-xs  px-1.5 py-0.5 rounded font-medium">Dec 12 <CalendarDays className="w-3 h-3 ml-1" /></h2>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex ">
                  <img src={avatar2} className="w-6 h-6 rounded-full border-2 border-white" />
                  <img src={avatar3} className="w-6 h-6 rounded-full border-2 border-white" />
                  <img src={avatar2} className="w-6 h-6 rounded-full border-2 border-white" />
                </div>
                <h2 className="text-xs text-gray-400 font-medium">13:00-13:30</h2>
              </div>
            </div>

            
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-sm font-medium text-gray-800">UX Feedback session</h2>
                <h2 className="flex items-center text-xs  px-1.5 py-0.5 rounded font-medium">Dec 18 <CalendarDays className="w-3 h-3 ml-1" /></h2>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex ">
                  <img src={avatar2} className="w-6 h-6 rounded-full border-2 border-white" />
                  <img src={avatar3} className="w-6 h-6 rounded-full border-2 border-white" />
                  <img src={avatar2} className="w-6 h-6 rounded-full border-2 border-white" />
                </div>
                <h2 className="text-xs text-gray-400 font-medium">14:00-15:00</h2>
              </div>
            </div>
          </div>
        </div>

     
        <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between ">
          <h2 className="font-semibold text-black">Ask AI</h2>
          <div className="flex flex-col items-center justify-center my-auto">
            <img src={image} className="w-16 h-16 object-contain mb-2" alt="ai-bot" />
            <h2 className="text-sm text-gray-500 font-medium">Ask me anything</h2>
          </div>
          <div className="w-full mt-2">
            <textarea 
              className="w-full bg-gray-100 rounded-md p-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none" 
              rows={2}
              placeholder="Ask for anything..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
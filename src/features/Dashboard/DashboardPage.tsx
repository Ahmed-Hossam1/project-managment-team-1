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
    <div className="container mx-auto my-6 ">
      <div className="flex justify-center flex-wrap gap-4 p-2 ">
        {statistics.map((item) => (
          <StatsCard
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

        <div className="flex justify-between p-4 shadow-sm text-black  space-y-2 rounded-sm">
          <div className="space-y-3">
            <h2>Completion Rate</h2>
            <h2 className="text-2xl font-bold">33%</h2>
            <div className="flex items-center gap-2">
              <ArrowUpRight size={18} className="text-green-700" />
              <span className="text-sm text-gray-500">
                +10% From the last month
              </span>
            </div>
          </div>
          <div>
            <Gauge />
          </div>
        </div>
      </div>
      {/* First Row */}
      <div className="flex justify-center   m-auto mt-5 w-[93%] space-x-4">
        <div className="w-[53.5%]  ">
          <Charts />
        </div>

        <div className="Second space-y-4 w-[26.5%] bg-white max-h-80 rounded-lg p-5 shadow-sm ">
          <div className="flex justify-between">
            <h2>Active Projects</h2>
            <Link to="/" className="text-blue-500">See All</Link>
          </div>
          <div className=" rounded-sm h-1/6 my-4 ">
            <div className="flex space-x-0.5">
              <Backpack className="bg-[#F2EAF2]  text-[#7D2D7E] p-0.5 text-2xl rounded-full" />
              <h2>Alpha</h2>
            </div>
            <div className="w-full bg-[#F2EAF2] rounded-full h-2">
              <div className="bg-purple-900 h-2 rounded-full w-1/2 mt-3" ></div>
              <h2>Task: 100/140</h2>
            </div>
          </div>

          <div className="rounded-sm h-1/6 py-6">
            <div className="flex space-x-0.5 ">
              <Backpack className="bg-[#E6F8F7]  text-[#04B5AE] p-0.5 text-2xl rounded-full" />
              <h2>SepetGo</h2>
            </div>
            <div className={`w-full bg-[#E6F8F7] rounded-full h-2`}>
              <div className={`bg-[#04B5AE] h-2 rounded-full w-5/12 mt-3`} ></div>
              <h2>Task: 52/120</h2>
            </div>
          </div>
        </div>


        <div className="third w-[20%]  space-y-4 rounded-lg  max-h-80  bg-white py-5 px-3 shadow-sm" >
          <div className="flex justify-between">
            <h2>Recent files</h2>
            <Link to="/projects/alpha/files" className="text-blue-500">See All</Link>
          </div>


          <div className="flex justify-between  items-center space-x-1.5 pdf border-b-gray-600">
            <div>
              <img src={pdf} />
            </div>
            <div className="text-xs">
              <h2>UX_Research_Summary.pdf</h2>
              <p>By Mohanad Wahib • 13:00</p>
            </div>
            <div>
              <Download />
            </div>
          </div>
          <div className="flex justify-around items-center space-x-1.5">
            <div>
              <img src={jsx} />
            </div>
            <div className="text-xs">
              <h2>Dashboard_Layout_React.jsx</h2>
              <p>By Wahib salem • 14:06</p>
            </div>
            <div>
              <Download />
            </div>
          </div>
          <div className="flex justify-between items-center space-x-1.5">
            <div>
              <img src={sql} />
            </div>
            <div className="text-xs">
              <h2>Database_Schema_v2.sql</h2>
              <p>By Mohamed Nadir • 13:00</p>
            </div>
            <div>
              <Download />
            </div>
          </div>
        </div>
      </div>
      {/* second row */}

      <div className="w-[93%] m-auto flex justify-between mt-7">
        <div className=" space-y-4 w-[23%] bg-white  rounded-lg p-5 shadow-sm flex flex-col justify-around">
          <div className="flex justify-between">
            <h2 className="text-black font-bold">Tasks</h2>
            <Link to="/" className="text-blue-500">View All</Link>
          </div>
          <div className=" rounded-sm  ">
            <div className="flex justify-between items-center space-x-0.5">
              <h2>Creat Wireframes</h2>
              <h2 className="bg-red-100 rounded-full text-red-700 p-1.5">High</h2>
            </div>
            <div className="flex justify-between mt-3">
              <h2>Due Today</h2>
              <p>82%</p>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-1 mt-2">
              <div className="h-1 bg-blue-800 rounded-full w-8/12" ></div>
            </div>
          </div>

          <div className=" rounded-sm   ">
            <div className="flex justify-between items-center space-x-0.5">
              <h2>User Research</h2>
              <h2 className="bg-yellow-100 rounded-full text-yellow-700 p-1.5">Medium</h2>
            </div>
            <div className="flex justify-between mt-3">
              <h2>Due Dec 18</h2>
              <p>52%</p>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-1 mt-2">
              <div className="h-1 bg-blue-800 rounded-full w-1/2" ></div>
            </div>
          </div>

          <div className=" rounded-sm   ">
            <div className="flex justify-between items-center space-x-0.5">
              <h2>Design System Updates</h2>
              <h2 className="bg-green-100 rounded-full text-green-700 p-1.5">Low</h2>
            </div>
            <div className="flex justify-between mt-3">
              <h2>Due Dec 20</h2>
              <p>42%</p>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-1 mt-2">
              <div className="h-1 bg-blue-800 rounded-full w-5/12" ></div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-[23%] bg-white  rounded-lg p-5 shadow-sm ">
          <div className="flex space-x-3">
            <h2 className="text-black font-bold">Teams</h2>
            <h2 className="flex  ">UI/UX<ArrowDown /></h2>
          </div>
          <div className="flex justify-between">
            <h2>Name</h2>
            <h2>Tasks</h2>
          </div>

          {progresses.map((item) => (
            <div className="flex justify-around items-center ">
              <div>
                <img src={avatar} />
              </div>
              <div>
                <h2 className="text-xs">{item.Name} <span className="text-gray-600 ml-3"></span></h2>
                <div className="w-full bg-blue-200 rounded-full h-1 mt-2">
                  <div className={`h-1 bg-blue-800 rounded-full  ${item.progress}`} ></div>
                </div>
              </div>
              <div>
                <p>{item.progressValue}</p>
              </div>
            </div>
          ))}

        </div>


        <div className="Second space-y-6 w-[26%] bg-white rounded-lg p-5 shadow-sm ">
          <div className="flex justify-between">
            <h2>Upcoming event</h2>
            <Link to="/" className="text-blue-500">View All</Link>
          </div>
          <div className="design review ">
            <div className="flex  justify-between">
              <h2>Design  Review </h2>
              <h2 className="flex">Today <CalendarDays /></h2>
            </div>
            <div className="employers  flex justify-between mt-4" >
              <div className="flex">
                <img src={avatar2} />
                <img src={avatar3} />
                <img src={avatar2} />

              </div>
              <div>
                <h2>14:00-15:00</h2>
              </div>

            </div>
          </div>
          <div className="sprint review">
            <div className="flex  justify-between">
              <h2>Sprint planning meeting </h2>
              <h2 className="flex">Dec 12 <CalendarDays /></h2>
            </div>
            <div className="employers mt-4 flex justify-between">
              <div className="flex">
                <img src={avatar2} />
                <img src={avatar3} />
                <img src={avatar2} />

              </div>
              <div>
                <h2>13:00-13:30</h2>
              </div>

            </div>
          </div>
          <div className="Ux review">
            <div className="flex  justify-between">
              <h2>UX Feedback session </h2>
              <h2 className="flex">Dec 18 <CalendarDays /></h2>
            </div>
              <div className="employers mt-4 flex justify-between"> 
              <div className="flex">
                  <img src={avatar2}  />
                   <img src={avatar3} />
                   <img src={avatar2}  />

              </div>
              <div>
                 <h2>14:00-15:00</h2>
              </div>

            </div>
          </div>
        </div>

        <div className=" w-[20%] bg-white  rounded-lg  shadow-sm p-5 relative ">
          <h2>Ask AI</h2>
          <div className="flex flex-col items-center justify-center mt-6">
             <img src={image}  />
             <h2>Ask me anything</h2>
          </div>
          <textarea className="bg-gray-200 absolute bottom-3" placeholder="Ask For anything">
             </textarea>
        </div>
      </div>
    </div>

  )
};
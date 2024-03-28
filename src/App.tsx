import "./App.css";
import { useTheme } from "@mui/material/styles";
import { ChartsTextStyle, LineChart, axisClasses } from "@mui/x-charts";
import Title from "./Title";
import { useState } from "react";

// Generate Sales Data
function createData(
  time: string,
  amount?: number
): { time: string; amount: number | null } {
  return { time, amount: amount ?? null };
}

interface DropState {
  type: string;
  status: boolean;
}

const data = [
  createData("Sun", 180),
  createData("Mon", 240),
  createData("Tue", 180),
  createData("Web", 125),
  createData("Thu", 170),
  createData("Fri", 120),
  createData("Sat", 240),
];

function App() {
  const [dropState, setDropState] = useState<DropState>({
    type: "",
    status: false,
  });
  const theme = useTheme();
  return (
    <main className="flex h-full w-screen">
      <nav className="w-[250px] hidden h-screen fixed md:flex flex-col">
        <div className="w-full grow px-5 py-4">
          <a href="/" className="text-2xl font-semibold">
            Clonify
          </a>
          <div className="mt-10">
            <p className="uppercase tracking-widest text-zinc-400 text-sm font-semibold">
              Dashboard
            </p>
            <div className="flex justify-between items-center mt-5">
              <button className="tracking-wider text-sm flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-goal text-zinc-800"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                </svg>
                Dashboard
              </button>
              <button
                onClick={() => {
                  setDropState((prev) => ({
                    type: prev.type === "dashboard" ? "" : "dashboard",
                    status: !prev.status,
                  }));
                }}
              >
                {dropState.status && dropState.type === "dashboard" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </button>
            </div>
            {dropState.status && dropState.type === "dashboard" && (
              <div>
                <div className="flex justify-between text-zinc-600 hover:text-black items-center mt-3">
                  <button className="ml-7 tracking-wider text-sm flex items-center gap-x-1">
                    Analytics
                  </button>
                </div>
                <div className="flex justify-between text-zinc-600 hover:text-black items-center mt-3">
                  <button className="ml-7 tracking-wider text-sm flex items-center gap-x-1">
                    Finance
                  </button>
                </div>
                <div className="flex justify-between text-zinc-600 hover:text-black items-center mt-3">
                  <button className="ml-7 tracking-wider text-sm flex items-center gap-x-1">
                    Job Board
                  </button>
                </div>
              </div>
            )}
            <div className="flex justify-between items-center mt-5">
              <button className="tracking-wider text-sm flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-goal text-zinc-800"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                </svg>
                Messages
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <button className="tracking-wider text-sm flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-goal text-zinc-800"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                </svg>
                Friends
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <button className="tracking-wider text-sm flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-goal text-zinc-800"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                </svg>
                Apps
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-10">
            <p className="uppercase tracking-widest text-zinc-400 text-sm font-semibold">
              Pages
            </p>
            <div className="flex justify-between items-center mt-5">
              <button className="tracking-wider text-sm flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-goal text-zinc-800"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                </svg>
                Help Center
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <button className="tracking-wider text-sm flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-goal text-zinc-800"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                </svg>
                File Manager
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-neutral-200"></div>
        <div className="h-[50px] w-full"></div>
      </nav>
      <div className="bg-zinc-100 ml-0 md:ml-[250px] h-full grow">
        <div className="md:hidden bg-white h-[70px] flex justify-between items-center pl-5 pr-5 sm:pl-8 sm:pr-8">
          <a href="/" className="text-3xl font-semibold">
            Clonify
          </a>
          <div className="h-[50px] group flex items-center justify-center w-[50px] bg-zinc-200 rounded-full">
            <button className="group-hover:cursor-pointer">DP</button>
          </div>
        </div>
        <nav className="w-full h-[63px] flex bg-white drop-shadow-sm py-[10px] pl-5 pr-5 sm:pl-8 sm:pr-8">
          <input
            type="text"
            placeholder="Search..."
            className="h-full grow rounded-md border px-4 text-sm text-neutral-500"
          />
          <div className="hidden md:flex gap-x-2 ml-4">
            <div className="h-full w-[35px] bg-zinc-200"></div>
            <div className="h-full w-[35px] bg-zinc-200"></div>
            <div className="h-full w-[35px] bg-zinc-200"></div>
            <div className="h-full w-[35px] bg-zinc-200"></div>
          </div>
        </nav>
        <div className="grow pl-5 pr-5 sm:pl-8 sm:pr-8">
          <div className="bg-neutral-800 mt-8 text-white h-[200px] sm:h-[130px] px-8 rounded-2xl flex sm:flex-row flex-col items-center justify-center gap-y-[20px] sm:justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-2xl lg:text-3xl">
                Unlock Premium stats
              </h1>
              <p className="pt-2 text-sm font-light text-neutral-200">
                Get up to 10 TB of storage for a limited time
              </p>
            </div>
            <button className="sm:ml-10 w-[120px] h-[48px] bg-white text-black lg:w-[150px] rounded-full hover:shadow-lg hover:bg-neutral-100">
              Upgrade
            </button>
          </div>
          <div className="w-full mt-8 flex gap-y-[20px] sm:gap-y-[33px] justify-between flex-wrap">
            <div className="w-full sm:w-[48%] xl:w-[23%] h-[175px] bg-white rounded-2xl shadow-sm drop-shadow-sm"></div>
            <div className="w-full sm:w-[48%] xl:w-[23%] h-[175px] bg-white rounded-2xl shadow-sm drop-shadow-sm"></div>
            <div className="w-full sm:w-[48%] xl:w-[23%] h-[175px] bg-white rounded-2xl shadow-sm drop-shadow-sm"></div>
            <div className="w-full sm:w-[48%] xl:w-[23%] h-[175px] bg-white rounded-2xl shadow-sm drop-shadow-sm"></div>
          </div>
          <div className="w-full mt-8 bg-white rounded-2xl shadow-sm h-[470px] drop-shadow-sm">
            <div className="px-8 pt-6">
              <Title>Performance</Title>
            </div>
            <div className="h-[1px] w-full bg-neutral-200"></div>
            <div className="h-[350px] px-4 mt-7 mb-[100px]">
              <LineChart
                dataset={data}
                xAxis={[
                  {
                    scaleType: "point",
                    dataKey: "time",
                    tickNumber: 2,
                    tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
                  },
                ]}
                yAxis={[
                  {
                    labelStyle: {
                      ...(theme.typography.body1 as ChartsTextStyle),
                      fill: theme.palette.text.primary,
                    },
                    tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
                    max: 400,
                    tickNumber: 3,
                  },
                ]}
                series={[
                  {
                    dataKey: "amount",
                    showMark: false,
                    color: theme.palette.primary.light,
                  },
                ]}
                sx={{
                  [`.${axisClasses.root} line`]: {
                    stroke: theme.palette.text.secondary,
                  },
                  [`.${axisClasses.root} text`]: {
                    fill: theme.palette.text.secondary,
                  },
                  [`& .${axisClasses.left} .${axisClasses.label}`]: {
                    transform: "translateX(-25px)",
                  },
                }}
              />
            </div>
          </div>
          <div className="w-full mt-8 bg-white rounded-2xl shadow-sm h-[470px] mb-8 drop-shadow-sm"></div>
        </div>
      </div>
    </main>
  );
}

export default App;

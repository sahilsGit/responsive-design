import "./App.css";
import { useTheme } from "@mui/material/styles";
import { ChartsTextStyle, LineChart, axisClasses } from "@mui/x-charts";
import Title from "./Title";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./context/store";

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

  const { revenue, users, newSignUps, retention } = useSelector(
    (state: RootState) => state
  );

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
                    type: prev.type.length ? "" : "dashboard",
                    status: prev.status ? false : true,
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
              <button
                onClick={() => {
                  setDropState((prev) => ({
                    type: prev.type.length ? "" : "messages",
                    status: prev.status ? false : true,
                  }));
                }}
              >
                {dropState.status && dropState.type === "messages" ? (
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
            {dropState.status && dropState.type === "messages" && (
              <div>
                <div className="flex justify-between text-zinc-600 hover:text-black items-center mt-3">
                  <button className="ml-7 tracking-wider text-sm flex items-center gap-x-1">
                    Active
                  </button>
                </div>
                <div className="flex justify-between text-zinc-600 hover:text-black items-center mt-3">
                  <button className="ml-7 tracking-wider text-sm flex items-center gap-x-1">
                    Requests
                  </button>
                </div>
                <div className="flex justify-between text-zinc-600 hover:text-black items-center mt-3">
                  <button className="ml-7 tracking-wider text-sm flex items-center gap-x-1">
                    Unseen
                  </button>
                </div>
              </div>
            )}
            <div className="flex justify-between text-zinc-400 items-center mt-5">
              <button className="tracking-wider text-sm flex items-center gap-x-1 disabled cursor-not-allowed">
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
                  className="lucide lucide-goal text-zinc-400"
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
                  className="lucide lucide-chevron-down text-zinc-400 disabled cursor-not-allowed"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center text-zinc-400 mt-5">
              <button className="tracking-wider text-sm flex items-center gap-x-1 disabled cursor-not-allowed">
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
                  className="lucide lucide-goal text-zinc-400"
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
                  className="lucide lucide-chevron-down disabled text-zinc-400 cursor-not-allowed"
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
            <div className="flex justify-between items-center text-zinc-400 mt-5">
              <button className="tracking-wider text-sm flex  items-center gap-x-1 disabled cursor-not-allowed">
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
                  className="lucide lucide-goal text-zinc-400"
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
                  className="lucide lucide-chevron-down text-zinc-400 disabled cursor-not-allowed"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center mt-5 text-zinc-400 ">
              <button className="tracking-wider text-sm flex items-center gap-x-1 disabled cursor-not-allowed">
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
                  className="lucide lucide-goal text-zinc-400 disabled cursor-not-allowed"
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
                  className="lucide lucide-chevron-down disabled text-zinc-400 cursor-not-allowed"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-neutral-200"></div>
        <div className="h-[50px] w-full flex items-center justify-between px-6">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-settings-2 text-neutral-500"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-log-out text-neutral-500"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-globe text-neutral-500"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        </div>
      </nav>
      <div className="bg-zinc-100 ml-0 md:ml-[250px] h-full grow">
        <div className="md:hidden bg-white h-[70px] flex justify-between items-center pl-5 pr-5 sm:pl-8 sm:pr-8">
          <a href="/" className="text-3xl font-semibold">
            Clonify
          </a>
          <div className="h-[50px] group flex items-center justify-center w-[50px] bg-zinc-400 rounded-full">
            <button className="group-hover:cursor-pointer"></button>
          </div>
        </div>
        <nav className="w-full h-[63px] flex bg-white drop-shadow-sm py-[10px] pl-5 pr-5 sm:pl-8 sm:pr-8">
          <input
            type="text"
            placeholder="Search..."
            className="h-full grow rounded-md border px-4 text-sm text-neutral-500"
          />
          <div className="hidden md:flex md:justify-center md:items-center gap-x-4 ml-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-bell text-neutral-500"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-calendar-range text-neutral-500"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M16 2v4" />
                <path d="M3 10h18" />
                <path d="M8 2v4" />
                <path d="M17 14h-6" />
                <path d="M13 18H7" />
                <path d="M7 14h.01" />
                <path d="M17 18h.01" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-layout-grid text-neutral-500"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </button>
            <div className="bg-zinc-400 w-[40px] rounded-full h-[40px]"></div>
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
            <div className="w-full sm:w-[48%] xl:w-[23%] h-[175px] px-6 py-5 bg-white rounded-2xl shadow-sm flex flex-col justify-between drop-shadow-sm">
              <div>
                <p className="text-zinc-600 mb-1">Revenue</p>
                <p className="text-3xl">{"$" + revenue.toLocaleString()}</p>
              </div>
              <div className="flex gap-x-3">
                <div className="bg-green-200 text-green-700 text-sm w-[60px] rounded-full py-[2px] font-semibold text-center">
                  +45%
                </div>
                <div className="text-sm text-zinc-500">From 4.6%</div>
              </div>
            </div>
            <div className="w-full sm:w-[48%] xl:w-[23%] h-[175px] px-6 py-5 bg-white rounded-2xl shadow-sm flex flex-col justify-between drop-shadow-sm">
              <div>
                <p className="text-zinc-600 mb-1">Users</p>
                <p className="text-3xl">{users + "%"}</p>
              </div>
              <div className="flex gap-x-3">
                <div className="bg-red-200 text-red-700 text-sm w-[60px] rounded-full py-[2px] font-semibold text-center">
                  -17%
                </div>
                <div className="text-sm text-zinc-500">From 4.6%</div>
              </div>
            </div>
            <div className="w-full sm:w-[48%] xl:w-[23%] h-[175px] px-6 py-5 bg-white rounded-2xl shadow-sm flex flex-col justify-between drop-shadow-sm">
              <div>
                <p className="text-zinc-600 mb-1">New Signups</p>
                <p className="text-3xl">{newSignUps}</p>
              </div>
              <div className="flex gap-x-3">
                <div className="bg-gray-200 text-gray-700 text-sm w-[60px] rounded-full py-[2px] font-semibold text-center">
                  0.00
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[48%] xl:w-[23%] h-[175px] px-6 py-5 bg-white rounded-2xl shadow-sm flex flex-col justify-between drop-shadow-sm">
              <div>
                <p className="text-zinc-600 mb-1">Retention</p>
                <p className="text-3xl">{retention + "%"}</p>
              </div>
              <div className="flex gap-x-3">
                <div className="bg-green-200 text-green-700 text-sm w-[60px] rounded-full py-[2px] font-semibold text-center">
                  +0.6%
                </div>
                <div className="text-sm text-zinc-500">From 4.6%</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-8 bg-white rounded-2xl shadow-sm h-[470px] drop-shadow-sm">
            <div className="px-8 pt-6">
              <Title>Performance</Title>
            </div>
            <div className="h-[1px] w-full bg-neutral-200"></div>
            <div className="h-[350px] px-4 mt-7 mb-[100px] flex flex-col justify-center items-center">
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
              <p className="text-sm text-neutral-600">Facebook</p>
            </div>
          </div>
          <div className="w-full mt-8 bg-white rounded-2xl shadow-sm h-[470px] mb-8 drop-shadow-sm"></div>
        </div>
      </div>
    </main>
  );
}

export default App;

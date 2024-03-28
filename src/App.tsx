import "./App.css";
import { useTheme } from "@mui/material/styles";
import { ChartsTextStyle, LineChart, axisClasses } from "@mui/x-charts";
import Title from "./Title";

// Generate Sales Data
function createData(
  time: string,
  amount?: number
): { time: string; amount: number | null } {
  return { time, amount: amount ?? null };
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
  const theme = useTheme();
  return (
    <main className="flex h-full w-screen">
      <nav className="w-0 md:w-[250px] h-screen fixed hidden md:flex flex-col">
        <div className="w-full grow"></div>
        <div className="h-[0.5px] w-full bg-neutral-200"></div>
        <div className="h-[50px] w-full"></div>
      </nav>
      <div className="bg-zinc-100 ml-2 md:ml-[250px] h-full grow">
        <nav className="w-full h-[63px] border flex bg-white drop-shadow-sm py-[10px] pl-8 pr-8">
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
        <div className="grow pl-8 pr-8">
          <div className="bg-neutral-800 mt-8 text-white h-[200px] sm:h-[130px] px-8 rounded-2xl flex sm:flex-row flex-col items-center justify-center gap-y-[20px] sm:justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-2xl lg:text-3xl">
                Unlock Premium stats
              </h1>
              <p className="pt-2 text-sm font-light text-neutral-200">
                Get up to 10 TB of storage for a limited time
              </p>
            </div>
            <button className="sm:ml-8 w-[120px] h-[48px] bg-white text-black lg:w-[150px] rounded-full hover:shadow-lg hover:bg-neutral-100">
              Upgrade
            </button>
          </div>
          <div className="w-full mt-8 flex gap-y-[20px] sm:gap-y-[33px] justify-between flex-wrap">
            <div className="w-full sm:w-[48%] lg:w-[23%] h-[175px] bg-white rounded-2xl shadow-sm drop-shadow-sm"></div>
            <div className="w-full sm:w-[48%] lg:w-[23%] h-[175px] bg-white rounded-2xl shadow-sm drop-shadow-sm"></div>
            <div className="w-full sm:w-[48%] lg:w-[23%] h-[175px] bg-white rounded-2xl shadow-sm drop-shadow-sm"></div>
            <div className="w-full sm:w-[48%] lg:w-[23%] h-[175px] bg-white rounded-2xl shadow-sm drop-shadow-sm"></div>
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

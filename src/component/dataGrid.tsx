import Title from "@/Title";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export const mockData: GridRowsProp = [
  {
    id: 1,
    source: "Zepplin",
    amount: 686.0,
    status: "Active",
    userId: 114536,
    joined: "October",
    group: "Design",
  },
  {
    id: 2,
    source: "Dribbble",
    amount: 322.5,
    status: "Pending",
    userId: 128741,
    joined: "December",
    group: "Marketing",
  },
  {
    id: 3,
    source: "Behance",
    amount: 1000.0,
    status: "Active",
    userId: 984512,
    joined: "January",
    group: "Development",
  },
  {
    id: 4,
    source: "Upwork",
    amount: 75.43,
    status: "Completed",
    userId: 32187,
    joined: "February",
    group: "Sales",
  },
  {
    id: 6,
    source: "Twitter",
    amount: 21.99,
    status: "Completed",
    userId: 147852,
    joined: "April",
    group: "Public Relations",
  },
];

export const columns: GridColDef[] = [
  {
    field: "source",
    headerName: "Source",
    flex: 1,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
  {
    field: "userId",
    headerName: "User ID",
    flex: 1,
  },
  {
    field: "joined",
    headerName: "Joined",
    flex: 1,
  },
  {
    field: "group",
    headerName: "Group",
    flex: 1,
  },
];

const Grid = () => {
  return (
    <div className="flex w-full flex-col items-center overflow-x-scroll justify-center">
      <div className="w-full">
        <Title>Installed Apps</Title>
      </div>
      <div className="h-[1px] w-full bg-neutral-200"></div>
      <div className="w-[400px] sm:w-[600px] lg:w-[800px] px-4 xl:w-[1100px] overflow-scroll">
        <DataGrid
          style={{
            border: "none",
          }}
          rows={mockData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Grid;

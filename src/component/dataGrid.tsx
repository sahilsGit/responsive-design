import Title from "@/Title";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const mockData: GridRowsProp = [
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

const columns: GridColDef[] = [
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
    <Box>
      <div className="">
        <Title>Installed Apps</Title>
      </div>

      <Box
        height={380}
        sx={{
          "& .MuiDataGrid-root": {
            borderBottom: "none",
            borderLeft: "none",
            borderRight: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            paddingLeft: "30px",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            paddingLeft: "30px",
          },
        }}
      >
        <DataGrid rows={mockData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Grid;

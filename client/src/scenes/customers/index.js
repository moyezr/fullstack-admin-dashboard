import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { useGetCustomersQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  const theme = useTheme();

  const { data, isLoading } = useGetCustomersQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem" pb="3rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box 
      boxShadow="2px 2px 5px black, -2px -2px 3px white"
      borderRadius="0.55rem"
      
      mt="40px" height="75vh" sx={{
        "& .MuiDataGrid-root": {
          border: "none"
        }, 
          "& .MuiDataGrid-cell" : {
            borderBottom: "none"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.light
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none"
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]}`
          }
        
      }}>
        <DataGrid
          loading={isLoading || !data}
          rows={data || []}
          columns={columns}
          getRowId={(row) => row._id}
          sx={{
            borderRadius: "1rem"
          }}
        />
      </Box>
    </Box>
  );
};

export default Customers;

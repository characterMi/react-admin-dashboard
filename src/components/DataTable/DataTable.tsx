import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import "./dataTable.scss"
import { Link } from "react-router-dom"
import { useState } from "react"

type Props = {
  columns: GridColDef[];
  rows: object[];
}

const DataTable = (props: Props) => {
  const [allUsers, setAllUsers] = useState(props.rows)
  const handleDelete = (id: number) => {
    setAllUsers((draft) => draft.filter((user) => user.id !== id))
  }
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`${params.row.id}`}>
            <img src="/view.svg" alt="view" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="delete" />
          </div>
        </div>
      )
    }
  }
  return (
    <div className="data-table">
      <DataGrid
        className="data-grid"
        rows={allUsers}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  )
}

export default DataTable
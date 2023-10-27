import { GridColDef } from "@mui/x-data-grid"
import "./users.scss"
import { userRows } from "../../data/data";
import DataTable from "../../components/DataTable/DataTable";
import Add from "../../components/Add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 120,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 120,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Users = (props: Props) => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => props.setOpen(true)}>Add New User</button>
      </div>
      <DataTable columns={columns} rows={userRows} />
      {props.open && <Add slug="user" columns={columns} setOpen={props.setOpen} />}
    </div>
  )
}

export default Users
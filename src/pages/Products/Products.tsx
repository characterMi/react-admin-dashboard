import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data/data";
import DataTable from "../../components/DataTable/DataTable";
import Add from "../../components/Add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 200,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Products = (props: Props) => {
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => props.setOpen(true)}>Add New Products</button>
      </div>
      <DataTable columns={columns} rows={products} />
      {props.open && <Add slug="product" columns={columns} setOpen={props.setOpen} />}
    </div>
  )
}

export default Products
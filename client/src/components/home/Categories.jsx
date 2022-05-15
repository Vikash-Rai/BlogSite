import {
  Button,
  makeStyles,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@material-ui/core";
import { categories } from "../../constant/data";
import { Link, useLocation } from "react-router-dom";

const useStyle = makeStyles({
  create: {
    margin: 20,
    background: "blue",
    color: "#fff",
    width: "86%",
  },
  table: {
    border: "1px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Categories = ({ match }) => {
  const classes = useStyle();
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  return (
    <>
      <Link to={`/create/${location.search}`} style={{ textDecoration: 'none' }} >
        <Button className={classes.create}>Create Blog</Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableCell>
            <Link to={"/"} className={classes.link}>
              All Categories
            </Link>
          </TableCell>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>
                <Link to={`/?category=${category}`} className={classes.link}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default Categories;

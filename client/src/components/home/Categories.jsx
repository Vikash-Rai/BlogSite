import {Button,makeStyles,Table,TableCell,TableRow,TableHead,TableBody} from '@material-ui/core';
import { categories } from '../../constant/data';
import {Link} from 'react-router-dom';


const useStyle = makeStyles({
    create:{
        margin:20,
        background:'blue',
        color:'#fff',
        width:'86%'
    },
    table:{
        border:'1px solid rgba(224,21,78,1)'
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})




const Categories =()=>{
    const classes = useStyle();
    return(
<>
<Link to='/create' className={classes.link}><Button className={classes.create}>Create Blog</Button></Link>
<Table className={classes.table}>
    <TableHead>
        <TableCell>
          <Link to={'/'} className={classes.link}>Blog Categories</Link>
            </TableCell>
    </TableHead>
    <TableBody>
        {
           categories.map(category=>(
               <TableRow>
                   <TableCell>
                       <Link to={`/?category=${category}`} className={classes.link}>
                          {category}
                       </Link>
                       </TableCell>
               </TableRow>
           )) 
        }
    </TableBody>
</Table>
</>
    )
}
export default Categories;
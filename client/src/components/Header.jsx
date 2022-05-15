import {AppBar,Toolbar,makeStyles,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

//CSS Props
const useStyles = makeStyles({
component:{
    background:'#fff',
    color:'black'
},
container:{
    justifyContent:'center',
    '&>*':{ 
        padding:20
    }
},
link:{
    textDecoration:'none',
    color:'inherit'
}

})



const Header=()=>{
    const classes=useStyles();
    return(
       <AppBar className={classes.component}>
           <Toolbar className={classes.container}>
               <Link className={classes.link}to='/'><Typography>Home</Typography></Link>
               <Link to='/about'>ABOUT</Link>
               <Typography>Contact</Typography>
               <Typography>Login</Typography>
           </Toolbar>
       </AppBar>
    )
}
 export default Header;
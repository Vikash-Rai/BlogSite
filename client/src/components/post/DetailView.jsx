import {Box, makeStyles, Typography} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import { getPost, deletePost } from '../../service/api';
import { useHistory } from 'react-router';
const useStyle=makeStyles((theme)=>({

    container:{
        marginTop:'60px',
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding:0
        },
        wordBreak:'break-word'
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    icons:{
        float:'right'
    },
    heading:{
        fontSize:38,
        fontWeight:600,
        textAlign:'center',
        margin:'50px 0 10px 0'
    },
    subheading:{
         color:'#878787',
         display:'flex',
         margin:'20px 0',
         [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
}))
const DetailView=({match})=>{
    const classes = useStyle();
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const history=useHistory();

    const [post,setPost] = useState({});

    useEffect(()=>{
         const fetchData =  async()=>{
         let data = await getPost(match.params.id);
         console.log(data);
         setPost(data);
        }
        fetchData(); 
},[]);

const deleteBlog=async()=>{
    await deletePost(post._id);
    history.push("/");
}

    return(
<Box className={classes.container}>
   <img src={post.picture || url} alt="banner" className={classes.image}/>
   <Box className={classes.icons}>
       <Link to={`/update/${post._id}`}><Edit/></Link>
       <Link ><Delete onClick={()=>deleteBlog()}/></Link>
   </Box>
   <Typography className={classes.heading}>{post.title}</Typography>
   <Box className={classes.subheading}>
       <Link to={`/?username=${post.username}`}  className={classes.link}>
       <Typography>Author:<span style={{fontWeight:600}}>{post.username}</span></Typography>
       </Link>
       <Typography style={{marginLeft:'auto'}}>{new Date (post.createDate).toDateString()}</Typography>
   </Box>
   <Typography>{post.desc}</Typography>
</Box>
    )
}

export default DetailView;
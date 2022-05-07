import{Box,Typography,makeStyles} from '@material-ui/core';
const useStyles = makeStyles(
    {
        container:{
            height:350,
            margin:10,
            borderRadius:10,
            border:'1px solid gray',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            '&>*':{
                padding:'0 5px 5px 5px'
            }
        
        },
        image:{
            height:200,
            width:'100%',
            objectFit:'cover',
            borderRadius:'10px'
        },
        text:{
            color:'#878787',
            fontSize:12
        },
        heading:{
            fontSize:14,
            fontWeight:600,
            textAlign:'center',
        },
        detail:{
            fontSize:14,
            wordBreak:'break-word'
        }
    }
)



const Post =({post})=>{
    const classes = useStyles();
         const url= post.picture || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    return(
         <Box className={classes.container}>
             <img src={url} alt="wrapper" className={classes.image}/>
            <Typography className={classes.text}>{post.categories}</Typography>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}>{post.username}</Typography>
            <Typography className={classes.detail}>{post.desc}</Typography>
         </Box>
    )
}
export default Post;
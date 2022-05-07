import {Box,Typography,makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    imag:{
         background:`url(${'htps://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
         width:'100%',
         height:'50vh',
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center',
         '& :first-child':{
             fontSize:150,
             color:'pink'
         },
         '& :last-child':{
             fontSize:20,
             background:'#fff'
         }
    }
});



const Banner=()=>{
    const classes = useStyles();
    return(
        <Box className={classes.imag}>
            <Typography> BLOGSITE </Typography>
            <Typography> Building a fully featured Blogging Platform </Typography>
        </Box>
    )
}

export default Banner;

import { Typography, Box, makeStyles } from "@material-ui/core";
import { Delete } from '@material-ui/icons';

import { deleteComment } from '../../service/api';

const useStyles = makeStyles({
    component: {
        marginTop: 30,
        marginBottom:20,
        background: '#DDEFFC',
        padding: 10,
        borderRadius:10,
        border:'1px #DDEFFC',
    },
    container: {
        display: 'flex',
        marginBottom: 5,
        
    },
    name: {
        fontWeight: 600,
        fontSize: 18,
        marginRight: 20
    },
    date: {
        fontSize: 14,
        color: '#878787'
    }, 
    delete: {
        marginLeft: 'auto'
    }
})

const Comment = ({ comment, setToggle }) => {
    const classes = useStyles();

    const removeComment = async () => {
       await deleteComment(comment._id) ;
       setToggle(prev => !prev);
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Typography className={classes.name}>{comment.name}</Typography>
                <Typography className={classes.date}>{new Date(comment.date).toDateString()}</Typography>
                <Delete className={classes.delete} onClick={() => removeComment()} />
            </Box>
            <Typography>{comment.comments}</Typography>
        </Box>
    )
}

export default Comment;
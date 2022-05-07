import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
//import { AddCircle } from "@material-ui/icons";
import PanoramaIcon from '@material-ui/icons/Panorama';
import { useState, useEffect } from "react";
import { createPost, uploadFile } from "../../service/api";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop:'70px',
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
    wordBreak: "break-word",
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
    borderRadius:"10px"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textfield: {
    flex: 1,
    margin: "0 30px",
    fontSize: 20,
  },
  textarea: {

    width: "100%",
    marginTop: 50,
    border: "none",
    fontSize: 18,
    outline: "none",
  
  },
}));

const initialValues = {
  title: "",
  desc: "",
  picture: "",
  username: "VikashRai",
  category: "All",
  createDate: new Date(),
};

const CreateView = () => {
  const classes = useStyle();
  const history = useHistory();

  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        console.log(data)
        const image = await uploadFile(data);
        post.picture = image.data;
        setImage(image.data);
      }
    };
    getImage();
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <img src={url} alt="banner" className={classes.image} />
      <FormControl className={classes.form}>
        <label htmlFor="fileInput">
        <PanoramaIcon fontSize="large" color="action"/>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputBase
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          className={classes.textfield}
          name="title"
          recquired
        />

        <Button onClick={() => savePost()} variant="contained" color="primary">
          Publish
        </Button>
      </FormControl>
      <TextareaAutosize
        maxRows={5}
        placeholder="Write here.........."
        className={classes.textarea}
        onChange={(e) => handleChange(e)}
        name="desc"
        recquired
      />
    </Box>
  );
};
export default CreateView;

import { PostsResponse, User, UsersResponse } from '../types/types';
import useFetchedData from '../hooks/useFetchedData';
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  userName: {
    padding: "0 0px",
    fontSize: "35px",
  },
  root: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  gridItem: {
    width: "30%",
    height: "100px",
    backgroundColor: "green",
    marginLeft: "10px",
  },
  gridContainer: {
    alignContent: "center",
  },
  container: {
    width: "600px",
  },
}));


function App() {

  const posts:PostsResponse = useFetchedData("posts");
  const users:UsersResponse = useFetchedData("users");

  const classes = useStyles();



  return (
    <div className={classes.root}>
        {users.data.map((user:User, userIndex:number) => {
          return(
            <>
              <Typography className={classes.userName} key={userIndex}>{user.name}</Typography>
              <Container className={classes.container} key={userIndex}>
                <Grid container className={classes.gridContainer} key={userIndex}>
                  <p>{user.name} has written {posts.data.filter(post => user.id === post.userId).length} posts.</p>
                </Grid>
              </Container>
            </>
          )
        })}
    </div>
  );
}

export default App;

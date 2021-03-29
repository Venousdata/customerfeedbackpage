import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <h2>Home</h2>
      <p>Check out some of our products!</p>
    </div>
  );
};

export default Home;

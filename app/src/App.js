import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2em",
  },
  pagecontainer: {
    position: "relative",
    minHeight: "100vh",
  },
  contentwrap: {
    padding: "1rem",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.pagecontainer}>
      <BrowserRouter>
        <div className={classes.contentwrap}>
          <Paper elevation={2} className={classes.paper}>
          <Switch>
              <main>
                <Route path="/" exact />
              </main>
            </Switch>
          </Paper>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

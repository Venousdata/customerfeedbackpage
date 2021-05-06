import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import Home from "./components/Home";
import Product from "./components/Product";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2em",
  },
  pagecontainer: {
    position: "relative",
    minHeight: "100vh",
    textAlign: "center",
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
            <Typography color="primary" variant="h2">
              Customer Feedback Page
            </Typography>
            <Switch>
              <main>
                <Route path="/" exact component={Home} />
                <Route path="/product/:id" exact component={Product} />
              </main>
            </Switch>
          </Paper>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

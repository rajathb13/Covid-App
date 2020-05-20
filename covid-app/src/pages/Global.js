import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        top: 100,
        position: "relative",
        borderBottom: "10px solid blue",
      },
      root2: {
        minWidth: 275,
        top: 100,
        position: "relative",
        borderBottom: "10px solid #1bff00",
      },
      root3: {
        minWidth: 275,
        top: 100,
        position: "relative",
        borderBottom: "10px solid red",
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
});

const Global = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              REAL Data
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              REAL Date
            </Typography>
            <Typography variant="body2" component="p">
              Number of Recovered People
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root2}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              REAL DATA
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              REAL Date
            </Typography>
            <Typography variant="body2" component="p">
              Number of Recovered People
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root3}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              REAL DATA
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              REAL Date
            </Typography>
            <Typography variant="body2" component="p">
              Number of total deaths
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Global;

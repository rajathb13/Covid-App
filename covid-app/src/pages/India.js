import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";


const useStyles = makeStyles({
    root: {
      minWidth: 300,
      height: "250px",
      top: 100,
      position: "relative",
      borderBottom: "10px solid blue",
      backgroundColor: "#444648",
      color: "white",
      width: "fit-content",
    },
    root2: {
      minWidth: 300,
      height: "250px",
      top: 100,
      position: "relative",
      borderBottom: "10px solid #1bff00",
      backgroundColor: "#444648",
      color: "white",
      width: "fit-content",
    },
    root3: {
      minWidth: 300,
      height: "250px",
      top: 100,
      position: "relative",
      borderBottom: "10px solid red",
      backgroundColor: "#444648",
      color: "white",
      width: "fit-content",
    },
  
    infected: {
      color: "blue",
      fontSize: 50,
      fontWeight: "600",
    },
  
    recovered: {
      color: "#1bff00",
      fontSize: 50,
      fontWeight: "600",
    },
  
    deaths: {
      color: "red",
      fontSize: 50,
      fontWeight: "600",
    },
  
    title: {
      fontSize: 38,
      fontFamily: "segoe-ui",
      alignContent: "center",
      color: "white",
    },
    pos: {
      marginBottom: 12,
      fontFamily: "segoe-ui",
      fontSize: 24,
      color: "white",
    },
    line: {
      fontFamily: "segoe-ui",
      fontSize: 20,
    },
  });

const India = ( {data: { confirmed, cured, death}} ) => {
    const classes = useStyles();
    let curTime = new Date().toDateString()
    //console.log(confirmed)
    if (!confirmed) {
        return "loading...";
      }
    return(
        <Grid
        container
        spacing={6}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs="auto" sm="auto" md="auto">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="center"
              >
                Infected
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                className={classes.infected}
                align="center"
              >
                <CountUp
                start={0}
                end={confirmed}
                duration={2}
                separator=","
              />
              </Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
                align="center"
              >
                {curTime}
              </Typography>
              <Typography
                variant="body2"
                component="h4"
                align="center"
                className={classes.line}
              >
                Number of Infected People
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto">
          <Card className={classes.root2}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="center"
              >
                Recovered
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                className={classes.recovered}
                align="center"
              >
                <CountUp
                start={0}
                end={cured}
                duration={2}
                separator=","
              />
              </Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
                align="center"
              >
                {curTime}
              </Typography>
              <Typography
                variant="body2"
                component="h4"
                align="center"
                className={classes.line}
              >
                Number of Recovered People
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto">
          <Card className={classes.root3}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="center"
              >
                Deaths
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                className={classes.deaths}
                align="center"
              >
               <CountUp
                start={0}
                end={death}
                duration={2}
                separator=","
              />
              </Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
                align="center"
              >
                {curTime}
              </Typography>
              <Typography
                variant="body2"
                component="h4"
                align="center"
                className={classes.line}
              >
                Number of total deaths
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
}
export default India
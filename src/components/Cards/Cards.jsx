import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';                        // for counter of number using this inbuilt component
import cx from 'classnames';                            // use to apply mutltiple classes from cars.module.css

const Cards = ({data : { confirmed, recovered, deaths, lastUpdate}}) => {
   
    if(!confirmed)                                  // When app is opened app.js is rendered which renderers Cards and for now cards dont have data becase componentDidMount() will get called after this so to keep a check. 
    {
        return 'Loading...';                        // it says if confirmed i.e part of data is not there then show Loading
    }
    
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">               
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>       {/* it is the syntax to use multiple classNames that we are using from module.css. xs is fro extrasmall md for mdeium & abhove devices*/}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.0} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">LATEST FIGURES</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19.</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>       {/* it is the syntax to use multiple classNames that we are using from module.css. xs is fro extrasmall md for mdeium & abhove devices*/}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.0} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary">LATEST FIGURES</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19.</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>       {/* it is the syntax to use multiple classNames that we are using from module.css. xs is fro extrasmall md for mdeium & abhove devices*/}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.0} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary">LATEST FIGURES</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19.</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;

// gutterBottom provides padding to text
// textSecondary - grey colour
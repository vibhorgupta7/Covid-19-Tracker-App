import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({data : { confirmed, recovered, deaths, lastUpdate}}) => {
   
    if(!confirmed)                                  // When app is opened app.js is rendered which renderers Cards and for now cards dont have data becase componentDidMount() will get called after this so to keep a check. 
    {
        return 'Loading...';                        // it says if confirmed i.e part of data is not there then show Loading
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">               
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaiant="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of active cases of covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaiant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of Recovered cases of covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaiant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths caused by covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;

// gutterBottom provides padding to text
// textSecondary - grey colour
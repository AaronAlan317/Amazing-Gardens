import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
  text:{
    fontSize: '.75rem'

  },
  card:{

  },
  cols:{
      columns: '4 auto'
  }
});

/**
* Displays plant data for given zip code
* @param {object} dataParentToChild - json data given from parent component
*/
export default function InfoChart({dataParentToChild}) {
    
    const classes = useStyles();
    const data = dataParentToChild
    
  return (
    
        <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start">
            <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} variant="h1" gutterBottom>
                            Fruits
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.cols}>
                        {Object.keys(data.Fruits).map((key, i) =>{
                            return(
                                <Typography   className={classes.text} color="textSecondary" gutterBottom key={i}>
                                    {data.Fruits[key]}
                                </Typography >
                            )

                        })}
                    </CardContent>
                </Card>      
            </Grid>
            <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} variant="h1" gutterBottom>
                            Herbs
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.cols}>
                        {Object.keys(data.Herbs).map((key, i) =>{
                            return(
                                <Typography  className={classes.text} color="textSecondary" gutterBottom key={i}>
                                    {data.Herbs[key]}
                                </Typography >
                            )

                        })}
                    </CardContent>
                </Card> 
            </Grid>
            <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} variant="h1" gutterBottom>
                        Vegetables
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.cols}>
                        {Object.keys(data.Vegetables).map((key, i) =>{
                            return(
                                <Typography  className={classes.text} color="textSecondary" gutterBottom key={i}>
                                    {data.Vegetables[key]}
                                </Typography >
                            )

                        })}
                    </CardContent>
                </Card> 
            </Grid>
            <Grid item xs={12} md={6} >
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} variant="h1" gutterBottom>
                            Flowers
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.cols}>
                        {Object.keys(data.Flower).map((key, i) =>{
                            return(
                                <Typography  className={classes.text} color="textSecondary" gutterBottom key={i}>
                                    {data.Flower[key]}
                                </Typography >
                            )

                        })}
                    </CardContent>
                </Card> 
            </Grid>
        </Grid>
    
  );
}

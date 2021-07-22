import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles'


import Plants from './Plants/Plants';
import PlantForm from './Form/PlantForm';


import { getPlants } from '../actions/plantInventory';
import useStyles from '../styles';
import './styles.css'


const PlantInventory = () => {

    

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPlants());
  }, [currentId, dispatch]);

  

  return (
    <Container maxWidth="lg" >
      
      <AppBar className={classes.appBar}  position="static" color="inherit">
        <Typography className={classes.heading} style={{color:"black"} } variant="h2"  align="center">Plant Inventory</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <PlantForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Plants setCurrentId={setCurrentId} />
            </Grid>
            
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default PlantInventory;
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Plant from './Plant/Plant';
import useStyles from './styles';

const Plants = ({ setCurrentId }) => {
 //const posts = useSelector((state) => state.posts);
 const plants = useSelector((state) => state.plants);
  const classes = useStyles();

  return (
    !plants.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {plants.map((plant) => (
          <Grid key={plant._id} item xs={12} sm={6} md={6}>
            <Plant plant={plant} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Plants;
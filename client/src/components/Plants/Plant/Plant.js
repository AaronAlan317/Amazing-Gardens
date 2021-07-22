import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePlant, deletePlant } from '../../../actions/plantInventory';
import useStyles from './styles';

const Plant = ({ plant, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={plant.selected_file } title={plant.common_name } />
      <div className={classes.overlay}>
        <Typography variant="h4" >{plant.common_name }</Typography>
        <Typography variant="h5">{plant.cultivar}</Typography>
        <Typography variant="h8">{plant.latin_name}</Typography>
        {/* <Typography variant="body2">{moment(plant.createdAt).fromNow()}</Typography> */}
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(plant._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      {/* <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{plant.tags.map((tag) => `#${tag} `)}</Typography>
      </div> */}
      {/* <Typography className={classes.title} gutterBottom variant="h5" component="h2">{plant.title}</Typography> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" >Description: {plant.plant_description}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Type: {plant.type}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Zone: {plant.hardiness_zone}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{plant.plant_depth}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{plant.sun_req}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{plant.height}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{plant.germination_time}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{plant.maturity_time}</Typography>

        <Typography variant="body2" color="textSecondary" component="p">{plant.bloom_time}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{plant.time_of_sow}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{plant.harvest_weight}</Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">{plant.selected_file}</Typography> */}

      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePlant(plant._id))}><ThumbUpAltIcon fontSize="small" /> Like {plant.likeCount} </Button>
        {/* <Button size="small" color="primary" onClick={() => dispatch(deletePlant(plant._id))}><DeleteIcon fontSize="small" /> Delete</Button> */}
        <Button size="small" color="primary" onClick={() => alert("Delete is disabled")}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Plant;
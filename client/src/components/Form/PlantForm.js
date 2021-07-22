import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPlant, updatePlant } from '../../actions/plantInventory';



const PlantForm = ({ currentId, setCurrentId }) => {
  // const [plantData, setPlantData] = useState({  common_name: '', cultivar: '', latin_name:'',
  //                                               plant_description:'', type: '', hardiness_zone:'',
  //                                               plant_depth: '', sun_req: '', height: '', 
  //                                               germination_time: '',maturity_time: '', bloom_time: '', 
  //                                               time_of_sow: '', harvest_weight: '',selected_file: '' });
  const [plantData, setPlantData] = useState({  common_name: '', cultivar: '',latin_name:'',
                                                plant_description:'', type: '', hardiness_zone:'',
                                                selected_file:''});
  
  const plant = useSelector((state) => (currentId ? state.plants.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (plant) setPlantData(plant);
  }, [plant]);

  const clear = () => {
    setCurrentId(0);
    // setPlantData({  common_name: '', cultivar: '', latin_name:'',
    //                 plant_description:'', type: '', hardiness_zone:'',
    //                 plant_depth: '', sun_req: '', height: '', 
    //                 germination_time: '', maturity_time: '', bloom_time: '', 
    //                 time_of_sow: '', harvest_weight: '',selected_file: '' });
    setPlantData({  common_name: '', cultivar: '', latin_name:'', 
                    plant_description:'', type: '', hardiness_zone:'',
                    selected_file:''});

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPlant(plantData));
      clear();
    } else {
      dispatch(updatePlant(currentId, plantData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${plant.title}"` : 'Add a Plant'}</Typography>
        <TextField name="common_name" variant="outlined" 
                   label="Common Name" fullWidth value={plantData.common_name} onChange={(e) => setPlantData({ ...plantData, common_name: e.target.value })} />
        <TextField name="cultivar" variant="outlined" 
                   label="Cultivar" fullWidth value={plantData.cultivar} onChange={(e) => setPlantData({ ...plantData, cultivar: e.target.value })} />
        <TextField name="latin_name" variant="outlined" 
                   label="Latin Name" fullWidth multiline rows={4} value={plantData.latin_name} onChange={(e) => setPlantData({ ...plantData, latin_name: e.target.value })} />
        <TextField name="plant_description" variant="outlined" 
                   label="Plant Description" fullWidth value={plantData.plant_description} onChange={(e) => setPlantData({ ...plantData, plant_description: e.target.value })} />
        <TextField name="type" variant="outlined" 
                   label="Type" fullWidth value={plantData.type} onChange={(e) => setPlantData({ ...plantData, type: e.target.value })} />
        <TextField name="hardiness_zone" variant="outlined" 
                   label="Hardiness Zone" fullWidth value={plantData.hardiness_zone} onChange={(e) => setPlantData({ ...plantData, hardiness_zone: e.target.value })} />
        {/* <TextField name="plant_depth" variant="outlined" 
                   label="Plant Depth" fullWidth multiline rows={4} value={plantData.plant_depth} onChange={(e) => setPlantData({ ...plantData, plant_depth: e.target.value })} />
        
        <TextField name="sun_req" variant="outlined" 
                   label="Sun Requirements" fullWidth value={plantData.sun_req} onChange={(e) => setPlantData({ ...plantData, sun_req: e.target.value })} />
        <TextField name="height" variant="outlined" 
                   label="Height" fullWidth multiline rows={4} value={plantData.height} onChange={(e) => setPlantData({ ...plantData, height: e.target.value })} />
        <TextField name="germination_time" variant="outlined" 
                   label="Germination Time" fullWidth value={plantData.germination_time} onChange={(e) => setPlantData({ ...plantData, germination_time: e.target.value })} />
        <TextField name="maturity_time" variant="outlined" 
                   label="Maturity Time" fullWidth value={plantData.maturity_time} onChange={(e) => setPlantData({ ...plantData, maturity_time: e.target.value })} />
        <TextField name="bloom_time" variant="outlined" 
                   label="Bloom Time" fullWidth multiline rows={4} value={plantData.bloom_time} onChange={(e) => setPlantData({ ...plantData, bloom_time: e.target.value })} />
       <TextField name="time_of_sow" variant="outlined" 
                   label="Time of Sow" fullWidth multiline rows={4} value={plantData.time_of_sow} onChange={(e) => setPlantData({ ...plantData, time_of_sow: e.target.value })} />
        
        
        <TextField name="harvest_weight" variant="outlined" 
                   label="Harvest Weight " fullWidth value={plantData.tags} onChange={(e) => setPlantData({ ...plantData, harvest_weight: e.target.value.split(',') })} />
         */}
        <div className={classes.fileInput}><FileBase type="file" 
                   multiple={false} onDone={({ base64 }) => setPlantData({ ...plantData, selected_file: base64 })} /></div>
        <Button className={classes.buttonSubmit} 
                   variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" 
                   size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default PlantForm;

import React ,{ useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import zipCode from "./ZipCode.json"
import ZipZone from './zipZone';
import useStyles from './styles';
import { Container, AppBar, Typography, Grow, Grid,TextField, Paper } from '@material-ui/core';

// This form accepts a zip code
// and checks if zip exist
// if it does it gives a hardiness zone for the given zip
const ZipForm = props =>{
    // React hook
    // useState sets the initial set of zipData, and setZipData is a function that modifies the state
    const [zipData, setZipData] = useState({
        zip:'',
        zone: ''
    })

    const classes = useStyles();
    //Logic to happen when form is submitedd
    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        // Uses the zip that was entered as key
        // and checks if gives a entry in the data file
        if(zipCode[zipData.zip]){
            const zoneCode = zipCode[zipData.zip].zone
           // const string = JSON.stringify(zoneCode);
            alert('Your zip: ' + zipData.zip + ' has zone code: ' + zoneCode);
            zipData.zone =zoneCode
            console.log(zipData.zip)
            console.log(zipData.zone)
            
            props.setZoneData(zoneCode)
        }else{
            props.setZoneData("No zone")

        }

    
        

    }

    
    return (
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit}>
              <TextField name="cultivar" variant="outlined" 
                   label="Zip Code" 
                   fullWidth value={zipData.zip} 
                   onChange={(e) => {setZipData( { zip: e.target.value } )}} />
            {/* <label>
              zip:
              <input  type="text" 
                    value={zipData.zip}
                    onChange={(e) => {setZipData( { zip: e.target.value } )}} />
            </label> */}
            <input type="submit" value="Submit" />
          </form>
        </Paper>
        );
      
    
    
}
export default ZipForm


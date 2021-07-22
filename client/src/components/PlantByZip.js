import React, { useState } from 'react';
import ZipForm from './Form/ZipForm'
import InfoChart from './Form/InfoChart'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from '../styles';

import zone1 from './data/Zone-1.json'
import zone2 from './data/Zone-2.json'
import zone3 from './data/Zone-3.json'
import zone5 from './data/Zone-5.json'
import zone4 from './data/Zone-4.json'
import zone6 from './data/Zone-6.json'
import zone7 from './data/Zone-7.json'
import zone8 from './data/Zone-8.json'
import zone9 from './data/Zone-9.json'
import zone10 from './data/Zone-10.json'
import zone11 from './data/Zone-11.json'
import zone12 from './data/Zone-12.json'
import zone13 from './data/Zone-13.json'

const zoneArray = [ zone1,zone2,zone3,
                    zone4,zone5,zone6,
                    zone7,zone8,zone9,
                    zone10,zone11,zone12,
                    zone13]

/**
* Renders two components, ZipForm and InfoChart
*/
const PlantsByZip = () => {
    const [zoneData, setZoneData] = useState('')
    let zoneIndex = zoneData
    let data
    const classes = useStyles();
    
    
    switch (zoneIndex){
        case "1a":
            data = {...zone1}
            break
        case "1b":
            data = {...zone1}
            break
        case "2a":
            data = {...zone2}
            break
        case "2b":
            data = {...zone2}
            break
        case "3a":
            data = {...zone3}
            break
        case "3b":
            data = {...zone3}
            break
        case "4a":
            data = {...zone4}
            break
        case "4b":
            data = {...zone4}
            break
        case "5a":
            data = {...zone5}
            break
        case "5b":
            data = {...zone5}
            break
        case "6a":
            data = {...zone6}
            break
        case "6b":
            data = {...zone6}
            break
        case "7a":
            data = {...zone7}
            break
        case "7b":
            data = {...zone7}
            break
        case "8a":
            data = {...zone8}
            break
        case "8b":
            data = {...zone8}
            break
        case "9a":
            data = {...zone9}
            break
        case "9b":
            data = {...zone9}
            break
        case "10a":
            data = {...zone10}
            break
        case "10b":
            data = {...zone10}
            break
        case "11a":
            data = {...zone11}
            break
        case "11b":
            data = {...zone11}
            break
        case "12a":
            data = {...zone12}
            break
        case "12b":
            data = {...zone12}
            break
        case "13a":
            data = {...zone13}
            break
        case "13b":
            data = {...zone13}
            break
      
    }

    return (
    
    <Container maxWidth="lg" >
      
      <AppBar className={classes.appBar}  position="static" color="inherit">
        <Typography className={classes.heading} style={{color:"black"} } variant="h2"  align="center">Planting Guide</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container  justify="center" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={3}  >
                    <ZipForm  setZoneData = {setZoneData} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    {data 
                                ? <InfoChart dataParentToChild ={data}/>
                                : null
                            }
                </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    );
}
 
export default PlantsByZip;

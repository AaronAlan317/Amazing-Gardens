import mongoose from 'mongoose';

const plantSchema = mongoose.Schema({
    common_name : String,
    selected_file: String,
    cultivar: String,
    latin_name: String,
    plant_description : String,
    type: String,
    hardiness_zone: String,
    plant_depth : Number,
    sun_req: Number,
    height: Number,
    germination_time: Number,
    maturity_time: Number,
    bloom_time: Number,
    time_of_sow: Date,
    harvest_weight: [{  day_harvested: Date,
                        weight: Number}],
    
    
    
    })

var PlantData = mongoose.model('PlantData', plantSchema);

export default PlantData;
import express from 'express';
import mongoose from 'mongoose';


import PlantData from '../models/plantData.js';

const router = express.Router();

export const getPlants = async (req, res) => { 
    try {
        const plantData = await PlantData.find();
                
        res.status(200).json(plantData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPlant = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PlantData.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPlant = async (req, res) => {
    const { common_name, cultivar, latin_name,
            plant_description, type, hardiness_zone,
            plant_depth, sun_req, height, germination_time,
            maturity_time, bloom_time, time_of_sow, harvest_weight,selected_file } = req.body;

    const newPlantData = new PlantData({    common_name, cultivar, latin_name,
                                            plant_description, type, hardiness_zone,
                                            plant_depth, sun_req, height, germination_time,
                                            maturity_time, bloom_time, time_of_sow, harvest_weight,selected_file })

    try {
        await newPlantData.save();

        res.status(201).json(newPlantData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePlant = async (req, res) => {
    const { id } = req.params;
    const { common_name, cultivar, latin_name,
        plant_description, type, hardiness_zone,
        plant_depth, sun_req, height, germination_time,
        maturity_time, bloom_time, time_of_sow, harvest_weight,selected_file } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPlant = {  common_name, cultivar, latin_name,
                            plant_description, type, hardiness_zone,
                            plant_depth, sun_req, height, germination_time,
                            maturity_time, bloom_time, time_of_sow, 
                            harvest_weight,selected_file, _id: id };

    await PlantData.findByIdAndUpdate(id, updatedPlant, { new: true });

    res.json(updatedPlant);
}

export const deletePlant = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No plant with id: ${id}`);

    await PlantData.findByIdAndRemove(id);

    res.json({ message: "Plant deleted successfully." });
}

export const likePlant = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No plant with id: ${id}`);
    
    const plant = await PlantData.findById(id);

    const updatedPlant = await PlantData.findByIdAndUpdate(id, { likeCount: plant.likeCount + 1 }, { new: true });
    
    res.json(updatedPlant);
}


export default router;
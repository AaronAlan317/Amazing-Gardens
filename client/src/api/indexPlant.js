import axios from 'axios';

const url = 'https://amazing-gardens.herokuapp.com/plantInvent';
// const url = 'https://amazing-gardens.herokuapp.com/plantInvent';

export const fetchPlants = () => axios.get(url);
export const createPlant = (newPlant) => axios.post(url, newPlant);
export const likePlant = (id) => axios.patch(`${url}/${id}/likePlant`);
export const updatePlant = (id, updatedPlant) => axios.patch(`${url}/${id}`, updatedPlant);
export const deletePlant = (id) => axios.delete(`${url}/${id}`);
import express from 'express';

import { getPlants, getPlant, createPlant, updatePlant, likePlant, deletePlant } from '../controllers/plantPosts.js';

const router = express.Router();

router.get('/', getPlants);
router.post('/', createPlant);
router.get('/:id', getPlant);
router.patch('/:id', updatePlant);
router.delete('/:id', deletePlant);
router.patch('/:id/likePlant', likePlant);

export default router;
import express from 'express';
import { Application } from '../models/Application.js';

const router = express.Router();

router.get('/applications', async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: 'Error fetching applications' });
  }
});

export { router as adminRouter };
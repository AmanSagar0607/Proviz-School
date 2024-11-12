import express from 'express';
import { Application } from '../models/Application.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, statement } = req.body;
    const newApplication = new Application({ name, email, phone, statement });
    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ message: 'Error submitting application' });
  }
});

export { router as applicationRouter };
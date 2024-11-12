import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  statement: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Application = mongoose.model('Application', applicationSchema);
import mongoose, { Schema, Document } from 'mongoose';

export interface IJobOffer extends Document {
  userId: Schema.Types.ObjectId;
  projectName: string;
  position: string;
  budget: number;
  location: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  createdAt: string;
  updatedAt: string;
  authID: string;
}

const jobOfferSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  projectName: { type: String, required: true },
  position: { type: String, required: true },
  budget: { type: Number, required: true },
  location: { type: String, required: true },
  date: {
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  description: { type: String, required: true },
  createdAt: { type: String, default: Date.now },
  updatedAt: { type: String, default: Date.now },
  authID: { type: String }
});

export default mongoose.model<IJobOffer>('JobOffer', jobOfferSchema);

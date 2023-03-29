import { Request, Response } from 'express';
import JobOffer, { IJobOffer } from '../models/JobOffer';

export const createJobOffer = async (req: Request, res: Response) => {
  const newJobOffer = new JobOffer(req.body);

  try {
    const savedJobOffer = await newJobOffer.save();
    res.status(201).json(savedJobOffer);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateJobOffer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedJobOffer = await JobOffer.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json(updatedJobOffer);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteJobOffer = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await JobOffer.findByIdAndDelete(id);
    res.status(200).json({ message: 'Job offer deleted' });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getJobOffersByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const jobOffers = await JobOffer.find({ userId });
    res.status(200).json(jobOffers);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getAllJobOffers = async (_req: Request, res: Response) => {
  try {
    const jobOffers = await JobOffer.find();
    res.status(200).json(jobOffers);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
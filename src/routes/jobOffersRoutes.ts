import express from 'express';

import {
  createJobOffer,
  updateJobOffer,
  deleteJobOffer,
  getJobOffersByUser,
  getAllJobOffers,
} from '../controllers/jobOffersController';

const router = express.Router();

router.post('/', createJobOffer);
router.put('/:id', updateJobOffer);
router.delete('/:id', deleteJobOffer);
router.get('/user/:userId', getJobOffersByUser);
router.get('/', getAllJobOffers);

export default router;
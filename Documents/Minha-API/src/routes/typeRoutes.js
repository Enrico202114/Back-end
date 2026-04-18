import express from 'express';

const router = express.Router();

// GET /types
router.get('/', (req, res) => {
  res.json({ message: 'Lista de tipos' });
});

export default router;
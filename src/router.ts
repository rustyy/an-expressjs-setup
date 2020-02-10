import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/static', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

router.get('/api', (req, res) => {
  res.json({
    message: 'hello',
  });
});

router.post('/', (req,res) => {
  res.status(200).send();
});

export default router;

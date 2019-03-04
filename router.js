const express = require('express');
const path = require('path');
const router = express.Router(); /* eslint-disable-line */

router.get('/static', (req, res) => {
  res.sendfile(path.join(`${__dirname}/public/index.html`));
});

router.get('/api', (req, res) => {
  res.send({
    message: 'hello',
  });
});

module.exports = router;

const { Router } = require('express');
const { createSeller } = require('../controllers/sellerController');

const router = Router();

router.post('/api/create/seller', createSeller);

module.exports = router;
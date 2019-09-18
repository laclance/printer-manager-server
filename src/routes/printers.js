const express = require('express');
const router = express.Router();
const {
    getPrinters,
    getPrinter,
    createPrinter,
    updatePrinter,
    deletePrinter
} = require('../controllers/printersController');

router.get('/printers', getPrinters);
router.get('/printers/:id', getPrinter);
router.post('/printers', createPrinter);
router.put('/printers/:id', updatePrinter);
router.delete('/printers/:id', deletePrinter);

module.exports = router;
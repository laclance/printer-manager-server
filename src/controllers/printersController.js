const { Printer } = require('../models');

exports.getPrinters = function (req, res) {
    Printer.findAll()
        .then(printers => res.status(200).json(printers))
        .catch(err => res.status(500).get(err.errors[0].message));
};

exports.getPrinter = function (req, res) {
    Printer.findByPk(req.params.id)
        .then(printers => res.status(200).json(printers))
        .catch(err => res.status(400).send(err.errors[0].message));
};

exports.createPrinter = function (req, res) {
    console.log('req, res');
    console.log(req, res);
    Printer.create(req.body)
        .then(printer => {
            res.status(201).json(printer);
        })
        .catch(err => res.status(400).send(err.errors[0].message));
};

exports.updatePrinter = function (req, res) {
    Printer.update(req.body, { where: { id: req.params.id } })
        .then(success => {
            success === 1 ? res.status(201).json(req.body) : res.status(404).send('Printer Not Found');
        })
        .catch(err => res.status(400).send(err.errors[0].message));
};

exports.deletePrinter = function (req, res) {
    Printer.destroy({ where: { id: req.params.id } })
        .then((success) => {
            success === 1 ? res.status(200).json(req.params.id) : res.status(404).send('Printer Not Found');
        })
        .catch(err => res.status(400).send(err.errors[0].message));
};
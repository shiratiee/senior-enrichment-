const express = require('express');
const router = require('express').Router()
const Campuses = require('../db/models').Campuses


router.get('/', function (req, res, next) {
    Campuses.findAll({})
        .then(campuses => res.json(campuses))
        .catch(next);
});


router.get('/:id', function (req, res, next) {
    Campuses.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function (campuses) {
            !campuses ? res.sendStatus(404) :
                res.json(campuses)
            })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Campuses.create(req.body)
        .then(campus => res.json(campus))
            .catch(next)
})

router.put('/:id', (req, res, next) => {
    Campuses.update(req.body, {
    where: {id: req.params.id}
    })
    .then(() => res.send('updated sucessfully'))
})

router.delete('/:id/delete', (req, res, next) => {
    Campuses.findOne({
            where: {id: req.params.id}
    })
    .then((result) => {
        return Campus.destroy({
            where: {id: req.params.id}
    })
    .then((z) => {res.send(result)
    })
    .catch(next);
    })
});

    module.exports = router;
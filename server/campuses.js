const express = require('express');
const router = require('express').Router()
const Campuses = require('../db/models').Campuses


router.get('/', function (req, res, next) {
    Campuses.findAll()
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
            if (!campuses) {
                res.sendStatus(404);
            } else {
                res.json(campuses)
            }
        })
        .catch(next)
});


router.post('/', function (req, res, next) {
        Campuses.create(req.body)
            .then(campuses => res.json(campuses))
            .catch(next);
    });



router.put('/:id', function (req, res, next) {
    Campuses.findById({
        where: {
            id: req.params.id
        }
    })
        .then(function (beforeUpdatedCampuses) {
            Campuses.update(req.body)
                .then(function (updatedCampuses) {
                    res.status(200).json(updatedCampuses)
                        .catch(next);
                });
        })
    })


    router.delete('/:id', function (req, res) {
        Campuses.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (deletedcampuses) {
                res.json({ deletedcampuses });
            })
            .catch(function (err) {
                if (err) {
                    res.status(500).json();
                }
            });
    });

    module.exports = router;
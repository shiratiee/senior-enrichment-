const express = require('express');
const router = require('express').Router()
const Student = require('../db/models').Student


router.get('/', function (req, res, next) {
    Student.findAll()
        .then(student => res.json(student))
        .catch(next);
});


router.get('/:id', function (req, res, next) {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function (student) {
            if (!student) {
                res.sendStatus(404);
            } else {
                res.json(student)
            }
        })
        .catch(next)
});

router.post('/', function (req, res, next) {
    if (req.body) {
        Student.create(req.body)
            .then(student => res.json(student))
            .catch(next);
    } else {
        res.sendStatus(500)
    }
});



router.put('/:id', function (req, res, next) {
    Student.findById({
        where: {
            id: req.params.id
        }
    })
        .then(function (beforeUpdatedStudent) {
            Student.update(req.body)
                .then(function (updatedStudent) {
                    res.status(200).json(updatedStudent)
                        .catch(next);
                });
        })
})
router.delete('/:id', function (req, res) {
    Students.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(function (deletedstudent) {
            res.json({ deletedstudent });
        })
        .catch(function (err) {
            if (err) {
                res.status(500).json();
            }
        })
});

module.exports = router;
const express = require('express');
const router = require('express').Router()
const Student = require('../db/models').Student


router.get('/', function (req, res, next) {
    Student.findAll({})
        .then(student => res.json(student))
        .catch(next);
});

router.get('/:id', function (req, res, next) {
    Student.findOne({
        where: {id: req.params.id},
        include: [Campus]
    })
        .then(function (student) {
            !student ? res.sendStatus(404) : res.json(student)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Student.create(req.body)
      .then(user => res.json(user))
      .catch(next)
  })
  
  
  
router.put('/:id/', (req, res, next) => {
    Student.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then((result) => {
      return Student.findOne({
      where: { id: req.params.id}
    })
    })
    .then(student => res.send(student))
})

 router.delete('/:id/delete', (req, res, next) => {
    Student.findOne({
            where: {id: req.params.id}
        })
        .then((result) => {
          return User.destroy({
            where: {id: req.params.id}
          })
          .then((z) => {res.send(result)})
        })
        .catch(next);
});


module.exports = router;
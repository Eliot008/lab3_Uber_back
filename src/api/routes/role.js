const express = require('express');
const mongo = require('../../../connection');
const router = express.Router();

router.get('/', async function (req, res, next) {
  const roles = await mongo.getRoles();
  res.send(roles)
})

router.get('/:id', async function (req, res, next) {
  const role = await mongo.getRole(req.params.id);
  if (role) {
    res.send(role);
  } else {
    res.send({});
  }
});

module.exports = router;
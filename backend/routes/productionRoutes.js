const express = require("express")
const router = express.Router()
const cors = require('cors')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const FinalItem = require('../models/finalItem.model')
const RawMaterial = require('../models/rawMaterial.model')
const ComponentItem = require('../models/componentItem.model')
const User = require('../models/user.model')

//CREATE
router.post('/addRawMaterial', (req, res, next)=>{
    console.log(req.body);
    res.send({msg: 'ok'});
})

//READ
router.get('/all/:id', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    console.log(req.body);
    res.send({msg: 'ok'});
})

//UPDATE


//DESTROY

module.exports = router;
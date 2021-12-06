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
router.post('/addNew', (req, res, next)=>{
    console.log(req.params.id)

})

//READ
router.get('/all/:id', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    console.log(req.params.id)

})

//UPDATE


//DESTROY

module.exports = router;
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
    //console.log(req.body);
    let newRawMaterial = new RawMaterial({
        createdOn: Date.now(),
        name: req.body.mat.name,
        level: req.body.mat.level,
        owner: req.body.id,
    })
    newRawMaterial.save();
})

//READ
router.get('/all/:id', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    //console.log(req.params);
    RawMaterial.find({owner: req.params.id}).then((rawMaterials)=>{
        res.json({success: true, list: rawMaterials})
    }).catch((err)=>{
        res.json({success: false, msg: err})
    })
})

//UPDATE


//DESTROY

module.exports = router;
const express = require("express")
const router = express.Router()
const cors = require('cors')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')
const RawMaterial = require('../models/rawMaterial.model')
const ComponentItem = require('../models/componentItem.model')
const FinalItem = require('../models/finalItem.model')

//CREATE
router.post('/addRawMaterial', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.body);
    let newRawMaterial = new RawMaterial({
        createdOn: Date.now(),
        name: req.body.mat.name,
        level: req.body.mat.level,
        owner: req.body.id,
    })
    newRawMaterial.save().then((mat) => {
        res.json({ success: true, mat: mat })
    });
})

//READ
router.get('/all/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.params);
    RawMaterial.find({ owner: req.params.id }).then((rawMaterials) => {
        res.json({ success: true, list: rawMaterials })
    }).catch((err) => {
        res.json({ success: false, msg: err })
    })
})

//UPDATE
router.post('/editRawMaterial', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.body);
    RawMaterial.findOne({ id: req.body.id, owner: req.params.id }).then((rawMaterial) => {
        rawMaterial.name = req.body.name;
        rawMaterial.level = req.body.level;
        rawMaterial.save().then((res) => {
            res.json({ success: true, mat: rawMaterial })
        })
    }).catch((err) => {
        res.json({ success: false, msg: err })
    })
})

//DESTROY
router.delete('/deleteRawMaterial/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.params);
    RawMaterial.findOneAndDelete({ _id: req.params.id }).then((rawMaterial) => {
        res.json({ success: true, id: rawMaterial._id })
    }).catch((err) => {
        res.json({ success: false, msg: err })
    })
})

module.exports = router;
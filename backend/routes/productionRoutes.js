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
        description: req.body.mat.description,
        level: req.body.mat.level,
        type: 'raw',
        discipline: req.body.mat.discipline,
        owner: req.body.id,
    })
    newRawMaterial.save().then((mat) => {
        res.json({ success: true, mat: mat })
    });
})
router.post('/addComponentMaterial', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.body);
    let newComponentMaterial = new ComponentItem({
        createdOn: Date.now(),
        name: req.body.mat.name,
        description: req.body.mat.description,
        level: req.body.mat.level,
        type: 'component',
        discipline: req.body.mat.discipline,
        blueprint: req.body.mat.blueprint,
        owner: req.body.id,
    })
    newComponentMaterial.save().then((mat) => {
        res.json({ success: true, mat: mat })
    });
})
router.post('/addFinalItem', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.body);
    let newFinalItem = new FinalItem({
        createdOn: Date.now(),
        name: req.body.mat.name,
        description: req.body.mat.description,
        statBlock: "0",
        level: req.body.mat.level,
        type: "final",
        discipline: req.body.mat.discipline,
        blueprint: req.body.mat.blueprint,
        owner: req.body.id,
    })
    newFinalItem.save().then((mat) => {
        res.json({ success: true, mat: mat })
    });
})

//READ
router.get('/allRaw/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.params);
    RawMaterial.find({ owner: req.params.id }).then((rawMaterials) => {
        res.json({ success: true, list: rawMaterials })
    }).catch((err) => {
        res.json({ success: false, msg: err })
    })
})
router.get('/allComponent/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.params);
    ComponentItem.find({ owner: req.params.id }).then((componentMaterials) => {
        res.json({ success: true, list: componentMaterials })
    }).catch((err) => {
        res.json({ success: false, msg: err })
    })
})
router.get('/allFinal/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.params);
    FinalItem.find({ owner: req.params.id }).then((finalItems) => {
        res.json({ success: true, list: finalItems })
    }).catch((err) => {
        res.json({ success: false, msg: err })
    })
})
router.post('/allMadeFrom', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.body);
    FinalItem.find({ owner: req.body.owner }).then((finalItems) => {
        let retArray = [];
        for (let i = 0; i < finalItems.length; i++) {
            for (let j = 0; j < finalItems[i].blueprint.recipe.length; j++) {
                console.log(finalItems[i].blueprint.recipe[j])                
            }          
        }
        res.json({ success: true, list: retArray })
    }).catch((err) => {
        //res.json({ success: false, msg: err })
    })
})

//UPDATE
router.post('/editRawMaterial', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.body);
    RawMaterial.findOne({ _id: req.body.mat._id }).then((rawMaterial) => {
        rawMaterial.name = req.body.mat.name;
        rawMaterial.level = req.body.mat.level;
        rawMaterial.description = req.body.mat.description;
        rawMaterial.discipline = req.body.mat.discipline;
        rawMaterial.save()
        res.json({success: true, mat: rawMaterial})
    }).catch((err) => {
        err.json({ success: false, msg: err })
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
router.delete('/deleteComponentMaterial/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.params);
    ComponentItem.findOneAndDelete({ _id: req.params.id }).then((rawMaterial) => {
        res.json({ success: true, id: rawMaterial._id })
    }).catch((err) => {
        res.json({ success: false, msg: err })
    })
})
router.delete('/deleteFinalItem/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //console.log(req.params);
    FinalItem.findOneAndDelete({ _id: req.params.id }).then((rawMaterial) => {
        res.json({ success: true, id: rawMaterial._id })
    }).catch((err) => {
        res.json({ success: false, msg: err })
    })
})

module.exports = router;
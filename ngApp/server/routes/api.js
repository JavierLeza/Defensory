const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const File = require('../models/file');

const db = "mongodb://javier:javier@ds013579.mlab.com:13579/defender_jlezaa";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error: " + err);
    }
});

router.get('/files', function(req,res){
    console.log('Get request for all files');
    File.find({})
    .exec(function(err,files){
        if(err){
            console.log('Error retrieving files');
        }else{
            res.json(files);
        }
    });
});

router.get('/files/:id', function(req,res){
    console.log('Get request for a single file');
    File.findById(req.params.id)
    .exec(function(err,file){
        if(err){
            console.log('Error retrieving files');
        }else{
            res.json(file);
        }
    });
});

router.post('/file', function(req,res){
    console.log('Post a file');
    var newFile = new File();
    newFile.title = req.body.title;
    newFile.url = req.body.url;
    newFile.description = req.body.description;
    newFile.save(function(err,insertedFile){
        if(err){
            console.log('Error saving file');
        }else{
            res.json(insertedFile);
        }
    });
});

router.put('/file/:id', function(req, res){
    console.log('Update a file');
    File.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, updatedFile){
        if(err){
            res.send('Error updating file');
        }else{
            res.json(updatedFile);
        }
    }

    );
});

router.delete('/file/:id', function(req,res){
    console.log('Deleting a file');
    File.findByIdAndRemove(req.params.id, function(err, deletedFile){
        if(err){
            res.send('Error deleting file');
        }else{
            res.json(deletedFile);
        }
    });
});

module.exports = router;
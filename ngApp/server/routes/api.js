const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Complain = require('../models/complain');
const nodemailer = require('nodemailer');

const db = "mongodb://javier:javier@ds013579.mlab.com:13579/defender_jlezaa";
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.error("Error: " + err);
    }
});


router.get('/sendemail', function (req, res) {
    const smtpTransport = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: 'jlezaa00@hotmail.com',
            pass: 'coco15coco15'
        },
        tls: { rejectUnauthorized: false } 
    });
    const mailOptions={
        from:'jlezaa00@hotmail.com',
        to:'jlezaa00@estudiantes.unileon.es',
        subject:'Respuesta',
        text:'Hola Mundo'
    }
    smtpTransport.sendMail(mailOptions,function(err, complains){
        if(err){
            console.log(err);
        }else{
            res.send('Email sent!');
        }
    });
});


router.get('/complains', function (req, res) {
    console.log('Get request for all complains');
    Complain.find({})
        .exec(function (err, complains) {
            if (err) {
                console.log('Error retrieving complains');
            } else {
                res.json(complains);
            }
        });
});

router.get('/complains/:id', function (req, res) {
    console.log('Get request for a single complain');
    Complain.findById(req.params.id)
        .exec(function (err, complain) {
            if (err) {
                console.log('Error retrieving complains');
            } else {
                res.json(complain);
            }
        });
});

router.post('/complain', function (req, res) {
    const actdate = new Date();
    actdate.setUTCHours(actdate.getUTCHours() + 2);
    console.log('Post a complain');
    var newComplain = new Complain();
    newComplain.name = req.body.name;
    newComplain.lastName = req.body.lastName;
    newComplain.request = req.body.request;
    newComplain.email = req.body.email1 + req.body.email2;
    newComplain.topic = req.body.topic;
    newComplain.reason = req.body.reason;
    newComplain.postDate = actdate.toUTCString();
    newComplain.save(function (err, insertedComplain) {
        if (err) {
            console.log('Error saving complain');
        } else {
            res.json(insertedComplain);
        }
    });
});

router.put('/complain/:id', function (req, res) {
    const actdate = new Date();
    actdate.setUTCHours(actdate.getUTCHours() + 2);
    console.log('Update a complain');
    Complain.findByIdAndUpdate(req.params.id,
        {
            $set: { answer: req.body.answer, answerDate: actdate.toUTCString() }
        },
        {
            new: true
        },
        function (err, updatedComplain) {
            if (err) {
                res.send('Error updating complain');
            } else {
                res.json(updatedComplain);
            }
        }

    );
});

router.delete('/complain/:id', function (req, res) {
    console.log('Deleting a complain');
    Complain.findByIdAndRemove(req.params.id, function (err, deletedComplain) {
        if (err) {
            res.send('Error deleting complain');
        } else {
            res.json(deletedComplain);
        }
    });
});

module.exports = router;
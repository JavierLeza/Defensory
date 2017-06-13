const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Complain = require('../models/complain');
const User = require('../models/user');
const nodemailer = require('nodemailer');

const db = "mongodb://javier:javier@ds013579.mlab.com:13579/defender_jlezaa";
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.error("Error: " + err);
    }
});


router.post('/sendemail', function (req, res) {
    const valueEmail = req.body.email;
    const valueAnswer = req.body.answer;
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
        to: valueEmail,
        subject:'Respuesta del Defensor ULE',
        text: 'A continuación se muestra la respuesta generada a la '
        +req.body.request+' que realizó con el siguiente motivo - '+ req.body.reason +':\n\n'
        +valueAnswer
    };
    smtpTransport.sendMail(mailOptions,function(err, complains){
        if(err){
            console.log(err);
        }else{
            res.send('Email sent!');
        }
    });
});

router.get('/users', function (req, res) {
        User.find({})
        .exec(function (err, users) {
            if (err) {
                console.log('Error retrieving users');
            } else {
                res.json(users);
            }
        });
});

router.post('/newUser', function (req, res) {
    var newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.save(function (err, insertedUser) {
        if (err) {
            console.log('Error saving user');
        } else {
            console.log(newUser.username);
            res.json(insertedUser);
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
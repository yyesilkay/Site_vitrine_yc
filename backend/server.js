const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { nom, email, sujet, message } = req.body;

    const transporter = nodemailer.createTransport({
        secure:true,
        host: "smtp.gmail.com",
        port: 465,
        auth:{
            user: process.env.GMAIL_USER,  
            pass: process.env.GMAIL_PASS 
        }
    });

    const mailOptions = {
        from: email,
        to: 'a.bridja77@gmail.com',
        subject: `Message de ${nom} - Sujet: ${sujet}`,
        text: message
    };


    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            return res.status(500).send(err.toString());

        }
        res.send('Email envoyé avec succés');
    });
});

app.post('/send-estimate', (req, res) => {
    const {
        lastName,
        firstName,
        address,
        email,
        phone,
        department,
        showcaseSite,
        ecommerceSite,
        mobileApp,
        maintenance,
        details,
        comment
    } = req.body;

    const selectedServices = [];
    if (showcaseSite) selectedServices.push('Site vitrine');
    if (ecommerceSite) selectedServices.push('Site e-commerce');
    if (mobileApp) selectedServices.push('Application Mobile');
    if (maintenance) selectedServices.push('Maintenance');

    const message = `
        Nom : ${firstName} ${lastName}
        Adresse : ${address}
        Email : ${email}
        Téléphone : ${phone}
        Département : ${department}
        Services demandés : ${selectedServices.join(', ')}
        Détails : ${details}
        Commentaire : ${comment}
        `;
    
    const transporter = nodemailer.createTransport({
        secure:true,
        host: "smtp.gmail.com",
        port: 465,
        auth:{
            user: process.env.GMAIL_USER,  
            pass: process.env.GMAIL_PASS 
        }
    });

    const mailOptions = {
        from: email,
        to: 'a.bridja77@gmail.com',
        subject: 'Demande de devis de ${firstName} ${lastName}',
        text: message

    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            return res.status(500).send(err.toString());

        }
        res.send('Demande de devis envoyée avec succès');
    });

});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
})
  
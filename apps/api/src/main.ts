import * as nodemailer from 'nodemailer';
import express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

interface ContactRequest {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

interface EstimateRequest {
  lastName: string;
  firstName: string;
  address: string;
  email: string;
  phone: string;
  department: string;
  showcaseSite: boolean;
  ecommerceSite: boolean;
  mobileApp: boolean;
  maintenance: boolean;
  details: string;
  comment: string;
}

app.post('/send-email', (req: Request<{}, {}, ContactRequest>, res: Response) => {
  const { nom, email, sujet, message } = req.body;

  debugger;
  const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: 'yayusamsung@gmail.com',
    subject: `Message de ${nom} - Sujet: ${sujet}`,
    text: message
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send(err.toString());
    }
    res.send('Email envoyé avec succés');
  });
});

app.post('/send-estimate', (req: Request<{}, {}, EstimateRequest>, res: Response) => {
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

  const selectedServices: string[] = [];
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
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: 'yayusamsung@gmail.com',
    subject: `Demande de devis de ${firstName} ${lastName}`,
    text: message
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send(err.toString());
    }
    res.send('Demande de devis envoyée avec succès');
  });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});
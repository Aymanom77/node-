// email-sender.js
const nodemailer = require('nodemailer');

// Configurer le transporteur SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre.email@gmail.com',
    pass: 'votreMotDePasse'
  }
});

// Définir les options de l'e-mail
const mailOptions = {
  from: 'votre.email@gmail.com',
  to: 'destinataire@email.com',
  subject: 'Test d\'envoi d\'e-mail',
  text: 'Ceci est un test d\'envoi d\'e-mail depuis Node.js.'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
  } else {
    console.log('E-mail envoyé avec succès:', info.response);
  }
});


const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const handlebars = require(`express-handlebars`)
const handlebarsHelpers = require('handlebars-helpers')();
const eq = handlebarsHelpers.eq;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      eq: eq,
    },
  }),
);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page'
  });
});
app.get(`/portfolioenglish` , (req,res)=>{
  res.render('portfolioenglish', {
    title: 'Portfolio'
  });
})
app.get(`/portfolio` , (req,res)=>{
  res.render('portfolio', {
    title: 'Portfolio'
  });
})
app.get(`/certificados` , (req,res)=>{
  res.render('certificados', {
    title: 'Portfolio'
  });
})




app.use(express.json());

app.post('/enviar-opinion', async (req, res) => {
  const { nombre, correo, opinion } = req.body;

  const transporter = nodemailer.createTransport({
     service:"gmail",
      port: 587,
      auth: {
          user: 'nikiamado123@gmail.com', 
          pass: 'boja yrjt wpee psbz' 
      }
  });

  const mailOptions = {
      from: 'opinionesportfolio@gmail.com',
      to: 'nikiamado123@gmail.com', 
      subject: 'Nueva opinión de ' + nombre,
      text: 'Opinión: ' + opinion + ' Correo electrónico: ' + correo
  };

  try {
      await transporter.sendMail(mailOptions);
      res.json({ success: true });
  } catch (error) {
      console.error(error);
      res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
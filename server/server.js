// const app = require('./app');
const express = require('express')
const connectDatabase = require('./config/database');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');


// const https = require('https')
// const path = require('path')
// const fs = require('fs')




app.use(express.json());
app.use(bodyParser.json({limit:"30mb" , extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(fileUpload());


// app.use(userRoutes);
// app.use(taskRoute)
const dotenv = require('dotenv');

const cloudinary = require('cloudinary');
const auth = require('./routes/auth');
const experience = require('./routes/experience');
const lodging = require('./routes/lodging');
const restaurant = require('./routes/restaurant');
const transport = require('./routes/transport');


// Define a middleware function to redirect HTTP to HTTPS
// function httpsRedirect(req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect('https://' + req.headers.host + req.url);
//     }
//     return next();
//   }


  // Use the middleware for all incoming requests
//app.use(httpsRedirect);







//////////****************www */
  app.use(function(req, res, next) {
    if (req.headers.host.slice(0, 4) === 'www.') {
      var newHost = req.headers.host.slice(4);
      return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
    }
    next();
  });


app.use('/api/v1', auth);  //***************** SIGNUP and LOGIN ********************** */
app.use('/api/v1', transport);
app.use('/api/v1', restaurant);
app.use('/api/v1', lodging);
app.use('/api/v1', experience);


// app.get('/http://localhost:3001', function(req, res) {
//     // Redirect to the new URL with a 301 status code
//     res.redirect(301, 'https://localhost:3000');
//   });

 //app.use(errorMiddleware);
// Prevent Nosql Injection Sanitize Data
const mongoSanitize = require('express-mongo-sanitize');

//XSS Protection "Security Headers"
const helmet = require("helmet");

//
var xss = require('xss-clean')
//import xss from 'xss-clean';

//Setting up config file
dotenv.config({ path: 'config.env'});

//Use to limit repeated requests to public APIs and/or endpoints such as password reset. 
const rateLimit = require('express-rate-limit')

// Express middleware to protect against HTTP Parameter Pollution attacks
var hpp = require('hpp');

// Setting up cloudinary configuration
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server Started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode. `);
});

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})

//Sanitize Data
app.use(mongoSanitize());

//Helmet
app.use(helmet());


///code SEO  suite checklist , 2/

app.use(express.static('public'));




app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=86400');
  next();
});

// Définit la date d'expiration à 1 semaine pour les fichiers statiques
app.use((req, res, next) => {
  res.set('Expires', new Date(Date.now() + 604800000).toUTCString());
  next();
});


/// FIN CODE SEO ////


//(XSS) is a type of injection attack in which a threat actor inserts data, such as a malicious script
app.use(xss());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

//Express middleware to protect against HTTP Parameter Pollution attacks
app.use(hpp())
// backend : 3000
// frontend : 3001

// npm install --ignore-scripts
// npm install -g npm 
// npm install --legacy-peer-deps
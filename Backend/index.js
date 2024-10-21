// //index.js
// require('dotenv').config()

// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const cookieParser = require('cookie-parser')

// const registerRouter = require('./routes/LoginRegisterDashboard/registerRouter');
// const authRoutes = require('./routes/LoginRegisterDashboard/authRoutes');
// const authDashboard = require('./routes/LoginRegisterDashboard/authDashboard');

// //buyer 
// const BuyerRouter = require('./routes/LoginRegisterDashboard/Buyer/BuyerRouter')
// //vehicle
// const VehicleRouter = require('./routes/Vehicles/VehicleRouter');

// //driver
// const DriverRouter = require('./routes/drivers/DriverRouter');


// //complain routes
// const complainRouter = require('./routes/complain/complainRoutes');

// //map routes
// const mapRouter = require('./routes/map/mapRoutes');

// const app = express()


// //middleware
// app.use(express.json());
// app.use(cors({ 
//     origin: ['http://localhost:5173'],
//     methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
//     credentials: true
// }));
// app.use(cookieParser());
// app.use(express.static('upload'))

// //Prabashwara's Apis
// app.use('/register', registerRouter);
// app.use('/', authRoutes);
// app.use('/dashboard', authDashboard);



// app.get('/logout', (req, res) => {
//     res.clearCookie('token');
//     res.json({ Status: true })//index.js
// require('dotenv').config()

// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const cookieParser = require('cookie-parser')

// const registerRouter = require('./routes/LoginRegisterDashboard/registerRouter');
// const authRoutes = require('./routes/LoginRegisterDashboard/authRoutes');
// const authDashboard = require('./routes/LoginRegisterDashboard/authDashboard');

// //buyer 
// const BuyerRouter = require('./routes/LoginRegisterDashboard/Buyer/BuyerRouter')

// const VehicleRouter = require('./routes/Vehicles/VehicleRouter');

// //complain routes
// const complainRouter = require('./routes/complain/complainRoutes');

// //Garbage routes
// const mapRouter = require('./routes/map/mapRoutes');


// const app = express()


// //middleware
// app.use(express.json());
// app.use(cors({ 
//     origin: ['http://localhost:5173'],
//     methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
//     credentials: true
// }));
// app.use(cookieParser());
// app.use(express.static('upload'))

// //Prabashwara's Apis
// app.use('/register', registerRouter);
// app.use('/', authRoutes);
// app.use('/dashboard', authDashboard);



// app.get('/logout', (req, res) => {
//     res.clearCookie('token');
//     res.json({ Status: true })
// })

// //Buyer
// app.use('/buyer' , BuyerRouter);

// //Vehicles
// app.use('/vehicles', VehicleRouter);
// //drivers
// app.use('/drivers', DriverRouter);

// //complain
// app.use('/complain', complainRouter);

// //Garbage
// app.use('/garbage', mapRouter);



// //Database connection
// mongoose.connect(process.env.MONGODB_URL)
//     .then(() => {
        
//         //Server setup
//         app.listen(process.env.PORT, () => {
//             console.log('Connected to db and listening to port ', process.env.PORT)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// })

// //Buyer
// app.use('/buyer' , BuyerRouter);

// //Vehicles
// app.use('/vehicles', VehicleRouter);

// //complain
// app.use('/complain', complainRouter);

// //Garbage
// app.use('/garbage', mapRouter);



// //Database connection
// mongoose.connect(process.env.MONGODB_URL)
//     .then(() => {
        
//         //Server setup
//         app.listen(process.env.PORT, () => {
//             console.log('Connected to db and listening to port ', process.env.PORT)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })



require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// Routes
const registerRouter = require('./routes/LoginRegisterDashboard/registerRouter');
const authRoutes = require('./routes/LoginRegisterDashboard/authRoutes');
const authDashboard = require('./routes/LoginRegisterDashboard/authDashboard');
const BuyerRouter = require('./routes/LoginRegisterDashboard/Buyer/BuyerRouter');
const VehicleRouter = require('./routes/Vehicles/VehicleRouter');
const DriverRouter = require('./routes/drivers/DriverRouter');
const complainRouter = require('./routes/complain/complainRoutes');
const mapRouter = require('./routes/map/mapRoutes');
const GarbageCollectionRouter = require('./routes/LoginRegisterDashboard/GarbageCollection/GarbageCollectionRouter');
const chatbotRouter = require('./routes/chatbot/dialogflowRoutes');

const confrimPageRouter = require('./routes/LoginRegisterDashboard/EmailAndSms/emailAndSms')
const vehicleAssignmentRotes = require('./routes/Assignment/vehicleAssignment');
const DriverAssignmentRoutes = require('./routes/Assignment/driverAssignmentRoute');
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.static('upload'));

// Routes
app.use('/', authRoutes);
app.use('/register', registerRouter);
app.use('/dashboard', authDashboard);
app.use('/buyer', BuyerRouter);
app.use('/vehicles', VehicleRouter);
app.use('/drivers', DriverRouter);
app.use('/complain', complainRouter);
app.use('/garbage', mapRouter);
app.use('/garbagecollection' , GarbageCollectionRouter);
app.use('/chatbot/dialogflow', chatbotRouter);

app.use('/users' , confrimPageRouter )
app.use('/vehicleAssignments' , vehicleAssignmentRotes);
app.use('/driverAssignments' , DriverAssignmentRoutes)

// Logout route
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ Status: true });
});


// Database connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and listening to port ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

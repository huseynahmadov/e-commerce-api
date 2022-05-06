const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

app.use(express.json())

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection successfull!")).catch(err => console.log(err))

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(5000, () => console.log("Backend server is running!"))
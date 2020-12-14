require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
/* const cookieParser = require('cookie-parser'); */
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middlewares/error-handler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3300 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// should solve this later on!
/* const whitelist = ['http://localhost:3000', `https://${DOMAIN_NAME}`, `http://${DOMAIN_NAME}`];
app.use(cors({
  origin : whitelist,
  credentials: true,
}))
app.use(cookieParser()); */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use('', router);
app.use(errorLogger);
/* app.use(errors()); */ // transfer celebrate error handling to next
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server listens to port: ${PORT}`);
});

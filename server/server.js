const path = require('path');
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const errorHandler = require('./middleware/error');
const { connectMongoDb } = require('./config/mongodb');

connectMongoDb();

const words = require('./routes/words');

const app = express();

app.use(express.json());
app.use(cors());

app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/words', words);

app.use(errorHandler);

const PORT = process.env.SERVER_PORT || 5000;

const server = http.createServer(app);
server.listen(PORT, async () => {
  console.log(`Server was started on port: ${PORT}`);
});

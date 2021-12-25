const mongoose = require('mongoose');

const connectMongoDb = async () => {
  const connect = await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@toomanywordscluster.jof3y.mongodb.net/toomanywords?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${connect.connection.host}`);
};

exports.connectMongoDb = connectMongoDb;
exports.mongodbconnection = mongoose;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://Harish:harish@cluster0.sb4ratg.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
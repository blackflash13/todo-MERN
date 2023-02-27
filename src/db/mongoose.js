const mongoose = require('mongoose');

function connectDb() {
    mongoose.connect(
        process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "todo-app",
        }
    );
    return mongoose.connection;
}

module.exports = connectDb;
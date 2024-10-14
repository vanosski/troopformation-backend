const mongoose = require("mongoose");

const connectDB = async () => {
try {
    await mongoose.connect("mongodb+srv://vanosski:mr9lq4BIrQGYUDaP@clustertroop.n02dd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTroop");
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
}
};

module.exports = connectDB;

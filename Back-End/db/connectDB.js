import mongoose from "mongoose";



// Function to connect to MongoDB
const connectDB = async () => {
	try {

		// Function to connect to MongoDB
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
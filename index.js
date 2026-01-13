import connectDB from "./db.js";

const startApp = async () => {
  await connectDB();
  console.log("Database connected. Project setup complete.");
};

startApp();
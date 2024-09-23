import dotenv from "dotenv";
dotenv.config();

export const configDB = {
  database: process.env.MONGO_URI,
  // secretKey: process.env.SECRET_KEY,
};

console.log(process.env.ALLOWED_ORIGIN);
export const configCors = {
  origin: process.env.ALLOWED_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization","Access-Control-Allow-Origin"],
  credentials: true,
  optionsSuccessStatus: 204,

};

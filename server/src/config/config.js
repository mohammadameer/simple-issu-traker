export default {
  port: process.env.PORT || 3000,
  mongoUri:
    process.env.mongoUri ||
    "mongodb+srv://mohammadameer:QsX4mW4drGeri4@tarheel-hbphi.mongodb.net/test?retryWrites=true&w=majority"
};

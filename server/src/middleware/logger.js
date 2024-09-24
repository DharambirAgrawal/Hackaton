export const logger = (req, res, next) => {
  console.log(`Request made to ${req.path}`);
  next();
};

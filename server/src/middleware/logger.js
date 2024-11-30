// Logs the request URL to the server console. 

export const logger = (req, res, next) => {
    console.log(`Request made to ${req.url}`)
    next()
}
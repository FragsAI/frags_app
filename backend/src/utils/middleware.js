
import responseTime from "response-time"
import logger from "./logger"
import chalk from "chalk"

function getStatusColor(statusCode) {
  if (statusCode >= 200 && statusCode < 300) {
    return chalk.green
  } else if (statusCode >= 300 && statusCode < 400) {
    return chalk.cyan
  } else if (statusCode >= 400 && statusCode < 500) {
    return chalk.yellow
  } else if (statusCode >= 500) {
    return chalk.red
  } else return chalk.white
}

const requestLogger = responseTime((request, response, time) => {
    const color = getStatusColor(response.statusCode)
    logger.info("Method:", request.method)
    logger.info("Path:", request.path)
    logger.info("Status code:", color(response.statusCode))
    logger.info("Response time:", chalk.green(`${time.toFixed(3)} ms`))
    logger.info("Body:", request.body)
    logger.info("----")
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" })
}

const errorHandler = () => {
    return response.status(500).send({ error: "internal server error" })
}

module.exports = {
    requestLogger,
    unknownEndpoint
}
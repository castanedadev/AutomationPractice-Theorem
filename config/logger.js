const winston = require('winston');

const tsFormat = () => new Date().toLocaleTimeString();
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
      level: 'info',
    }),
    new winston.transports.File({
      filename: 'application-info-log.log',
      level: 'info',
    }),
  ],
});

module.exports = logger;

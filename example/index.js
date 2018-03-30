const logdown = require('logdown')
const printMethodName = require('../src')

const logger = printMethodName(logdown('foo'))

logger.log('lorem')
logger.warn('lorem')

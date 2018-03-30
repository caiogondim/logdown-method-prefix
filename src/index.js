function logdownPrintMethodName(logdownInstance) {
  const loggerMethodKeys = Object
    .keys(logdownInstance)
    .filter(method => typeof logdownInstance[method] === 'function')

  const pristineLoggerMethods = loggerMethodKeys.reduce((acc, methodKey) => {
    acc[methodKey] = logdownInstance[methodKey]
    return acc
  }, {})

  loggerMethodKeys.forEach(key => {
    logdownInstance[key] = function(...args) {
      return pristineLoggerMethods[key].apply(logdownInstance, [`[${key}]`, ...args])
    }
  })

  return logdownInstance
}

module.exports = logdownPrintMethodName

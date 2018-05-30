export const debugLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const defaultDebugLevel = debugLevels.info;

/**
 * It's not a real logger but a stub arround console.log to show
 * possible logger Facade to other lib or internal
 * loggin infrastructure implementation
 */
class Logger {
  constructor(debugLevel) {
    this.debugLevel = debugLevel || defaultDebugLevel;

    /**
     * I don't like to make mutantions but this code will save
     * some time to write whole logger implementation
     */
    Object.keys(debugLevels)
      .forEach((key) => {
        if (debugLevels[key] > this.debugLevel) return;

        this[key] = (message) => {
          const errorMessage = `${key} || ${message}`;

          console.log(errorMessage);
        };
      });
  }
}

export default new Logger();

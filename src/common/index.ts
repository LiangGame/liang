import log from 'loglevel';

export const stepLogLevel = (prefixed = 'App') => {
  const originalFactory = log.methodFactory;
  log.methodFactory = function (methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName);

    const colors: Record<string, string> = {
      TRACE: '#52C41A',
      DEBUG: '#1890FF',
      INFO: '#13C2C2',
      WARN: '#FADB14',
      ERROR: '#F5222D',
    };

    const METHOD = methodName.toLocaleUpperCase();
    return (...args) => {
      rawMethod(
        `%c[${prefixed}][${METHOD}]`,
        `color: ${colors[METHOD]}`,
        new Date().toJSON()
          .replace('T', ' ')
          .replace('Z', ''),
        ...args,
      );
    };
  };
  log.setLevel(process.env.NODE_ENV === 'development' ? 'TRACE' : 'INFO');
};

export const sleep = (delay: number) => new Promise(resolve => {
  setTimeout(() => {
    resolve(delay);
  }, delay);
});

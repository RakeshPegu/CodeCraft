import * as Sentry from "@sentry/node";
console.log('this is sentry DSN', process.env.DSN)
Sentry.init({
  dsn: process.env.DSN,
  tracesSampleRate: 1.0,
});

export default Sentry;
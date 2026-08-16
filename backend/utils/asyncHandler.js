/**
 * Wraps an async Express route handler so that any rejected promise (e.g. a
 * failed database query) is forwarded to Express's error-handling middleware
 * instead of becoming an unhandled promise rejection — which, in Node 15+,
 * would otherwise crash the entire process. This matters even more on
 * serverless (Vercel), where an uncaught crash produces an ugly 502 instead
 * of the clean JSON error response callers expect.
 */
export function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

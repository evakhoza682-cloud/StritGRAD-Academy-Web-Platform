// Vercel serverless entry point.
//
// Vercel's Node.js Serverless Functions call the default export directly as
// an (req, res) handler — exactly Node's native http listener signature.
// An Express app instance already implements that same (req, res) signature,
// so it can be exported directly with no adapter package needed. (An earlier
// version of this file used `serverless-http`, which targets AWS Lambda's
// event/context model — the wrong shape for Vercel's Node runtime, and it
// would silently hang rather than serve requests. Exporting the app directly
// is the correct, documented approach for Vercel.)
import app from '../app.js'

export default app

import http from 'http';
import { routes } from './js/routes/routes.js'

const HOST = '127.0.0.1'
const PORT = 3000;

/**
 * @function handleServerRequest
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @returns {void}
 */

const handleServerRequest = (req, res) => {
  const endpoint = req.url ?? '';
  console.log({ endpoint });

  for (const route of routes) {
    if (endpoint !== route.endpoint) return;
    route.handler(req, res);
    return;
  }
};

// /**
//  * @function handleServerListen
//  * @returns {void}
//  */

const handleServerListen = () => {
  const url = `http://${HOST}:${PORT}`;
  const message = `Server running on ${url}`;
  console.log(message);
};

const server = http.createServer(handleServerRequest);
server.listen(PORT, HOST, handleServerListen);

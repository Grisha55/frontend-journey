import http from 'http';
import { routes } from './js/routes/routes.js';

const HOST = '127.0.0.1'
const PORT = 3000;

/**
 * @function setCorsHeaders
 * @param {http.ServerResponse} res 
 * @returns {void}
 */

const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1.5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

/**
 * @function preflightRequestHandler
 * @param {http.ServerResponse} res 
 * @returns {void}
 */

const preflightRequestHandler = (res) => {
  res.writeHead(204);
  res.end();
};

/**
 * @function findMatchingRoute
 * @param {string} pathname 
 * @param {string} method
 * @returns {Route | undefined}
 */

const findMatchingRoute = (pathname, method) => {
  return routes.find(route => 
    pathname === route.endpoint && method === route.method
  );
};

/**
 * @function serverRequestHandler
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @returns {void}
 */

const serverRequestHandler = (req, res) => {
  const endpoint = req.url ?? '';
  console.log({ endpoint });

  for (const route of routes) {
    if (endpoint !== route.endpoint) return;
    route.handler(req, res);
    return;
  }
};

/**
 * @function handleServerListen
 * @returns {void}
 */

const handleServerListen = () => {
  const url = `http://${HOST}:${PORT}`;
  const message = `Server running on ${url}`;
  console.log(message);
};

const server = http.createServer(serverRequestHandler);
server.listen(PORT, HOST, handleServerListen);

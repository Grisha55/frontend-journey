import http from 'http';
import { URL } from 'url';
import { data } from './js/data/data.js';

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
  const baseUrl = `http://${req.headers.host}`;
  const url = new URL(endpoint, baseUrl);

  const isGetting = (
    req.method === 'GET'
  );
  const isCurrentPath = (
    url.pathname === '/api/data'
  );
  const headers = {
    'Content-Type': 'application/json' ,
    'Access-Control-Allow-Origin': '*'
  };

  if (isGetting && isCurrentPath) {
    const resData = JSON.stringify(data);
    const statusCode = 200;
    res.writeHead(statusCode, headers).end(resData);
    return;
  }

  const resData = JSON.stringify({'message': 'Not Found'});
  const statusCode = 404;
  res.writeHead(statusCode, headers).end(resData);
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

const server = http.createServer(handleServerRequest);
server.listen(PORT, HOST, handleServerListen);

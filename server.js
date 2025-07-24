import http from 'http';
import { routes } from './js/routes/routes.js';
import fs from 'fs';
import path from 'path';
import { timeStamp } from 'console';

const HOST = '127.0.0.1'
const PORT = 3000;
const DATA_FILE = path.join(process.cwd(), 'userData.json');

// Создаем файл для данных, если его нет
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
}

/**
 * @function setCorsHeaders
 * @description Устанавливает заголовки CORS для разрешения запросов с определённого origin
 * @param {http.ServerResponse} res 
 * @returns {void}
 */

const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

/**
 * @function preflightRequestHandler
 * @description Обрабатывает OPTIONS-запросы (preflight) для CORS
 * @param {http.ServerResponse} res 
 * @returns {void}
 */

const preflightRequestHandler = (res) => {
  setCorsHeaders(res);
  res.writeHead(204);
  res.end();
};

/**
 * @function findMatchingRoute
 * @description Ищет подходящий маршрут по URL и методу запроса
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
 * @description Основной обработчик запросов (Получает URL из запроса; Ищет подходящий маршрут в массиве routes; Если находит - вызывает обработчик маршрута)
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @returns {void}
 */

const serverRequestHandler = (req, res) => {
  const endpoint = req.url ?? '';
  console.log({ endpoint, method: req.method });

  // Обработка OPTIONS запросов
  if (req.method === 'OPTIONS') {
    return preflightRequestHandler(res);
  }

  // Обработка POST запросов
  if (req.method === 'POST' && endpoint === '/save-data') {
    return handlePostRequest(req, res);
  }

  // Остальная маршрутизация
  const route = routes.find(r => 
    endpoint === r.endpoint && req.method === r.method
  );
  
  if (route) {
    return route.handler(req, res);
  }

  // Если маршрут не найден
  setCorsHeaders(res);
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Route not found' }));
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

/**
 * @function handlePostRequest
 * @description Обрабатывает POST-запросы и сохраняет данные в файл
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @returns {Promise<void>}
 */

const handlePostRequest = async (req, res) => {
  let body = '';
  
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      const userData = JSON.parse(body);
      const allData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
      
      allData.push({
        timestamp: new Date().toISOString(),
        ...userData.userData
      });

      fs.writeFileSync(DATA_FILE, JSON.stringify(allData, null, 2));
      
      setCorsHeaders(res);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (error) {
      console.error('Error:', error);
      setCorsHeaders(res);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: error.message }));
    }
  });
};

// Запуск сервера
const server = http.createServer(serverRequestHandler);
server.listen(PORT, HOST, handleServerListen);

import { data } from "../data/data.js";
import { writeFile } from "fs/promises";

/**
 * @typedef {import('./types').Route} Route;
 */

/**
 * @type {Route[]}
 */

export const routes = [
  /**
   * @method GET
   * @route /data/meta
   * @description: Getting meta data
   */

  {
    method: "GET",
    endpoint: "/data/meta",
    handler: async (req, res) => {
      console.log("meta");
      const metaData = data.meta;
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      const statusCode = 200;
      const resData = JSON.stringify({ meta: metaData });
      res.writeHead(statusCode, headers).end(resData);
    },
  },

  /**
   * @method GET
   * @route /data/download
   * @description: Getting download data
   */

  {
    method: "GET",
    endpoint: "/data/download",
    handler: async (req, res) => {
      console.log("download");
      const downloadData = data.download;
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      const statusCode = 200;
      const resData = JSON.stringify({ download: downloadData });
      res.writeHead(statusCode, headers).end(resData);
    },
  },

  /**
   * @method GET
   * @route /data/warranty
   * @description: Getting warranty data
   */

  {
    method: "GET",
    endpoint: "/data/warranty",
    handler: async (req, res) => {
      console.log("warranty");
      const warrantyData = data.warranty;
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      const statusCode = 200;
      const resData = JSON.stringify({ warranty: warrantyData });
      res.writeHead(statusCode, headers).end(resData);
    },
  },

  /**
   * @method GET
   * @route /data/care
   * @description: Getting care data
   */

  {
    method: "GET",
    endpoint: "/data/care",
    handler: async (req, res) => {
      console.log("care");
      const careData = data.care;
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      const statusCode = 200;
      const resData = JSON.stringify({ care: careData });
      res.writeHead(statusCode, headers).end(resData);
    },
  },

  /**
   * @method GET
   * @route /data/cashback
   * @description: Getting cashback data
   */

  {
    method: "GET",
    endpoint: "/data/cashback",
    handler: async (req, res) => {
      console.log("cashback");
      const cashbackData = data.cashback;
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      const statusCode = 200;
      const resData = JSON.stringify({ cashback: cashbackData });
      res.writeHead(statusCode, headers).end(resData);
    },
  },

  /**
   * @method GET
   * @route /data/clients
   * @description: Getting clients data
   */

  {
    method: "GET",
    endpoint: "/data/clients",
    handler: async (req, res) => {
      console.log("clients");
      const clientsData = data.clients;
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      const statusCode = 200;
      const resData = JSON.stringify({ clients: clientsData });
      res.writeHead(statusCode, headers).end(resData);
    },
  },

  /**
   * @method POST
   * @route /form
   * @description Getting from data
   */

  {
    method: 'POST',
    endpoint: '/form',
    handler: async (req, res) => {
      let body = '';
      console.log(body);

      req.on('data', (chunk) => {
        body += chunk.toString();
        console.log({chunk});
        console.log({body});
      });

      req.on('end', async () => {
        try {
          const data = JSON.parse(body);
          console.log('Form data:', data);

          const now = new Date();
          const year = now.getFullYear();
          const month = (now.getMonth() + 1).toString().padStart(2, '0');
          const day = now.getDate().toString().padStart(2, '0');
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const seconds = now.getSeconds().toString().padStart(2, '0');

          const timestamp = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;
          const filename = `./db/orders/form-${timestamp}.json`;

          writeFile (
            filename,
            JSON.stringify(data, null, 2)
          )
            .catch((error) => {
            console.error(error);
          });
        } catch (e) {
          console.error(e);
        }
      });
    },
  },
];

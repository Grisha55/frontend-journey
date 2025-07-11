import { data } from "../data/data.js";

/**
 * @typedef {import('./types').Route} Route
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
];

import { createProxyMiddleware } from "http-proxy-middleware";
import Cookies from 'cookies';

const apiProxy = createProxyMiddleware({
  target: "http://localhost:8000",
  changeOrigin: true,
  pathRewrite: { [`^/api`]: "" },
  secure: false,
  onProxyReq: async (proxyReq, req) => {
    const cookies = new Cookies(req); 
    const accessToken = cookies.get("authorization");

    console.log("token1", accessToken);
    
    if (accessToken) {
      proxyReq.setHeader("Authorization", `Bearer ${accessToken}`);
    }
  },
});

const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });

const handle = async (req, res) => runMiddleware(req, res, apiProxy);

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export default handle;

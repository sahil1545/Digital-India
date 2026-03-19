import { createServer } from "../server/index";

const app = createServer();

export default function handler(req: any, res: any) {
  app(req, res);
}

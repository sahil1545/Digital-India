import { createServer } from "../server/index";

export default function handler(req: any, res: any) {
  const app = createServer();
  app(req, res);
}

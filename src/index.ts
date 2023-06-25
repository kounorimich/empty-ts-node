import { hoge } from "@/hoge";
console.log(hoge);
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(hoge + "hogehog");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

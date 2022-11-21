import Express from "express";

const app = Express();
const port = "8080";

app.listen(port || process.env.PORT, () => {
  console.info("Server Started at", port);
});

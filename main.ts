import fastify from "fastify";

const app = fastify();

app.get("/", (req, res) => {
  res.send("Hello web! Version 0.1! Hi!");
});

app.listen(
  process.env.PORT ?? 8080,
  process.env.HOST ?? "localhost",
  function (err, address) {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }

    console.log(`Server is now listening on ${address}!`);
  }
);

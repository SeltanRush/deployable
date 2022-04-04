import fastify from "fastify";

const app = fastify({ logger: true });

app.get("/", (req, res) => {
  res.send("Hello web!");
});

app.listen(3000, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Server is now listening on ${address}`);
});

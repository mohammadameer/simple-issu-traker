import { Server, Model } from "miragejs";

const mockServer = () => {
  const server = new Server({
    routes() {
      this.namespace = "api";

      this.get("/tickets", schema => schema.tickets.all());

      this.post("/tickets", (schema, request) => {
        const attr = JSON.parse(request.requestBody);
        return schema.tickets.create(attr);
      });
    },
    models: {
      ticket: Model
    }
  });

  return server;
};

export default mockServer;

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
    },
    seeds(server) {
      server.create("ticket", {
        title: "help",
        body: "i want help",
        tags: ["frontend_bug", "backend_bug"],
        user: ["mohammad ameer", "ahmad fahad"],
        priority: "low",
        created: new Date()
      });
      server.create("ticket", {
        title: "bug",
        body: "there is bug",
        tags: ["frontend_bug", "backend_bug"],
        user: ["mohammad ameer", "ahmad fahad"],
        priority: "urgent",
        created: new Date()
      });
      server.create("ticket", {
        title: "server",
        body: "server is down",
        tags: ["backend_bug"],
        user: ["ahmad fahad"],
        priority: "urgent",
        created: new Date()
      });
      server.create("ticket", {
        title: "button is not working",
        body: "button in main page is not working",
        tags: ["frontend_bug"],
        user: ["mohammad ameer"],
        priority: "normal",
        created: new Date()
      });
      server.create("ticket", {
        title: "error in settings page",
        body: "when enter settings page there is an error",
        tags: ["frontend_bug"],
        user: ["mohammad ameer"],
        priority: "urgent",
        created: new Date()
      });
    }
  });

  return server;
};

export default mockServer;

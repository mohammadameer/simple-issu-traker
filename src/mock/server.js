import { Server, Model } from "miragejs";

const mockServer = () => {
  const server = new Server({
    routes() {
      this.namespace = "api";
      this.get("/issues", schema => schema.issues.all());

      this.post("/issues", (schema, request) => {
        const attr = JSON.parse(request.requestBody);
        return schema.issues.create(attr);
      });

      this.del("/issues", (schema, request) => {
        const attr = JSON.parse(request.requestBody);
        for (let i in attr.issues) {
          schema.issues.remove(i);
        }
        return schema.issues.all();
      });
    },
    models: {
      issue: Model
    },
    seeds(server) {
      server.create("issue", {
        title: "help",
        body: "i want help",
        tags: ["frontend_bug", "backend_bug"],
        user: ["mohammad ameer", "ahmad fahad"],
        priority: "low",
        created: new Date()
      });
      server.create("issue", {
        title: "bug",
        body: "there is bug",
        tags: ["frontend_bug", "backend_bug"],
        user: ["mohammad ameer", "ahmad fahad"],
        priority: "urgent",
        created: new Date()
      });
      server.create("issue", {
        title: "server",
        body: "server is down",
        tags: ["backend_bug"],
        user: ["ahmad fahad"],
        priority: "urgent",
        created: new Date()
      });
      server.create("issue", {
        title: "button is not working",
        body: "button in main page is not working",
        tags: ["frontend_bug"],
        user: ["mohammad ameer"],
        priority: "normal",
        created: new Date()
      });
      server.create("issue", {
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

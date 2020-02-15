import { Server, Model } from "miragejs";

const mockServer = () => {
  const server = new Server({
    routes() {
      this.namespace = "api";
      this.get("/issues", schema => schema.issues.all());

      this.get("/issues/:id");

      this.put("/issues/:id", (schema, request) => {
        const { id } = request.params;
        const attr = JSON.parse(request.requestBody);
        const oldAttr = schema.issues.find(id);
        if (attr.newUpdate) {
          attr.updates = [
            { update: attr.newUpdate, date: new Date() },
            ...oldAttr.updates
          ];
        }
        attr.newUpdate = "";
        const newIssue = schema.issues.find(+id).update(attr);
        return newIssue;
      });

      this.post("/issues", (schema, request) => {
        const attr = JSON.parse(request.requestBody);
        return schema.issues.create(attr);
      });

      this.del("/issues/:id", (schema, request) => {
        let id = request.params.id;

        schema.issues.find(id).destroy();
        return id;
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
        users: ["mohammad ameer", "ahmad fahad"],
        priority: "low",
        created: new Date(),
        status: "done",
        updates: []
      });
      server.create("issue", {
        title: "bug",
        body: "there is bug",
        tags: ["frontend_bug", "backend_bug"],
        users: ["mohammad ameer", "ahmad fahad"],
        priority: "urgent",
        created: new Date(),
        status: "todo",
        updates: []
      });
      server.create("issue", {
        title: "server",
        body: "server is down",
        tags: ["backend_bug"],
        users: ["ahmad fahad"],
        priority: "urgent",
        created: new Date(),
        status: "done",
        updates: []
      });
      server.create("issue", {
        title: "button is not working",
        body: "button in main page is not working",
        tags: ["frontend_bug"],
        users: ["mohammad ameer"],
        priority: "normal",
        created: new Date(),
        status: "todo",
        updates: []
      });
      server.create("issue", {
        title: "error in settings page",
        body: "when enter settings page there is an error",
        tags: ["frontend_bug"],
        users: ["mohammad ameer"],
        priority: "urgent",
        created: new Date(),
        status: "in_progress",
        updates: []
      });
    }
  });

  return server;
};

export default mockServer;

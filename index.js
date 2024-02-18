import { app } from "./app.js";
import { connectToDatabase } from "./config/db.js";

connectToDatabase();

app.listen(5000, () => {
  console.log("server running at port 5000");
});

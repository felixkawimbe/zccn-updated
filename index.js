import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));



// Middleware to serve static files (like images, CSS, JS)
app.use(express.static(__dirname + "/public"));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//app.get("/services", (req, res) => {
 //   res.sendFile(__dirname + "/public/services.html");
 // });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

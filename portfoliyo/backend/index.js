import app from "./app.js";
import dotenv from "dotenv";
import Connection from "./config/database.js";

dotenv.config({ path: "../config/config.env" });
const port = process.env.PORT || 4000;

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`Server is running on port ${port}`);
        Connection();
    }
});

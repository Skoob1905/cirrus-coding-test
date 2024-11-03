import express from "express";
import cors from "cors";
import meterRoutes from "./routes/meter";
import path from "path";

// Declare a new express app
export const app = express();

// Allow for cors
app.use(cors());

// Use the meter routes
app.use("/meter", meterRoutes);

// apiDoc
app.use(express.static(path.join(__dirname, "docs")));
app.get("/docs", async (req, res) => {
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Server is running on http://localhost:${APP_PORT}`);
});

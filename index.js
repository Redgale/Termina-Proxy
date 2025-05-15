// index.js
import { ChemicalServer } from "chemicaljs";
import express from "express";

// ChemicalServer() returns [expressApp, listenFn]
const [app, listen] = ChemicalServer();
const port = process.env.PORT || 3000;

// Serve your public folder (index.html by default)
app.use(
  express.static("public", {
    index: "index.html",
    extensions: ["html"],
  })
);

// Attach Chemical’s own routes/middleware
app.serveChemical();

// Start listening
listen(port, () => {
  console.log(`🎉 Fancy example listening on http://localhost:${port}`);
});

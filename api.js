const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let dataDummy = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
];

app.get("/api/items", (req, res) => {
  res.json(dataDummy);
});


app.post("/api/items", (req, res) => {
  const newItem = { id: dataDummy.length + 1, ...req.body };
  dataDummy.push(newItem);
  res.status(201).json(newItem);
});


app.put("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const index = dataDummy.findIndex((item) => item.id == id);
  if (index !== -1) {
    dataDummy[index] = { id: Number(id), ...req.body };
    res.json(dataDummy[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.delete("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const index = dataDummy.findIndex((item) => item.id == id);
  if (index !== -1) {
    const deletedItem = dataDummy.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

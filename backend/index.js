const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const reports = [
  { id: 1, name: "Sales For Q1", category: "Finance", createdAt: "2024-01-10" },
  { id: 2, name: "Market Analysis", category: "Marketing", createdAt: "2024-02-15" },
  { id: 3, name: "Employee Review", category: "HR", createdAt: "2024-03-05" },
  { id: 4, name: "Company Revenue", category: "Finance", createdAt: "2024-04-20" },
  { id: 5, name: "Customer Survey", category: "Research", createdAt: "2024-05-12" },
  { id: 6, name: "Budget Forecast", category: "Finance", createdAt: "2024-06-01" },
  { id: 7, name: "Recruitment Stats", category: "HR", createdAt: "2024-04-01" },
  { id: 8, name: "Campaign Results", category: "Marketing", createdAt: "2024-06-10" },
  { id: 9, name: "Tech Support", category: "IT", createdAt: "2024-03-25" },
  { id: 10, name: "Annual Report", category: "General", createdAt: "2024-01-01" }
];

app.get('/api/reports', (req, res) => {
  const { category } = req.query;
  if (category) {
    return res.json(reports.filter(r => r.category === category));
  }
  res.json(reports);
});

app.get('/api/error', (req, res) => {
  res.status(500).json({ message: "Simulated error" });
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
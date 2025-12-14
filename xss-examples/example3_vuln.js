app.get('/search', (req, res) => {
  const q = req.query.q || '';
  res.render("Results for", {q: q});
});

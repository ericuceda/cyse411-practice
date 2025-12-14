app.get('/search', (req, res) => {
  const q = req.query.q || '';
  res.render(`<h1>Results for ${q}</h1>`);
});

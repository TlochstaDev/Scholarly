const express = require('express');
const path = require('path')
const fs = require('fs');
const marked = require('marked');
const ejs = require('ejs');

const app = express();
const port = 3000;

const articles = require("./data/articles.json")

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { articles });
});

app.get('/search', (req, res) => {
  const searchTerm = req.query.q.toLowerCase();
  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm) || article.author.toLowerCase().includes(searchTerm));
  res.render('index', { articles: filteredArticles });
});

app.get('/articles/:id', async (req, res) => {
  const articleId = req.params.id;
  try {
    const mdContent = await fs.promises.readFile(path.join(__dirname, `articles/${articleId}.md`), 'utf-8');
    const { title, author } = articles.find(article => article.id === articleId);
    const htmlContent = marked(mdContent);
    res.render('article', { title, author, content: htmlContent });
  } catch (error) {
    res.status(404).send('Article not found');
  }
});


app.listen(port, () => {
  console.log(`tlochsta edu! is running on port ${port}`);
});

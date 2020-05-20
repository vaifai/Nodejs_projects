const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const articleRouter = require('./routes/articles.js');
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: false
}));



app.get('/', (req, res) => {
    const articles = [{
            title: 'Test Article',
            date: new Date(),
            description: 'Test Description'
        },
        {
            title: 'Test Article 2',
            date: new Date()
        }
    ]
    res.render('articles/index', {
        articles: articles
    });
})

app.use('/articles', articleRouter);
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
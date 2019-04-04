const express = require ('express')
var exphbs = required ('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs ({defaultLayout: 'main'}) );
app.set('view engine','handlebars');

app.get('/',(req, res) => {
    res.render('index');

});
app.listen (PORT,() =>{
    console.log(`listening on port ${PORT}`);
})
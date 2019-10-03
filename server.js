const express = require('express')
const request = require('request');
const app = express()
const port = process.env.PORT

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load;
}

api_key = process.env.API_KEY

app.use(express.static('public'));
app.use(express.json({type: ['application/json', 'text/plain']}))
app.use('/js/', express.static(__dirname + '/public/js'))


app.post('/gif', (req, res) => {
    res.statusCode  =  200;
    request(`http://api.giphy.com/v1/gifs/search?q=${req.body.title}&api_key=${api_key}&limit=1`, function (error, response, body) {
        url = JSON.parse(body);
    return res.json(url)
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`))
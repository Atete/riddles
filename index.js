import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const url ='https://riddles-api.vercel.app/random';


app.use(express.static("public"))

app.get('/', async (req, res) => {
    try {
    const result = await axios.get(url);
    res.render('index.ejs', {
        riddle: result.data.riddle,
        answer: result.data.answer
    })
} catch (err) {
    res.render('index.ejs', err);
}
})



app.listen(3000, () => {
    console.log(`listening on ${port}`);
})
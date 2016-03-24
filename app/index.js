
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use((req, res) => (
  res.send({
    res: 'okaydo',
  })
));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

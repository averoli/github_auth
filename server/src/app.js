const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GitHub social login implementation');
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});
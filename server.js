const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.redirect('https://preppal.cyclic.app/room-cooking-pot'); 
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');  
});
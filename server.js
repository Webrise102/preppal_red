const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ua = req.get('user-agent');
  const isInstagram = ua.indexOf('Instagram') > -1;
  
  if (isInstagram) {
    if (/iPad|iPhone|iPod/.test(ua)) {
      res.redirect(302, 'googlechrome://preppal.cyclic.app/room-cooking-pot');
      return;
    }
    res.redirect(302, 'intent:https://preppal.cyclic.app/room-cooking-pot#Intent;end');
    return;
  }

  // Handle other cases or provide a default redirect if not using Instagram.
  res.redirect(302, 'https://preppal.cyclic.app/room-cooking-pot');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');  
});
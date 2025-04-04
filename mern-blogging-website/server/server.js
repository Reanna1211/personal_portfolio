const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
// Serve static files from React's build directory in production
if (process.env.NODE_ENV === 'production') {
    // __dirname will point to the directory of this file (server.js)
  // Join it with 'client/build' to serve static files
  app.use(express.static(path.join(__dirname, '../blogging-website-frontend', 'build')));
  // For all other routes, send back the index.html file for React Router to handle
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../blogging-website-frontend', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const http = require('http'); 

const server = http.createServer(  (req,res) => {
  
  const url = req.url; 
  const method = req.method; 

  if(url === '/'){
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>'); 
    res.write('<head><title>Assignment one</title></head>'); 
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'); 
    res.write('</html>'); 
    return res.end(); 

  }

  if(url === '/users'){
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>'); 
    res.write('<head><title>Assignment one</title></head>'); 
    res.write('<body><ul><li>user 1</li><li>user 2</li></ul></body>'); 
    res.write('</html>'); 
    return res.end(); 

  }

  if(url === '/create-user' && method == "POST"){
      const body =  []; 
      req.on('data', (chunk) => {
          body.push(chunk); 
      }); 
      req.on('end', () => {
        const parseBody = Buffer.concat(body).toString(); 
        console.log(parseBody.split('=')[1]); 
      })
      res.statusCode = 302; 
      res.setHeader('Location', '/'); 
      res.end(); 

  }
  // send a html response


} ); 


server.listen(3000)
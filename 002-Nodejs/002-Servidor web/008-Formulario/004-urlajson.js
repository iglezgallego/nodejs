var servidor = require('http');
var ruta = require('url');
//cargo la librería nueva
var procesador = require('querystring')

servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'})

   switch(req.url){
        case "/":
            res.write(`
                <form action="/procesa" method="POST" enctype="application/x-www-form-urlencoded">
                    <input type="text" name="nombre"><br>
                    <input type="text" name="asunto"><br>
                    <input type="email" name="email"><br>
                    <textarea name="mensaje"></textarea><br>
                    <input type="submit">
                </form>
            `)
            break;
        case "/procesa":
           let datos = '';
           req.on('data',parte=>{
               datos += parte.toString();
           })
           //Para pasar los datos con formato json
           req.on('end',()=>{
               var cadena = datos
               var procesado = procesador.parse(cadena)
               console.log(procesado)
           })
            break;
       
    } 
    res.end("")
    
}).listen(8080)
var http=require("http");
var url=require("url");

var server =http.createServer(function(request,response){

    var baseURL=new URL("http://localhost:8081/"+request.url);  
        console.log(request.method+" "+baseURL);
        console.log("Accno :"+ baseURL.searchParams.get("accno"));

        baseURL.searchParams.forEach((v,n)=>{
            console.log(n+"<====>"+v);
        })

        response.end("HEllo World!!!!");
    });

server.listen(8081,function(){
    console.log("Servler listening on port 8081");
});
//rest countries

let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload=function(){
    if (request.status==200){
       let a=JSON.parse(request.responseText)
        a.map((b)=>{
            console.log(`NAME:  ${ b.name.official}`)
            console.log("REGION: " + b.region)
            console.log("SUBREGION: " + b.subregion)
            console.log("POPULATION: " + b.population)
        });
    }
    else{
        request.onerror=function(){
            console.log(error)
        }
    }
}

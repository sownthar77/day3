function offName(){
    const re = JSON.parse(this.responseText);
    re.forEach((su) => {
        console.log(su.name)
        console.log(su.region)
        console.log(su.subregion)
        console.log(su.population)
        
    });
}

let req = new XMLHttpRequest(); 
    req.addEventListener("load", offName);
    req.open("GET","https://restcountries.com/v3.1/all");
    req.send();
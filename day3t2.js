function printData(){
    const ct = JSON.parse(this.responseText);
    ct.forEach((fl)=>{
    console.log(fl.flags);
    })
    }
    
    let request = new XMLHttpRequest(); 
    request.addEventListener("load", printData);
    request.open("GET","https://restcountries.com/v3.1/all");
    request.send();
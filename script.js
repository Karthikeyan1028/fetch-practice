var res= fetch("https://restcountries.com/v3.1/all")
res.then((data)=> {
    return data.json();
}).then((data1)=> foo(data1))
.catch((error)=> console.log(error))

var container=document.createElement("div");
container.className="container";

var row= document.createElement("div");
row.className="row row-cols-lg-4  ";

function foo(data1) {
    for(var i=0;i<data1.length;i++) {
        var col= document.createElement("div");
        col.className= "col-lg-4"
        col.innerHTML=` <div class="card h-100 mb-3" style="max-width:18rem;  ">
                                      
                                          <div class="card-header">${data1[i].name.common}</div>
                                          <img src="${data1[i].flags?.png}" class="card-img-top">
                                          <div class="card-body">
                                            <div class="card-text">Capital: ${data1[i].capital}</div>
                                            <div class="card-text">Region: ${data1[i].region}</div>
                                            <div class="card-text">Country Code: ${data1[i].cca3}</div>
                                            <div class="card-text">Latitude: ${data1[i].latlng[0]}</div>
                                            <div class="card-text">Longitude: ${data1[i].latlng[1]}</div>  
                                          </div>
                                      </div>
                                      <br>`
                                  
                                  row.append(col);
                                  container.append(row);
                                  document.body.append(container);
                                           
    }   
    
}

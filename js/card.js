import { getData } from "./function";

document.addEventListener('DOMContentLoaded', function(){
    let url = window.location.href;
    let res = url.split('id=' )[1];
    console.log(res) ;


    if (res) {
        window.location.assign(`http://127.0.0.1:5500/product.html`)
        return;
    }else{
        getData(`https://strapi-store-server.onrender.com/api/products/${id}`)
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    })
    }
    
})
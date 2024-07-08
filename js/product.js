import { getData, createcard } from "../js/function.js";

const wrapper = document.getElementById('wrapper');

const loader = document.querySelector('.loader')
document.addEventListener('DOMContentLoaded', function(){
    getData('https://strapi-store-server.onrender.com/api/products')
    
    .then(data =>{
        data.data.length > 0 && data.data.forEach(product => {
            loader.style.display = 'none'
            let card = createcard(product);
            wrapper.innerHTML += card
            
        });

        let cards = document.querySelectorAll('.card');
        cards.length > 0 && cards.forEach(function(cards){
        cards.addEventListener('click', function(event){
            const cardid = this.getAttribute('data-id')
               
          if (cardid) {
            window.location.assign(`http://127.0.0.1:5500/card.html?id=${cardid}`)
          }
        })
    })

    })
    .catch(error =>{
        console.log(error);
    })
})

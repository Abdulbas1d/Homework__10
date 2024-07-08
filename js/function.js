
async function getData(url){
    try {
        let response = await fetch(url);
        let res = await response.json();
        return res
    } catch (error) {
        return error;
    }
}
 
function createcard(product){
    return `
    <div class="card" data-id = ${product.Id}>
                <img src="${product.attributes.image}" alt="">
                <h2>${product.attributes.title}</h2>
                <p>$${product.attributes.price}</p>
            </div>
    `
}


export{getData, createcard};
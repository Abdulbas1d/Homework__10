async function getdata(url){
    try {
        let response = await fetch(url);
        let res = await response.json()
        return res
    } catch (error) {
        return error
    }
}



getdata('https://jsonplaceholder.typicode.com/todos/')
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(1, error);
    })
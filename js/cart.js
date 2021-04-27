let total_price = 0.0;

function add_to_cart(button){
    let str_id = button.className.substring(6, button.className.length);
    let quant = document.getElementById("quant"+str_id); 
    let old_quant = quant.innerHTML;
    let new_quant = Number(old_quant) + 1;
    quant.innerHTML = new_quant;
    fetch("https://entregavel.polijrinternal.com/produtos/"+str_id)
        .then(response => {
            return response.json();
        })
        .then(responseData =>{
            let price = document.getElementById("total_price");
            total_price += Number(responseData.preco);
            let str_price = Number(total_price).toLocaleString('pt-br', {minimumFractionDigits: 2});
            price.innerHTML = str_price;
        });
}
function remove_from_cart(button){
    let str_id = button.className.substring(6, button.className.length);
    let quant = document.getElementById("quant"+str_id); 
    let old_quant = quant.innerHTML;
    if(Number(old_quant) != 0){
        let new_quant = Number(old_quant) - 1;
        quant.innerHTML = new_quant;
        fetch("https://entregavel.polijrinternal.com/produtos/"+str_id)
        .then(response => {
            return response.json();
        })
        .then(responseData =>{
            let price = document.getElementById("total_price");
            total_price -= Number(responseData.preco);
            let str_price = Number(total_price).toLocaleString('pt-br', {minimumFractionDigits: 2});
            price.innerHTML = str_price;
        });

    }
}
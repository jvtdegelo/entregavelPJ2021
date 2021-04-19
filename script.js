function create_text(data){
    var div_text = document.createElement("div");
    div_text.className = "text";

    var p_name = document.createElement("p");
    var text_name = document.createTextNode(data.nome);
    p_name.appendChild(text_name);
    p_name.className = "name";

    var p_descr = document.createElement("p");
    var text_descr = document.createTextNode(data.descricao);
    p_descr.appendChild(text_descr);
    p_descr.className = "description";

    div_text.appendChild(p_name);
    div_text.appendChild(p_descr);

    return div_text;
}

function create_intensity(data){
    var div_intensity = document.createElement("div");
    div_intensity.className = "intensity";

    var p_int = document.createElement("p");
    var text_int = document.createTextNode("Intensidade " + data.intensidade);
    p_int.appendChild(text_int);
    p_int.className = "text_intensity";
    
    var int_image = document.createElement("img");
    int_image.className = "intensity_image";
    int_image.src = "img/intensidade" + data.intensidade + ".png";
    int_image.alt = "Intensidade: " + data.intensidade;

    div_intensity.appendChild(p_int);
    div_intensity.appendChild(int_image);

    return div_intensity;
}

function create_price(data){
    var div_price = document.createElement("div");
    div_price.className = "price";

    var p_price = document.createElement("p");
    var text_price = document.createTextNode("R$ " + data.preco);
    p_price.appendChild(text_price);
    p_price.className = "text_price";

    div_price.appendChild(p_price);

    return div_price;
}

function create_upper(data){
    var div_upper = document.createElement("div");
    div_upper.className = "upper";

    var coffee_image = document.createElement("img");
    coffee_image.className = "coffee_image";
    coffee_image.src = data.foto;
    coffee_image.alt = data.nome;

    var div_text = create_text(data);

    div_upper.appendChild(coffee_image);
    div_upper.appendChild(div_text);

    return div_upper;
}

function create_lower(data){
    var div_lower = document.createElement("div");
    div_lower.className = "lower";

    var div_intensity = create_intensity(data);
    var div_price = create_price(data);
    
    div_lower.appendChild(div_intensity);
    div_lower.appendChild(div_price);

    return div_lower;
}
function create_product(data){
    var div_product = document.createElement("div");
    div_product.className = "product";
    
    var upper_child = create_upper(data);
    var lower_child = create_lower(data);

    div_product.appendChild(upper_child);
    div_product.appendChild(lower_child);

    return div_product;
}

function create_two_product(data1, data2){
    var div_two_product = document.createElement("div");
    div_two_product.className = "two_product";

    var child_left = create_product(data1);
    var child_right = create_product(data2);
    
    div_two_product.appendChild(child_left);
    div_two_product.appendChild(child_right);

    return div_two_product;
}

function create_one_product(data){
    var div_one_product = document.createElement("div");
    div_one_product.className = "one_product";

    var child = create_product(data);
    
    div_two_product.appendChild(child);

    return div_one_product;
}


const getData = (url) => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(responseData =>{
            for(var i=0; i<responseData.length; i++){
                responseData[i].preco = Number(responseData[i].preco).toLocaleString('pt-br', {minimumFractionDigits: 2});
            }

            var products = document.getElementById("products");
            for(i=0; i< responseData.length; i+=2){
                var new_child;
                if (i != responseData.length-1) new_child = create_two_product(responseData[i], responseData[i+1]);
                else new_child = create_one_product(responseData[i]);

                products.appendChild(new_child);
            }
        });
};
getData("https://entregavel.polijrinternal.com/produtos/");

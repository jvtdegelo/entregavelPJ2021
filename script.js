var response_data = [];

const getData = (url) => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(responseData =>{
            var products = document.getElementById("products");
            console.log(products);
            for(i=0; i< responseData.length; i++){
                var n_div = document.createElement("div");
                n_div.className = "product";

                var n_text = document.createElement("div");
                n_text.className = "text";

                var n_atr = document.createElement("div");
                n_atr.className = "attribute";

                var n_name = document.createElement("h3");
                var n_text_name = document.createTextNode(responseData[i].nome);
                n_name.appendChild(n_text_name);
                
                var n_descr = document.createElement("p");
                var n_text_descr = document.createTextNode(responseData[i].descricao);
                n_descr.appendChild(n_text_descr);
                n_descr.className = "description";

                var n_img_int = document.createElement("img");
                n_img_int.className = "cap_image";
                n_img_int.src = "img/intensidade" + responseData[i].intensidade + ".png";
                n_img_int.alt = "intensidade" + responseData[i].intensidade;

                var n_int = document.createElement("p");
                var n_text_int = document.createTextNode("Intensidade " + responseData[i].intensidade);
                
                n_int.appendChild(n_text_int);
                n_int.appendChild(n_img_int);
                n_int.className = "intensity";

                var n_preco = document.createElement("p");
                var n_text_preco = document.createTextNode("R$: " + responseData[i].preco);
                n_preco.appendChild(n_text_preco);
                n_preco.className = "price";
                
                var n_img = document.createElement("img");
                n_img.className = "cap_image";
                n_img.src = responseData[i].foto;
                n_img.alt = responseData[i].nome;

                n_text.appendChild(n_name);
                n_text.appendChild(n_descr);
                n_text.appendChild(n_atr);

                n_atr.appendChild(n_int);
                n_atr.appendChild(n_preco);


                n_div.appendChild(n_img);
                n_div.appendChild(n_text);
                
                n_div.id = responseData[i].id;
                products.appendChild(n_div);
            }
            
        });
};
getData("https://entregavel.polijrinternal.com/produtos/");

/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

const formatPrice = (price) => { 
 const newPrice = new window.Intl.NumberFormat('en-EN', { 
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
};


// web api
// Concectarnos al server 
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())
// JSON -> Data -> Renderizar info browser
.then((responseJson) => { 
    const todosLosItems = [];
   responseJson.data.forEach((item) => {
       // crear imagen
       const imagen = document.createElement('img');
       imagen.className = "image-position";

       //URL de la imagen
       imagen.src = `${baseUrl}${item.image}`;
     
       // crear titulo
       const title = document.createElement('h2');
       title.textContent = item.name;
       title.className = "muy-grande";

       // crear parrafo 
       const parrafo = document.createElement('p');
       parrafo.textContent = item.attributes;
       parrafo.className = "descripcion";
       
       // crear precio
       const price = document.createElement('div');
       price.textContent = formatPrice(item.price);
       price.className = "price-position";
      
       const container = document.createElement('div')
       container.append(imagen, title, price, parrafo);
       container.className = "justify-position";

      todosLosItems.push(container);
       
   });

   appNode.append(...todosLosItems);
});



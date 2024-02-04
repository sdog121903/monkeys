let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

const addDataToHTML = () => {

    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){

        listProducts.forEach(product =>{

            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <div class="caja1">
                <div class="image">
                    <img src="" height="100" width="100" class="original-image">
                    <img src="idflip1.png" height="100" width="100" class="hover-image">
                </div>
            </div>
            <div class="caja2">
                <a href="" class="ogtext"><h4>Bergen Car Coat</h4></a>
                <a href="" class="ogtext"><h6>Kilroy</h6></a>
                <a href="" class="ogtext"><h5>$565.00</h5></a>
                <div class="flexsize">
                    <a data-modal-target="#modal" class="newtext" data-item="Bergen Car Coat (Small)" data-price="565"><h4>S</h4></a>
                    <a data-modal-target="#modal" class="newtext" data-modal-target="#modal" data-item="Bergen Car Coat (Medium)" data-price="565"><h4>M</h4></a>
                    <a data-modal-target="#modal" class="newtext" data-modal-target="#modal" data-item="Bergen Car Coat (Large)" data-price="565"><h4>L</h4></a>
                </div>
            </div>
            `;
            listProductHTML.appendChild(newProduct);

        })

    }

}

const initApp = () => {

    fetch('products.json')
    .then(response => response.json())
    .then(data => {

        listProducts = data;
        addDataToHTML();

    })

}
initApp();
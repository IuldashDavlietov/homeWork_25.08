
let url = 'https://dummyjson.com/products'

let divRoot = document.querySelector('#root')

fetch(url)
    .then(res => res.json())
    .then(data =>render(data.products))

function render(array) {
    for (elem of array) {

        let divElem = document.createElement('div')
        divElem.className = 'divElement'
        let imgElem = document.createElement('img')
        let title = document.createElement('h1')
        let price = document.createElement('h2')
        let ratingElem = document.createElement('p')

        imgElem.src = elem.thumbnail
        imgElem.width = 500
        imgElem.height = 500

        ratingElem.innerHTML = rating(elem.rating)
        title.innerText = 'Tiltle: ' + elem.title
        price.innerText = 'Price: ' + elem.price + ' $'

        divElem.append(imgElem,title, price, ratingElem)
        divRoot.append(divElem)

    }
}


function rating(n) {
    let n = Math.round(n);
    let star = '';

    for (let i = 0; i < 5; i++) {
        if (i < n) {
            star += '<span class= "fa fa-star active"></span>';
        } else {
            star += '<span class= "fa fa-star" ></span>'
        }
    }
    return star;
}
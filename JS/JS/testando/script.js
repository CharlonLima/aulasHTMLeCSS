window.onload = function(){
    const ListaFrutas = [
        {
            'fruta':'Mamão',
            'Preço': 3.9,
            'imagem':'1'
        },
        {
            'fruta':'Laranja',
            'Preço': 0.7,
            'imagem':'2'
        },
        {
            'fruta':'Manga',
            'Preço': 2.3,
            'imagem':'3'
        },
        {
            'fruta':'Melão',
            'Preço': 2.8,
            'imagem':'4'
        },
        {
            'fruta':'Melancia',
            'Preço': 4.1,
            'imagem':'5'
        },
        {
            'fruta':'Maçã',
            'Preço': 2.4,
            'imagem':'6'
        },
        {
            'fruta':'Banana',
            'Preço': 1.7,
            'imagem':'7'
        },
    ]

    const frutas = document.getElementById('produtos');
    const frutasCarrinho = document.getElementById('cestaDoCliente');

    ListaFrutas.map((n) => {
        frutas.insertAdjacentHTML('afterbegin', <li class="listaDeFrutas"><img src="assets/img/${n.imagem}.jpg" alt=""></img></li>);
    })

    ListaFrutas.map((n)=>{

        frutasCarrinho.insertAdjacentHTML('afterbegin', <li class="listaDeFrutas hide"><img src="assets/img/${n.imagem}.jpg" alt="">${n.fruta}</img></li>);
    })


    const lista = []
    let frutasQuery = document.querySelectorAll('.listaDeFrutas, .hide');

    let hideClass = document.querySelectorAll('.hide');

    frutasQuery.forEach((el)=>{
        el.addEventListener('click', ()=>{
            console.log(el)
        })
    })







}    


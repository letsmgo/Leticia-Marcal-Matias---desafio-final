const image0 = document.querySelector('img');
const nomeDePersonagem0 = document.querySelector('.personagem0');

const image1 = document.querySelector('.imagem1');
const nomeDePersonagem1 = document.querySelector('.personagem1');

const image2 = document.querySelector('.imagem2');
const nomeDePersonagem2 = document.querySelector('.personagem2');

const image3 = document.querySelector('.imagem3');
const nomeDePersonagem3 = document.querySelector('.personagem3');

const numeroMaximoDePersonagens = 671;

gerarValorAleatorio = () => {
    return Math.floor(Math.random()*numeroMaximoDePersonagens);
}


pegarPersonagem0 = () => {
    const id0 = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${id0}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image0.src = data.image;
        nomeDePersonagem0.innerHTML = data.name;
    });
}

 pegarPersonagem1 = () => {
    const id1 = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${id1}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        nomeDePersonagem1.innerHTML = data.name;
    });
}

pegarPersonagem2 = () => {
    const id2 = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${id2}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        nomeDePersonagem2.innerHTML = data.name;
    });
}

pegarPersonagem3 = () => {
    const id3 = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${id3}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        nomeDePersonagem3.innerHTML = data.name;
    });
}

pegarPersonagem0();
pegarPersonagem1();
pegarPersonagem2();
pegarPersonagem3();

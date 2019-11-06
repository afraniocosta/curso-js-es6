import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
        } catch (err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('diego3d');


// promise comum. Uma forma de fazer com que uma coisa demore para executar. É um delay, um asincronismo.
 
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// minhaPromise().then(response=>{
//     console.log(response)
// })
// .catch(err => {

// });

// abaixo segue a sintaxe do asyc await

// async function executaPromise(){
//     const response = await minhaPromise();
//     console.log(response);
// }

// executaPromise();
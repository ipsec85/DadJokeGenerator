const jokes = document.querySelector('#jokes');
const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    getDadJoke();
})

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        jokes.innerText = res.data.joke;
    } catch (err) {
        jokes.innerText = 'Sorry, no jokes available right now :(';
    }
}
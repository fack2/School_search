const request = (url, cb) => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return cb(data);
        });
};

const logIn = document.getElementById('logIn');
logIn.addEventListener('click', () => {
    request('/home', data => {

    })

})
const request = (url, cb) => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(data);
    })
    .catch(error => {
      console.log(error);
    });
};

const modal = document.getElementById("id01");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('buttonSearch');
searchButton.addEventListener('click', e => {
  e.preventDefault();

  request(`/search?${searchInput.value}`, data => {
    const info = document.getElementById('contentDiv');
    const heade = document.createElement('p');
    const city = document.createElement('span');

    info.innerText = "";

    heade.innerHTML = data[0].name;
    city.innerText = data[0].location;

    info.appendChild(heade);
    info.appendChild(city);
    document.body.appendChild(info);




  })
})
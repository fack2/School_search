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
  request(`/search?${searchInput.value}`, data => {
    console.log(searchInput.value)

    console.log("data");
  })
})
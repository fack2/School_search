const request = (url, cb) => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return cb(data);
      });
  };
  const modal = document.getElementById("id01");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
    const SignUp= document.getElementById("SignUp");
  SignUp.addEventListener('click',event=>{
    // id01.style.visibility ="visible";

    
  })
  

  
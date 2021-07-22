let sign_up = document.getElementById('sign_up');

sign_up.onsubmit = function (e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const jsondata = Object.fromEntries(data.entries());
  let userStatus;

  // XmlHttpRequeset Object GET/POST
  const xhr_get = new XMLHttpRequest();
  const method_get = 'GET',
    url_get = `http://localhost:3000/users?username=${jsondata.username}`;
  xhr_get.onload = function () {
    if (xhr_get.status != 200) {
      M.toast({
        html: `Error ${xhr_get.status}: ${xhr_get.statusText}`,
        displayLength: 3000,
      });
    } else {
      if (xhr_get.response != '[]') {
        M.toast({ html: 'Username Exists!', displayLength: 3000 });
      } else {
        sendData();
      }
    }
  };
  xhr_get.open(method_get, url_get, true);
  xhr_get.send();
  xhr_get.onerror = function () {
    M.toast({ html: 'Request failed', displayLength: 3000 });
  };

  function sendData() {
    const xhr = new XMLHttpRequest();
    const method = 'POST',
      url = 'http://localhost:3000/users';
  
    xhr.onload = function () {
      M.toast({
        html: 'Registered', displayLength: 3000, completeCallback: function () {
          window.location.assign('http://localhost:3000/sign_in.html');
      } });
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(jsondata));
    xhr.onerror = function () {
      M.toast({ html: 'Request failed', displayLength: '4000' });
    }
  }
};

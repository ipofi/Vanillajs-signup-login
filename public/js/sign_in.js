let sign_in = document.getElementById('sign_in');

sign_in.onsubmit = function (ev) {
    ev.preventDefault();

    const data = new FormData(ev.target);
    const jsondata = Object.fromEntries(data.entries());

    const xhr = new XMLHttpRequest();
    const method = 'GET',
        url = `http://localhost:3000/users?username=${jsondata.username}`;
    xhr.onload = function () {
        if (xhr.status != 200) {
            M.toast({
              html: `Error ${xhr.status}: ${xhr.statusText}`,
              displayLength: 4000,
            });
        } else {
            if (xhr.response != "[]") {
                displayUser(xhr.response);
            } else {
                M.toast({ html: 'User does not exist!', displayLength: 2000 });
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
    xhr.onerror = function () {
      M.toast({ html: 'Request failed!', displayLength: '4000' });
    };

    function displayUser(data) {
        let dataObj = JSON.parse(data);
        if (
          jsondata.username == dataObj[0].username &&
          jsondata.password == dataObj[0].password
        ) {
            let dc = new Date();
          let template = `
                 <tr>
                     <td>${dataObj[0].id}</td>
                     <td>${dataObj[0].surname}</td>
                     <td>${dataObj[0].firstname}</td>
                     <td>${dc.getFullYear()} : ${dc.getHours()} : ${dc.getMinutes()}</td>
                 </tr>
             `;
          document.querySelector('tbody').innerHTML = template;
        } else {
            M.toast({ html: 'Username and Password doesn\'t match!', displayLength: 3000 });
        }
    }
}

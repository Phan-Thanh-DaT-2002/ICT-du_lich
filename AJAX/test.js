function show(data) {

  let tab =
    `<tr>
  <th>Name</th>
  <th>Username</th>
  <th>Email</th>
  </tr>`;
  for (let employee of data) {
    tab += `<tr>
  <td>${employee.name} </td>
  <td>${employee.username}</td>
  <td>${employee.email}</td>
  </tr>`;
  }
  document.getElementById("employees").innerHTML = tab;
}

// async function getApi() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   var data = await response.json();
//   if (response) {
//     document.getElementById('loading').style.display = 'none';
//   }
//   show(data);
// }
function loadProduct() {
  axios.get("https://jsonplaceholder.typicode.com/users?_limit=5&_page=1").then((data) => {
    console.log(data);
    if (data) {
      document.getElementById('loading').style.display = 'none';
    }
    show(data.data);
  })
}
loadProduct()

// getApi();
// function loadApi() {
//   var req = new XMLHttpRequest();
//   req.onreadystatechange = function () {
//     if (req.readyState === 4 && req.status === 200) {
//       console.log(JSON.parse(this.response));
//     }
//   }
//   req.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//   req.send();
// }

// function fetchProduct() {
//   // fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
//   //   res.json().then((data) => { console.log(data); })
//   // })
//   const data = fetch("https://jsonplaceholder.typicode.com/users");
//   data.then(function (response) {
//     response.json().then(function (data) {
//       console.log(data);
//     })
//   })
// }

// function loadProduct() {
//   axios.get("https://jsonplaceholder.typicode.com/users?_limit=5&_page=1").then((response) => {
//     console.log(response);
//   })
// }
// // loadApi()
// // fetchProduct()
// loadProduct()
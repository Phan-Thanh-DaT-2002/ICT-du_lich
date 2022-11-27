
var arrUrl = [];
async function getApi() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  var data = await response.json();
  let tab =
    `<tr></tr>`;
  for (var i = 0; i < data.results.length; i++) {
    tab += `
   <tr>
    <td>
       <button type="button" class="list-group-item list-group-item-action">
         ${data.results[i].name}
      </button>
    </td>
   </tr>`;

    arrUrl.push({
      "id": data.results[i].name,
      "val": data.results[i].url,
    });
  }
  document.getElementById('name').innerHTML = tab;
}
getApi();


function addActive(event) {
  event.target.classList.toggle('active');
  var ten = event.srcElement.innerText;
  document.getElementById('ten_can_sua_doi').innerHTML = ten;

  var ull;
  for (var i = 0; i < arrUrl.length; i++) {
    if (ten === arrUrl[i].id) {
      ull = i + 1;
    }
  }
  document.getElementById('anh_sua_doi').src = arrUrl[ull].val;
  console.log(document.getElementById('anh_sua_doi').src);
  
}
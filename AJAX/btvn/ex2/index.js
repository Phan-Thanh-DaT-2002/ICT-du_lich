
var arrUrl = [];
async function getApi() {
  const response = 
    await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  var data = await response.json();
  console.log(data.meals);

  let list =
    `<li></li>`;
  for (var i = 0; i <data.meals.length; i++) {
    list += `
   <li class="list-group-item change_img">
   <img src="${data.meals[i].strMealThumb}" alt="">
      <strong>${data.meals[i].strMeal}</strong>
   </li>`;
  }
  console.log(document.getElementById('push'));
  document.getElementById('push').innerHTML = list;
}
getApi();


document.addEventListener("DOMContentLoaded", function() {
  fetch('../buildingDatabase.json')
    .then((response)=>response.json())
    .then((json) => json.filter(item => item.active === true))
    .then((json) => {
      console.log(json);

      document.querySelector(".testJson h1").innerHTML =json.buildingList[0].buildingName;
      document.querySelector(".testJson p").innerHTML =json.buildingList[0].buildingNumber;
    })
});

document.addEventListener("DOMContentLoaded", function() {
  fetch('../buildingDatabase.json')
    .then((response)=>response.json())
    .then((json) => {
      console.log(json);

      document.querySelector(".testJson h1").innerHTML =json[0].buildingName[0];
      document.querySelector(".testJson p").innerHTML =json[0].buildingNumber;
    })
});

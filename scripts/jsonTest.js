document.addEventListener("DOMContentLoaded", function() {
  fetch('../buildingDatabase.json')
    .then((response)=>response.json())
    .then((json) => {
      console.log(json);


      document.querySelector(".testJson h1").innerHTML =json.buildingList[0].buildingName;
      document.querySelector(".testJson p").innerHTML =json.buildingList[0].buildingNumber;
    })
  .then(createEle())
});
function createEle(){
      for (let i = 0; i < 5; i++) {
        var newDiv = document.createElement("div");
        newDiv.id = concat("group-marker-", i);
        newDiv.class = "marker-all marker-group";
        newDiv.style = "display:block; transform:scale(1); left:50%; top:20%;";
        newDiv.onclick  = "";
        var newA =  document.createElement("a");
        newA.href = "javascript:void(0);";
        newA.aria-label = "Admin Complex";
        var newSpan = document.createElement("span");
        newSpan.textContent = "test";
        newDiv.appendChild(newA);
        newDiv.appendChild(newSpan);
        var space = document.getElementById("map-image");
        document.body.insertAfter(newDiv,space);
      }
    console.log("New Elements Created")
}

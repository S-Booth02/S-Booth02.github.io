document.addEventListener("DOMContentLoaded", function() {
  fetch('../buildingDatabase.json')
    .then((response)=>response.json())
    .then((json) => {
      console.log(json);
      var filtered = json.buildingList.filter(a => a.active == true);

      createEle(filtered)
    })
});
function createEle(jsonEle){
      for (let i = 0; i < jsonEle.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.id = "".concat("group-marker-", i);
        newDiv.classList.add("marker-all", "marker-group");
        newDiv.style = "display:block; transform:scale(1); left:50%; top:20%;";
        newDiv.style.top = jsonEle[i].markerTop + '%';
        newDiv.style.left = jsonEle[i].markerLeft + '%';
        newDiv.onclick = function(){
          fetch('../buildingDatabase.json')
          .then((response)=>response.json())
          .then((json) => {
            var filtered = json.buildingList.filter(a => a.active == true);
            var idWhole = this.id;
            var idNum = idWhole.replace(/[^0-9]/g, ''); 
            var title = document.getElementById("description-title");
            var description = document.getElementById("description-paragraph");
            title.textContent = filtered[idNum].buildingName;
            description.textContent =filtered[idNum].descriptionParagraph;
            document.getElementById("overlay").style.display = "block";
            document.getElementById("map-origin").style.display = "none";
            console.log("content loaded (theoretically)");
          })
        };
        var newA =  document.createElement("a");
        newA.href = "javascript:void(0);";
        /*newA.aria-label = "Admin Complex";*/
        var newSpan = document.createElement("span");
        newSpan.textContent = jsonEle[i].buildingName;
        newDiv.appendChild(newA);
        newDiv.appendChild(newSpan);
        var space = document.getElementById("map-image-id");
        space.insertAdjacentElement("afterend", newDiv);


        /*create elements for the explore more section */
        /**get the div that will be used to insert items */
        var explore = document.getElementById("explore-more-id");
        var exploreInfoDiv = document.createElement("div");
        exploreInfoDiv.className = "explore-info";
        exploreInfoDiv.id = "explore-" + [i];
        exploreInfoDiv.style = "border-top: 1px solid #ccc;";
        exploreInfoDiv.onclick = function(){
          fetch('../buildingDatabase.json')
          .then((response)=>response.json())
          .then((json) => {
            var filtered = json.buildingList.filter(a => a.active == true);
            var idWhole = this.id;
            var idNum = idWhole.replace(/[^0-9]/g, ''); 
            var title = document.getElementById("description-title");
            var description = document.getElementById("description-paragraph");
            title.textContent = filtered[idNum].buildingName;
            description.textContent =filtered[idNum].descriptionParagraph;
            document.getElementById("overlay").style.display = "block";
            document.getElementById("map-origin").style.display = "none";
            window.scrollTo(0,0);
            console.log("content loaded (theoretically)");
          })
        };
        var infoIconDiv = document.createElement("div");
        infoIconDiv.className = "info-icon";
        var infoIcon = document.createElement("img");
        switch (jsonEle[i].iconType){
          case 1:
            infoIcon.src = "../images/aero_icon@2x.png";
          break;
          case 2:
            infoIcon.src = "../images/lab_icon@2x.png";
          break;
          case 3:
            infoIcon.src = "../images/satellite_icon@2x.png";
          break;
          case 4:
            infoIcon.src = "../images/transformation_icon@2x.png";
          break;
          default:
            infoIcon.src = "../images/temp.jpg";
        }
        infoIconDiv.appendChild(infoIcon);
        exploreInfoDiv.appendChild(infoIconDiv);
        
        var exploreImage = document.createElement("img");
        var imageOuterDiv = document.createElement("div");
        exploreImage.style = "object-fit: fill; height: 100px; width: 150px; float: left; padding-left: 14px;";
        exploreImage.src = "../images/" + jsonEle[i].thumbnailIcon;
        
        
        
        var innerExploreDiv = document.createElement("div");
        innerExploreDiv.className = "info";
        var textDiv = document.createElement("div");
        textDiv.className = "info-title";
        textDiv.textContent = jsonEle[i].buildingName;
        innerExploreDiv.textContent = jsonEle[i].buildingNumber;
        imageOuterDiv.appendChild(exploreImage);
        imageOuterDiv.appendChild(textDiv);
        imageOuterDiv.appendChild(innerExploreDiv);
        exploreInfoDiv.appendChild(imageOuterDiv);
        explore.insertAdjacentElement("beforeend",exploreInfoDiv); /*this may need a different text value*/ 
      }
    console.log("New Elements Created")
}
var writeusLink=document.querySelector(".write-us"),writeusPopUp=document.querySelector(".pop-up-write-us");if(writeusLink&&writeusPopUp){var writeusClose=writeusPopUp.querySelector(".pop-up-close"),writeusName=writeusPopUp.querySelector("#feedback-name");writeusLink.addEventListener("click",function(e){e.preventDefault(),writeusPopUp.classList.add("pop-up-show"),writeusName.focus()}),writeusClose.addEventListener("click",function(e){e.preventDefault(),writeusPopUp.classList.remove("pop-up-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&writeusPopUp.classList.contains("pop-up-show")&&writeusPopUp.classList.remove("pop-up-show")})}var roadmapLink=document.querySelector(".road-map-small"),roadmapPopUp=document.querySelector(".pop-up-road-map-big");if(roadmapLink&&roadmapPopUp){var roadmapClose=roadmapPopUp.querySelector(".pop-up-close");roadmapLink.addEventListener("click",function(e){e.preventDefault(),roadmapPopUp.classList.add("pop-up-show")}),roadmapClose.addEventListener("click",function(e){e.preventDefault(),roadmapPopUp.classList.remove("pop-up-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&roadmapPopUp.classList.contains("pop-up-show")&&roadmapPopUp.classList.remove("pop-up-show")})}for(var cartplusLinks=document.querySelectorAll(".add-to-cart"),cartplusPopUp=document.querySelector(".pop-up-cart-plus"),cartplusCloses=cartplusPopUp.querySelectorAll("button"),cartplusOrder=cartplusPopUp.querySelector("a"),i=0;i<cartplusLinks.length;i++)cartplusLinks[i].addEventListener("click",function(e){e.preventDefault(),cartplusPopUp.classList.add("pop-up-show"),cartplusOrder.focus()});for(var i=0;i<cartplusCloses.length;i++)cartplusCloses[i].addEventListener("click",function(e){e.preventDefault(),cartplusPopUp.classList.remove("pop-up-show")});window.addEventListener("keydown",function(e){27===e.keyCode&&cartplusPopUp.classList.contains("pop-up-show")&&cartplusPopUp.classList.remove("pop-up-show")});

//Slides
var index = 0;
var change = function() {
  var image = ["img/Gate.jpg","img/slide_pn_1.jpg","img/slide_pn_2.jpg","img/slide_pn_3.jpg","img/slide_pn_4.jpg"];
  document.getElementById("slide").src = image[index];
  index++;
  if(index == 5) {
    index = 0;
  }
}
setInterval(change,1000)
//Prev and next
var index1 = 1;
function prev() {
  var pre = ["img/Introduce_3.jpg","img/Introduce_2.jpg","img/Introduce_4.jpg"];
  document.getElementById("im").src = pre[index1];
  index1++;
  if(index1 > 2) {
    index1 = 0;
  }
}
function next() {
  var next = ["img/Introduce_3.jpg","img/Introduce_2.jpg","img/Introduce_4.jpg"];
  document.getElementById("im").src = next[index1];
  index1--;
  if(index1 <0) {
    index1 = 2;
  }
}

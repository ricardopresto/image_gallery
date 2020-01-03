let images = [
  "ivy_edit1",
  "ivy_edit2",
  "ivy_edit3",
  "ivy_edit4",
  "ivy_edit5",
  "ivy_edit6",
  "ivy_edit7",
  "ivy_edit8"
];

let thumbsize = 200;
let container = document.getElementById("container");
let frameContainer = document.getElementById("frameContainer");

images.forEach(image => {
  let pic = document.createElement("img");
  pic.src = `./images/thumbs/${image}_th.jpg`;
  pic.id = `${image}`;
  pic.addEventListener("click", e => imageClick(e));
  pic.onload = function() {
    this.naturalWidth > this.naturalHeight
      ? (this.style.width = `${thumbsize}px`)
      : (this.style.height = `${thumbsize}px`);
  };
  container.appendChild(pic);
});

frameContainer.addEventListener("click", function() {
  frameContainer.style.visibility = "hidden";
  frameContainer.removeChild(frameContainer.children[0]);
});

function imageClick(e) {
  frameContainer.style.visibility = "visible";
  let frame = document.createElement("div");
  frame.id = "frame";
  let pic = document.createElement("img");
  pic.src = `./images/${e.srcElement.id}.jpg`;
  frame.appendChild(pic);
  frameContainer.appendChild(frame);
}

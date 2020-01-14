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

let items = [];
let currentItem;

class GalleryItem {
  constructor(fileName, orientation) {
    this.fileName = fileName;
    this.orientation = orientation;
  }
}

let thumbsize = 200;
let container = document.getElementById("container");
let frameContainer = document.getElementById("frameContainer");

images.forEach(image => {
  let pic = document.createElement("img");
  pic.src = `./images/thumbs/${image}_th.jpg`;
  pic.id = `${images.indexOf(image)}`;
  pic.style.padding = "10px";
  pic.addEventListener("click", e => imageClick(e));
  let newItem = new GalleryItem();
  newItem.fileName = image;
  pic.onload = function() {
    if (this.naturalWidth > this.naturalHeight) {
      this.style.width = `${thumbsize}px`;
      newItem.orientation = "landscape";
    } else {
      this.style.height = `${thumbsize}px`;
      newItem.orientation = "portrait";
    }
  };
  items.push(newItem);
  container.appendChild(pic);
});

frameContainer.addEventListener("click", function() {
  frameContainer.style.visibility = "hidden";
  frameContainer.removeChild(frameContainer.children[0]);
});

function imageClick(e) {
  let id = Number(e.srcElement.id);
  currentItem = id;
  frameContainer.style.visibility = "visible";
  let frame = document.createElement("div");
  frame.id = "frame";
  window.innerWidth > window.innerHeight
    ? (frame.style.height = frame.style.width = `${window.innerHeight}px`)
    : (frame.style.width = frame.style.height = `${window.innerWidth}px`);
  let pic = document.createElement("img");
  pic.src = `./images/${items[id].fileName}.jpg`;
  pic.draggable = false;
  items[id].orientation == "landscape"
    ? (pic.style.width = "100%")
    : (pic.style.height = "100%");
  frame.appendChild(pic);
  frameContainer.appendChild(frame);
}

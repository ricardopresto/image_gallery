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
  document.getElementById("container").appendChild(pic);
});

function imageClick(e) {
  console.log(e.srcElement.id);
}

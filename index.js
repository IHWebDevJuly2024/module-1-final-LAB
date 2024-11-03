console.log('JS working!');

// Your code goes here
const workers = [
  {
    name: "Michael Scott",
    position: "Project Manager",
    email: "michael.scott@compuglobalhipermeganet.com",
    photo: "https://www.lavanguardia.com/uploads/2020/06/29/5fa91c5e49c91.jpeg",
  },
  {
    name: "Dwight Schrute",
    position: "Assistant to the project Manager",
    email: "dwight.schrute@compuglobalhipermeganet.com",
    photo:
      "https://s.yimg.com/ny/api/res/1.2/NSc3nWzMmEVxLXgx2N5LMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/levelup_525/47b81f0779adb85592c63ebb7276c11a",
  },
  {
    name: "Ditto",
    position: "CTO",
    email: "ditto@compuglobalhipermeganet.com",
    photo:
      "https://m.media-amazon.com/images/I/61AwGJQu3CL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Homer Simpson",
    position: "Vice CEO",
    email: "homer.simpson@compuglobalhipermeganet.com",
    photo:
      "https://s1.eestatic.com/2018/05/02/bluper/bluper_304233574_169542942_1706x960.jpg",
  },
  {
    name: "Morty Smith",
    position: "Intern",
    email: "morty.smith@compuglobalhipermeganet.com",
    photo:
      "https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg",
  },
];
// loop that iterates through array

workers.forEach((worker) => {
  const card = document.createElement("div");
  let imgTag = document.createElement("img");
  imgTag.src = worker.photo;
  card.appendChild(imgTag);

  let h2Tag = document.createElement("h2");
  h2Tag.innerHTML = worker.name;
  card.appendChild(h2Tag);

  let h3Tag = document.createElement("h3");
  h3Tag.innerHTML = worker.position;
  card.appendChild(h3Tag);

  let paragraphTag = document.createElement("p");
  let linkTag = document.createElement("a");
  paragraphTag.appendChild(linkTag);
  card.appendChild(paragraphTag);

  let buttonTag = document.createElement("button");
  buttonTag.innerHTML = "See details";
  buttonTag.onclick = function () {

  };

  card.classList.add("card");
  document.querySelector("#container").appendChild(card);
});

// function that adds id for each worker
function addWorkersId(workers) {
  workers.forEach((worker, index) => {
    worker.id = index + 1;
  });
}

addWorkersId(workers);



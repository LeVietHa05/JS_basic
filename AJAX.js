// XML http request
// const req = new XMLHttpRequest();

// req.onerror = function () {
//     console.log('errrorrorororo')
//     console.log(this);
// }

// req.onload = function () {
//     console.log('success');
//     const parsedData = JSON.parse(this.responseText);
//     console.log(parsedData.name, parsedData.height);
// }

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

//fetch

// fetch("https://swapi.dev/api/people/1")
// .then(res, data)
//     return fetch(data.films[1]) => {
//     return res.json();
// })
// .then ((data) => {
//     console.log('done'
// })
// .then(res => {
//     console.log('film resolved');
//     return res.json()
// })
// .then ( data => {
//     console.log(data)
// })
// .catch((e) => {
//     console.log('Error', e)
// });

/**
 *
 * @param {num} id
 */
const loadPeople = async (id) => {
  try {
    const res = await fetch("https://swapi.dev/api/people/" + id);
    const data = await res.json();  //res là dữ liệu chưa qua xử lý
    console.log(data);
  } catch (e) {
    console.log("error", e);
  }
};

// axios.get("https://swapi.dev/api/people/1000")
// .then((result) => {
//     console.log(result)
// })
// .catch((err) => {
//     console.log('error', err);
// });

const loadPeople2 = async (id) => {
  const res = await axios.get(`https://swapi.dev/api/people/${id}`);
  console.log(res.data.name);
};

const button = document.querySelector("button");

const addNewJoke = async () => {
  const newJoke = await getDadJoke();
  const newList = document.createElement("LI");
  newList.append(newJoke);
  jokes.append(newList);
};

const jokes = document.querySelector("#joke");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } 
  catch (e) {
    console.log(e);
    return "no joke available";
  }
};
button.addEventListener("click", addNewJoke);

const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm, isGood: true } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  // console.log(res.data[0].show.image.medium)
  makeImages(res.data);
});

/**
 * 
 * @param {array} shows danh sách các show
 * in ra toàn bộ ảnh của các show đó
 */
const makeImages = (shows) => {
    deleteImgs();   //xóa ảnh để cho lượt hiển thị mới
    for (let list of shows) {
        if (list.show.image) {  //cẩn thận mấy show không có ảnh
            const img = document.createElement("IMG");
            img.src = list.show.image.medium;
            document.body.append(img); //hiển thị ảnh
        }
    }
};

/**
 * xóa hết ảnh trong trang web. hơi ngu tí
 */
const deleteImgs = () => {
    const imgs = document.querySelectorAll('IMG');
    for (let img of imgs) {
        img.remove();   //xóa ảnh
    }
}
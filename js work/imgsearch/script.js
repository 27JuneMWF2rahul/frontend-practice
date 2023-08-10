const accessKey = "atU9QT7u0R4OvxMT1e3rZSZxL1fm19QyTbB1Hxe8SF8";

const searchForm = document.getElementById("search-from");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");


let keyword = " ";
let page = 1;
 
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();
    if(page===1){
        searchResult.innerHTML = "";
    }

   const results = data.results;
   results.map((result) =>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";


    // console.log(imageLink)
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink)
    // console.log(searchResult)
   })
   showMore.style.display = "block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages(); 
})
showMore.addEventListener("click", ()=>{
    page++;
    searchImages();
})

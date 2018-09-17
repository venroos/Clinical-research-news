// Our variables
const filter = "clinical trial"
const key = "27a083c864a845e6b95618a62dffede0"
const url = `https://newsapi.org/v2/everything?q=${filter}&language=en&excludeDomains=seekingalpha.com&sortBy=relevancy&pageSize=24&apiKey=${key}`
/*const cancerUrl = `https://newsapi.org/v2/everything?q="clinical trials" AND cancer&language=en&excludeDomains=seekingalpha.com&sortBy=relevancy&pageSize=24&apiKey=${key}`
const ebolaUrl = `https://newsapi.org/v2/everything?q="clinical trials" AND ebola&language=en&excludeDomains=seekingalpha.com&sortBy=relevancy&pageSize=24&apiKey=${key}`
const stockUrl = `https://newsapi.org/v2/everything?q="clinical trials" AND stock&language=en&excludeDomains=seekingalpha.com&sortBy=relevancy&pageSize=24&apiKey=${key}`
*/
// Our main function
const recievedNews = (newsdata) => {
document.querySelector(".allNews").innerHTML = ""
	// For each article object from the API, we create a new div in HTML.

  newsdata.articles.forEach((article) => {

      // Check if urlToImage is not null ie no image
      					if(article.urlToImage) {
					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
          <h2>${article.title}</h2>
            <img src="${article.urlToImage}"/>
            <p>${article.description}</p>
            <a href=${article.url} target="_blank">Read more</a>
            </div>`
  }
else {
  document.querySelector(".allNews").innerHTML +=
    `<div class="news">
   <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href=${article.url} target="_blank">Read more</a>
    </div>`
}
})
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

const addKeyword = (clickedButton) => {
  let newUrl="",
  //newFilter="",
  newFilter=filter + " AND " + clickedButton.currentTarget.id
newUrl = `https://newsapi.org/v2/everything?q=${newFilter}&language=en&excludeDomains=seekingalpha.com&sortBy=relevancy&pageSize=24&apiKey=${key}`

fetch(newUrl)
    .then(response => response.json())
    .then(recievedNews)
}

const unFilter = () => {
    fetch(url)
    .then(response => response.json())
    .then(recievedNews)
}

document.getElementById("cancer").onclick = addKeyword
document.getElementById("ebola").onclick = addKeyword
document.getElementById("stock").onclick = addKeyword
document.getElementById("all").onclick = unFilter

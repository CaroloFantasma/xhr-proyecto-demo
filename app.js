const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchForText;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchForText = searchField.value;
  getNews();
});

const getNews = () => {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=c74fb8b0308b4fd6a58d3af2da80ac01`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

const handleError = () => {
  console.log('Se ha presentado un error');
};

//   const addNews = () => {
//   const data = JSON.parse(responseText);
//   console.log(data);
// };

function addNews() {
  const data = JSON.parse(this.responseText);
  const article = data.response.docs[0];
  const title = article.headline.main;
  const snippet = article.snippet;
  const response = data.response;
  console.log(response);

  let li = document.createElement('li');
  li.className = 'articleClass';
  li.innerHTML = snippet;

  responseContainer.appendChild(li);
}


  

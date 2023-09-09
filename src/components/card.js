const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // console.log(article)
  const articleParentElm = document.createElement('div')
    articleParentElm.classList.add('card')

  const headline = document.createElement('div')
  headline.classList.add('headline')
  console.log(article.headline)
  headline.textContent = article.headline

  const author = document.createElement('div')
  author.classList.add('author')


  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')

  const img = document.createElement('img')
  img.src = article.authorPhoto

  const authorName = document.createElement('span')
  authorName.textContent = `By ${article.authorName}`

  imgContainer.appendChild(img)
  author.appendChild(imgContainer)
  author.appendChild(authorName)
  articleParentElm.appendChild(headline)
  articleParentElm.appendChild(author)

  // const headline = document.createElement('div')
  // const author = document.createElement('div')
  // const imgContainer = document.createElement('div')
  // const img = document.createElement('img')
  // const authorName = document.createElement('span')

  // articleParentElm.appendChild(headline)
  // articleParentElm.appendChild(author)
  // author.appendChild(imgContainer)
  // imgContainer.appendChild(img)
  // author.appendChild(authorName)

  // articleParentElm.classList.add('card')
  // headline.classList.add('headline')
  // author.classList.add('author')
  // imgContainer.classList.add('img-container')
  
  
  console.log(articleParentElm)
  // console.log(articleParentElm)

  articleParentElm.addEventListener('click', () => {
    console.log(article.headline)
  });

  return articleParentElm
}



import axios from 'axios'

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  
  
  // cardsContainer.appendChild(Card())
  
 
    axios.get('http://localhost:5001/api/articles')
  .then(res => {
  //  console.log(res.data.articles)
  const articles = res.data.articles
  const articlesList = []
  for (let article in articles) {
    // console.log(articles[article])
    articlesList.push(...articles[article])
  }
  // console.log(articlesList)
  // console.log(articles)
  //  let cardsContainer = document.querySelector(selector)
    articlesList.forEach(article => {
      // const articles = res.data.articles
      let cardsContainer = document.querySelector(selector)
    cardsContainer.appendChild(Card(article))
  })
  // cardsContainer.appendChild(articles)
  })
  .catch(err => {
    console.error(err)
  })

}

export { Card, cardAppender }

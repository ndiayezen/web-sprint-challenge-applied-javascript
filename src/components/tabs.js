const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  topics = document.createElement('div')
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')

  topics.appendChild(tab1)
  topics.appendChild(tab2)
  topics.appendChild(tab3)

  topics.classList.add('topics')
  tab1.classList.add('tab')
  tab2.classList.add('tab')
  tab3.classList.add('tab')

  tab1.textContent = 'javascript'
  tab2.textContent = 'bootstrap'
  tab3.textContent = 'technology'
  return topics

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
    document.querySelector(selector).appendChild(Tabs())
  
  
}

export { Tabs, tabsAppender }

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // Remember response is an object, response.data is an array.
    response.data.topics.forEach(item => {
      let tab = Tab(item);
      topics.appendChild(tab);
    });
  })
  .catch(error => {
    console.log("Error:", err);
  });

function Tab(content) {
  let tab = document.createElement("div");
  tab.textContent = content;
  tab.classList.add("tab");
  return tab;
}

"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const posts = await getPosts();
  console.log(posts);
  displayPostsGrid(posts)
}

async function getPosts() {
  const response = await fetch(
    "https://josecaceres.dk/wp-json/wp/v2/projects?acf_format=standard"
  );

  const data = await response.json();
  return data;
}


function displayPostsGrid(posts) {
  const postsGrid = document.querySelector("#posts-grid");

  for (const post of posts) {
    postsGrid.insertAdjacentHTML(
      "beforeend",
      /*html*/

      `
  <article class="grid-item">

    <h2>${post.title.rendered}</h2>
    <p class="text">${post.acf.text}</p>
    <img src = "${post.acf.image}" alt = "${post.title.rendered}" />
    <p class="description">${post.acf.description}</p>
    <p class = "link"><a href="${post.acf.link}" target = "_blank">Platform Link</a></p>
  </article>

  `
    );
  }
}
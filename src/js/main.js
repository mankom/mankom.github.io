"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hey there!`);

const list = document.querySelector('.my-projects__list--js');

fetch('https://api.github.com/users/mankom/repos?sort=updated&direction=desc')
.then(reps => reps.json())
.then(reps => {
  const repos = reps;
  for(const repo of repos){
    const {homepage, description, html_url, name} = repo;
    if(homepage){
      list.innerHTML += `
      <li class="my-projects__item">
        <a class="my-projects__link" href="${html_url}">${name}</a>
        <p class="my-projects__description">${description ? description : "brak opisu"}</p>
      </li>
    `;
    }else{
      break;
    }
    
    console.log(repo);
  }
})
.catch(err => {

})



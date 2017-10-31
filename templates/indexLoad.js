function indexLoadTemplate (id, title, snippet){
  const template1 = `
  <div class="post mb-5">
    <h3 class="title mb-1">${title}</h3>
    <p class="snippet">${snippet}</p>
    <a href="#" id="${id}" class="read-more">Read more</a>
  </div>
  `
  return template1
}

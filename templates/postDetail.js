function postDetail(post){
  let { title, content } = post
  const postInfoTemplate = `
  <div class="post mb-5">
    <h3 class="title mb-1">${title}</h3>
    <p class="content">${content}</p>
    <a href="#" id="back" class="back mr-4">Back</a>
    <a href="#" id="edit" class="back">Edit Post</a>
  </div>
  `

  return postInfoTemplate

}

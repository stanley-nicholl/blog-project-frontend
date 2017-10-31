const blogArea = document.getElementById('blog-area')
const createBtn = document.getElementById('create')
const error = document.getElementById('error')

indexLoad()

let blogArray = []

function indexLoad(){
  axios.get('http://localhost:3000/posts')
    .then(result => {
      blogArray = []
      let limit
      const list = result.data.data
      let string = ``
      list.forEach(post => {
        const { id, title, content} = post
        if(content.length < 140){
          limit = content.length
        }else{
          limit = 140
        }
        const snippet = content.substring(0,limit) + '...'
        const html = indexLoadTemplate(id, title, snippet)
        string+= html
        blogArray.push(id)
      })
      blogArea.innerHTML = string
      blogArray.forEach(id => {
        const target = document.getElementById(id)
        target.addEventListener('click', (event) => {
          event.preventDefault()
          getFullPost(id)
        })
      })
      // enabablePostFunction()
    })
    .catch(err => console.log('ERROR:', err));
}



createBtn.addEventListener('click', (event) =>{
  event.preventDefault()
  blogArea.innerHTML = newFormLoadTemplate()
  const submitPost = document.getElementById('submit')
  submitPost.addEventListener('click', (event) => {
    event.preventDefault()
    addPost()
    })
})

function addPost (){
  let post ={}
  error.innerHTML = ``
  const title = document.getElementById('title').value
  const content = document.getElementById('content').value
  if(!title || !content){
    error.innerHTML = `Please enter a title and the post content`
    return null
  }
  const config = { title, content}
  axios.post('http://localhost:3000/posts', config)
    .then(result => {
      let data = result
      const id = data.data.id
      getFullPost(id)
    })
    .catch(err => console.log('ERROR:', err))
  return post
}

function getFullPost(id){
  axios.get(`http://localhost:3000/posts/${id}`)
    .then(result => {
      const {id, title, content} = result.data
      const newPost = { title, content }
      blogArea.innerHTML = postDetail(newPost)
      const back = document.getElementById('back')
      back.addEventListener('click', indexLoad)
      const edit = document.getElementById('edit')
      edit.addEventListener('click', (event) => {
        event.preventDefault(title, content)
        blogArea.innerHTML = editForm(title, content)
        const update = document.getElementById('update')
        update.addEventListener('click', (event) => {
          event.preventDefault()
          addPost()
        })
      })
    })
    .catch(err => console.log('ERROR:', err))
}

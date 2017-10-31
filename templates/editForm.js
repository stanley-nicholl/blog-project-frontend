function editForm(title, content){
  const editForm = `
  <form>
    <div class="form-group">
      <label for="title" class="text-white">Title</label>
      <input type="text" class="form-control" id="title" value="${title}">
    </div>
    <div class="form-group">
      <label for="content" class="text-white">Content</label>
      <textarea class="form-control" id="content" rows="3">${content}</textarea>
    </div>
    <button type="submit" id="update" class="btn btn-primary">Update</button>
  </form>`

  return editForm
}

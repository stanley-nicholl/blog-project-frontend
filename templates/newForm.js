function newFormLoadTemplate(){
  const newForm = `
  <form>
    <div class="form-group">
      <label for="title" class="text-white">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Enter post title">
    </div>
    <div class="form-group">
      <label for="content" class="text-white">Content</label>
      <textarea class="form-control" id="content" rows="3"></textarea>
    </div>
    <button type="submit" id="submit" class="btn btn-primary">Submit</button>
  </form>`

  return newForm
}

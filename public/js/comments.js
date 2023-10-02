document.addEventListener("DOMContentLoaded", loadComments())
    
  async function loadComments(){

    const url = window.location.toString().split("/");
    const blog_id = (url[url.length - 1]);
    let blog = parseInt(blog_id);

    const response= await fetch(`/api/comments/${blog}`)
    console.log(response);
    const data= await response.json();
    console.log(data);
    const {comments} = data
    comments.forEach((comment) => {
      const commentList = document.getElementById('comments-list')
      const commentContainer = document.createElement('div');

      commentContainer.setAttribute('style', 'width: 500px; height: 100px;')

      const CommentOwner = document.createElement('h5');
      const CommentHolder = document.createElement('p');
      const CommentDate = document.createElement('p');

      CommentOwner.setAttribute('class', 'cUser');
      CommentHolder.setAttribute('class', 'cHolder');
      CommentDate.setAttribute('class', 'cDate');

      CommentOwner.innerHTML = comment.user.name;
      CommentHolder.innerHTML = comment.description;
      CommentDate.innerHTML = comment.date_created;

      commentContainer.appendChild(CommentOwner);
      commentContainer.appendChild(CommentHolder);
      commentContainer.appendChild(CommentDate);

      commentList.appendChild(commentContainer);
    });

  }

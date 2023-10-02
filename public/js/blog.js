const url = window.location.toString().split("/");
const blog_id = (url[url.length - 1]);
let blog = parseInt(blog_id);

const newFormHandler = async (event) => {
    event.preventDefault();

    const description = document.getElementById('uComment').value.trim()

    const payload = {
      description: description,
      project_id: blog
    }
    if (description) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify( payload ),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log(response)
        location.reload();
      } else {
        console.log(response)
        alert('Failed to post comment');
      }
    }
  };

  document
  .querySelector('.comment-box')
  .addEventListener('submit', newFormHandler);

  
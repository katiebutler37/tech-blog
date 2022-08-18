async function upvoteClickHandler(event) {
    event.preventDefault();
    //grabbing the post_id from the end of the URL, will grab user_id from the session in backend
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    
      const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);
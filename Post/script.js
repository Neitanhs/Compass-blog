import {posts} from '/Post/data/data.js'

function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    let postHTML = '';
  
    posts.forEach((post) => {    
  
      // Criar o HTML do post
      postHTML += `
    <div class="post">
        <div class="images-post">
        <a href="/Post details/Post_${post.id}/post-details-${post.id}.html">
          <img src="${post.imageUrl}" alt="${post.title}" />
          </a>
       </div>       
    <div class="post-text">
        <a href="/Post details/Post_${post.id}/post-details-${post.id}.html">
          <h3>${post.title}</h3>          
          <p>${post.body}</p>
          <a class="link" href="/Post details/Post_${post.id}/post-details-${post.id}.html">Expand...</a>
        </a>
    </div>     
        </div>
      `;
    });
  
    postsContainer.innerHTML = postHTML;
  }
  
  renderPosts();
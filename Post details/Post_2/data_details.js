import {posts, comments} from '/Post/data/data.js'

function renderPost(postId) {
    const post = posts.find((post) => post.id === postId);
  
    if (!post) {
      console.error('Post not found.');
      return;
    }
  
    const postComments = comments.filter((comment) => comment.postId === postId);
  
    const postHTML =`
    <a href="/Post/index.html"  class="arrow-img">
    <img src="/img/ArrowIcon.svg" alt="arrow">
   </a>    
  <div class="post">
        <div class="images-post">
        <img src="${post.imageUrl}" alt="${post.title}" />
        </div>
    <div class="post-text">
        <h3>${post.title}</h3>          
        <p>${post.body}</p>
    </div>
  </div>

  <div class="comments-box">        
        <ul>
          ${postComments.map((comment) => `<li class="comments-text"><Strong>usuário_${comment.id} :${comment.email} : </Strong> ${comment.body}</li>`).join('')}
        </ul>
  </div>
    `;
  
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = postHTML;
  }
  
  // Exemplo de uso: renderizar o post com o postId 2
  renderPost(2);

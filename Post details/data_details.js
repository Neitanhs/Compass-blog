import {posts, comments} from '/Post/data/data.js'

// Função para renderizar um único post
function renderSinglePost() {
  const postContainer = document.getElementById('post-container');
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const post = posts.find(post => post.id === parseInt(postId));
  const postComments = comments.filter((comment) => comment.postId === parseInt(postId));


  if (post) {
    const postHTML = `
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
    postContainer.innerHTML = postHTML;
  } else {
    postContainer.innerHTML = 'Post not found.';
  }
}

// Chama a função para renderizar o post
renderSinglePost();
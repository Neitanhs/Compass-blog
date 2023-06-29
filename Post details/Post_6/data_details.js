"use strict";
var posts = [    
    {
        id: 6,
        title: "Pulp Fiction",
        imageUrl: "/img/pulp fiction.png",
        body: "Pulp Fiction is a Quentin Tarantino cult classic, known for its nonlinear storytelling and gritty dialogue. The film weaves interconnected stories of hitmen, boxers, and mobsters in Los Angeles. With a stellar ensemble cast and Tarantino's signature style, Pulp Fiction is an edgy and unforgettable cinematic experience."
    },
];
var comments = [    
    /* Post-details 6 */
    {
        id: 1,
        postId: 6,
        email: "rafa_kepler@gmail.com",
        body: "Pulp Fiction is a cinematic masterpiece! Tarantino's writing is unmatched."
    },
    {
        id: 2,
        postId: 6,
        email: "mia@gmail.com",
        body: "The dialogue and non-linear storytelling make Pulp Fiction unforgettable."
    },
    {
        id: 3,
        postId: 6,
        email: "jules@gmail.com",
        body: "Pulp Fiction is a cultural phenomenon. The cast and soundtrack are incredible."
    },
];

function renderPost(postId) {
    const post = posts.find((post) => post.id === postId);
  
    if (!post) {
      console.error('Post not found.');
      return;
    }
  
    const postComments = comments.filter((comment) => comment.postId === postId);
  
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
  
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = postHTML;
  }
  
  // Exemplo de uso: renderizar o post com o postId 2
  renderPost(6);

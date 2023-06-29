"use strict";
var posts = [    
    {
        id: 5,
        title: "The Matrix",
        imageUrl: "/img/Matrix.jpg",
        body: "The Matrix is a groundbreaking science fiction film directed by the Wachowskis. It introduces us to a dystopian world where humans are unknowingly trapped in a simulated reality controlled by machines. Neo, a computer hacker, becomes the chosen one who fights to free humanity. With mind-bending visuals and philosophical themes, The Matrix redefined the sci-fi genre."
    },    
];
var comments = [    
    /* Post-details 5 */
    {
        id: 1,
        postId: 5,
        email: "thomas@gmail.com",
        body: "Matrix blew my mind! The concept and action sequences were groundbreaking."
    },
    {
        id: 2,
        postId: 5,
        email: "carlos_slu@gmail.com",
        body: "The Matrix is a modern classic. It redefined the science fiction genre."
    },
    {
        id: 3,
        postId: 5,
        email: "morpheus@gmail.com",
        body: "I still remember the red pill/blue pill scene. Matrix is a must-watch."
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
  renderPost(5);

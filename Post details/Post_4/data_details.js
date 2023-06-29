"use strict";
var posts = [    
    {
        id: 4,
        title: "Spirited Away",
        imageUrl: "/img/Chihiro.webp",
        body: "Spirited Away is a captivating Japanese animated film by Hayao Miyazaki. It tells the enchanting story of Chihiro, a young girl who stumbles upon a magical world inhabited by spirits and creatures. Through her bravery and resilience, Chihiro must navigate this realm to save her parents and find her way back home. With breathtaking animation and a profound exploration of identity and courage, Spirited Away is a timeless masterpiece that captures the imagination of both children and adults alike."
    },
   
];
var comments = [   
    /* Post-details 4 */
    {
        id: 1,
        postId: 4,
        email: "isabella@gmail.com",
        body: "Spirited Away is a magical masterpiece! It transported me to a whole new world."
    },
    {
        id: 2,
        postId: 4,
        email: "lucas@gmail.com",
        body: "A beautiful and enchanting film! Spirited Away captured my heart."
    },
    {
        id: 3,
        postId: 4,
        email: "angel00@gmail.com",
        body: "Spirited Away is a true work of art. The animation and storytelling are mesmerizing."
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
  renderPost(4);

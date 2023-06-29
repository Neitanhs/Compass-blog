"use strict";
var posts = [    
    {
        id: 3,
        title: "Interstellar",
        imageUrl: "/img/Interstellar.jpg",
        body: "Interstellar is a mind-bending sci-fi epic directed by Christopher Nolan. It explores a near-future Earth facing an agricultural crisis and follows a group of astronauts who embark on a daring mission through a wormhole to find a new habitable planet. With stunning visuals and an emotionally charged narrative, it takes audiences on an awe-inspiring journey through space and time."
    },
    
];
var comments = [
    
    /* Post-details 3 */
    {
        id: 1,
        postId: 3,
        email: "mari_card@gmail.com",
        body: "Mind-bending and thought-provoking! Interstellar took me on an incredible journey."
    },
    {
        id: 2,
        postId: 3,
        email: "welliton_SM@gmail.com",
        body: "Awe-inspiring visuals and a gripping storyline. Interstellar blew my mind!"
    },
    {
        id: 3,
        postId: 3,
        email: "gabilol@gmail.com",
        body: "Interstellar is a masterpiece! The performances and the score were phenomenal."
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
  renderPost(3);

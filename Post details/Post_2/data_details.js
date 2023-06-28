"use strict";
var posts = [    
    {
        id: 2,
        title: "Django Unchained",
        imageUrl: "/Compass-blog/img/Django.jpg",
        body: "Django Unchained is a Quentin Tarantino masterpiece, a gripping blend of Western and revenge thriller. Set in the pre-Civil War era, it follows Django, a freed slave turned bounty hunter, on a mission to rescue his wife from a sadistic plantation owner. With stellar performances and a compelling storyline, it's a must-watch film."
    }
];
var comments = [
    
    /* Post-details 2 */
    {
        id: 1,
        postId: 2,
        email: "anaking@gmail.com",
        body: "Tarantino's masterpiece! Brilliant performances and gripping storyline."
    },
    {
        id: 2,
        postId: 2,
        email: "carlosmaya@gmail.com",
        body: "Django Unchained is a wild ride! The cinematography and soundtrack are top-notch."
    },
    {
        id: 3,
        postId: 2,
        email: "gabriel_SM@gmail.com",
        body: "A powerful film with a great mix of action, humor, and social commentary."
    },
    
];

function renderPost(postId) {
    const post = posts.find((post) => post.id === postId);
  
    if (!post) {
      console.error('Post not found.');
      return;
    }
  
    const postComments = comments.filter((comment) => comment.postId === postId);
  
    const postHTML =`
    <a href="/Compass-blog/Post/index.html"  class="arrow-img">
    <img src="/Compass-blog/img/ArrowIcon.png" alt="arrow">
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

"use strict";
var posts = [
    {
        id: 1,
        title: "Spider-Man: Across the Spider-Verse",
        imageUrl: "/Compass-blog/img/Spider.jpg",
        body: "Spider-Man: Across the Spider-Verse is the highly anticipated sequel to the animated superhero film. Continuing the story of Miles Morales, it delves deeper into the multiverse, as he encounters new versions of Spider-Man. With stunning visuals, thrilling action, and an exploration of identity and responsibility, the film promises to be an exciting and groundbreaking addition to the Spider-Verse franchise."
    }
];
var comments = [
    /* Post-details 1 */
    {
        id: 1,
        postId: 1,
        email: "Leo_Buhring@gmail.com",
        body: "Awesome movie! Loved the animation and storyline. Can't wait for the sequel!"
    },
    {
        id: 2,
        postId: 1,
        email: "mariagotic@gmail.com",
        body: "The visuals were mind-blowing! Spider-Verse is a game-changer."
    },
    {
        id: 3,
        postId: 1,
        email: "pedro_00@gmail.com",
        body: "Incredible film! The music and characters were absolutely fantastic."
    }
];

function renderPost(postId) {
    const post = posts.find((post) => post.id === postId); 
  
    const postComments = comments.filter((comment) => comment.postId === postId);
  
    const postHTML = `
    <a href="/Compass-blog/Post/index.html"  class="arrow-img">
    <img src="/Compass-blog/img/ArrowIcon.svg" alt="arrow">
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
  
  // Renderizando apenas o post 1
  renderPost(1);

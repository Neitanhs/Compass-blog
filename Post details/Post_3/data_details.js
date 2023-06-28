"use strict";
var posts = [
    {
        id: 1,
        title: "Spider-Man: Across the Spider-Verse",
        imageUrl: "/Compass-blog/img/Spider.jpg",
        body: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero."
    },
    {
        id: 2,
        title: "Django Unchained",
        imageUrl: "/Compass-blog/img/Django.jpg",
        body: "Django Unchained is a Quentin Tarantino masterpiece, a gripping blend of Western and revenge thriller. Set in the pre-Civil War era, it follows Django, a freed slave turned bounty hunter, on a mission to rescue his wife from a sadistic plantation owner. With stellar performances and a compelling storyline, it's a must-watch film"
    },
    {
        id: 3,
        title: "Interstellar",
        imageUrl: "/Compass-blog/img/Interstellar.jpg",
        body: "Interstellar is a mind-bending sci-fi epic directed by Christopher Nolan. It explores a near-future Earth facing an agricultural crisis and follows a group of astronauts who embark on a daring mission through a wormhole to find a new habitable planet. With stunning visuals and an emotionally charged narrative, it takes audiences on an awe-inspiring journey through space and time."
    },
    {
        id: 4,
        title: "Spirited Away",
        imageUrl: "/Compass-blog/img/Chihiro.webp",
        body: "Spirited Away is a captivating Japanese animated film by Hayao Miyazaki. It tells the enchanting story of Chihiro, a young girl who stumbles upon a magical world inhabited by spirits and creatures. Through her bravery and resilience, Chihiro must navigate this realm to save her parents and find her way back home. With breathtaking animation and a profound exploration of identity and courage, Spirited Away is a timeless masterpiece that captures the imagination of both children and adults alike."
    },
    {
        id: 5,
        title: "The Matrix",
        imageUrl: "/Compass-blog/img/Matrix.jpg",
        body: "The Matrix is a groundbreaking science fiction film directed by the Wachowskis. It introduces us to a dystopian world where humans are unknowingly trapped in a simulated reality controlled by machines. Neo, a computer hacker, becomes the chosen one who fights to free humanity. With mind-bending visuals and philosophical themes, The Matrix redefined the sci-fi genre."
    },
    {
        id: 6,
        title: "Pulp Fiction",
        imageUrl: "/Compass-blog/img/pulp fiction.png",
        body: "Pulp Fiction is a Quentin Tarantino cult classic, known for its nonlinear storytelling and gritty dialogue. The film weaves interconnected stories of hitmen, boxers, and mobsters in Los Angeles. With a stellar ensemble cast and Tarantino's signature style, Pulp Fiction is an edgy and unforgettable cinematic experience."
    },
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
    },
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
  renderPost(3);

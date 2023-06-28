const { posts, comments } = require('./data.js');



function renderPosts() {
  const postsContainer = document.getElementById('posts-container');
  let postHTML = '';

  posts.forEach((post) => {
    // Filtrar os comentários apenas para o post atual
    const postComments = comments.filter((comment) => comment.postId === post.id);

    // Criar o HTML do post
    postHTML += `
      <div class="post">
        <h2>${post.title}</h2>
        <img src="${post.imageUrl}" alt="${post.title}" />
        <p>${post.body}</p>
        <h3>Comments:</h3>
        <ul>
          ${postComments.map((comment) => `<li>${comment.body} - ${comment.email}</li>`).join('')}
        </ul>
      </div>
    `;
  });

  postsContainer.innerHTML = postHTML;
}

renderPosts();
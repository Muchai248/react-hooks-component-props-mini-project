import React from "react";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <ArticleList key={index} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </main>
  );
}

export default ArticleList;

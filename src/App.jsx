import React from "react";
import blog from "./data/blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

console.log(blog);

function App() {
  return (
    <div className="App">
      <Header name={blog.name} />

    <About
    image={blog.image}
    about={blog.about}
    />
    
    <ArticleList posts={blog.posts} />  

    </div>
  );
}

export default App;
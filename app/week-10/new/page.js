"use client";

import { addBLogPost } from "../_services/blog_services";

//import { addBlogPost } from "../_services/blog_services.js";
import { useUserAuth } from "../_utils/auth-context.js";

export default function Page() {
  const { user } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get title and content from the form
    // Note: this is not React managed form
    const { title, content } = e.target.elements;

    // add the blog post to the DB
    await addBLogPost({
      title: title.value,
      content: content.value,
    });

    // clear the form
    title.value = "";
    content.value = "";
  };
  if (!user) {
    return null;
  }

  return (
    <main>
      <h1> New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" className="text-black" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            className="text-black"
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </main>
  );
}

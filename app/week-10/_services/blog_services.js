// Import Firestore database
import { db } from "../_utils/firebase";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
  query,
  doc,
  where,
} from "firebase/firestore";

// get one blog post by id
export const getBlogPost = async (id) => {
  // Add validation for the ID parameter
  if (!id) {
    console.error("No ID provided to getBlogPost");
    return {
      id: null,
      title: "Post not found",
      content: "No post ID provided",
    };
  }
  console.log(id);

  try {
    const docRef = doc(db, "blog-posts", id);
    console.log("Document reference:", docRef);
    console.log("Looking for ID:", id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const post = { id: docSnap.id, ...docSnap.data() };
      console.log("Found post:", post);
      return post;
    } else {
      console.log("No document found for ID:", id);
      return { id: null, title: "Post not found", content: "Post not found" };
    }
  } catch (error) {
    console.error("Error in getBlogPost (getting document): ", error);
  }
};

// Fetch all blog posts from Firestore DB
export const getBlogPosts = async () => {
  try {
    const blogPostCollectionRef = collection(db, "blog-posts");
    const blogPostsSnapshot = await getDocs(blogPostCollectionRef);

    /*
        // Example of using a query to filter blog posts. 
        // Suppose we had a field called "published" in your blog posts
        // collection that we wanted to use to filter blog posts
        const blogPostQuery = query (
            blogPostCollectionRef,
            where("published", "==", true)
            );
            const blogPostsSnapshot = await getDocs(blogPostCollectionRef);
        */

    // Question: What is the following code below doing?
    const mappedBlogPosts = blogPostsSnapshot.docs.map((postDoc) => ({
      id: postDoc.id,
      ...postDoc.data(),
    }));
    return mappedBlogPosts;
  } catch (fetchBlogPostsError) {
    console.error("Error in fetchAllBlogPosts: ", fetchBlogPostsError);
  }
};

// add a new blog post to firestore db
export const addBLogPost = async (post) => {
  try {
    const docRef = await addDoc(collection(db, "blog-posts"), post);
    return docRef.id; // Return the ID of the newly created document
  } catch (error) {
    console.error("Error in addBlogPost: ", error);
  }
};

// update a blog post
export const updateBlogPost = async (id, post) => {
  try {
    const docRef = doc(db, "blog-posts", id);
    await setDoc(docRef, post);
  } catch (error) {
    console.error("Error in updateBlogPost: ", error);
  }
};

//Delete a blog post
export const deleteBlogPost = async (id) => {
  try {
    const docRef = doc(db, "blog-posts", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error in deleteBlogPost: ", error);
  }
};

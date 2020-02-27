import { useState } from "react";
import axios from "axios";

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all blogs from REST API
  async function fetchBlogs() {
    setLoading(true);
    const data = await axios.get(
      "https://ancient-reaches-80096.herokuapp.com/blog/"
    );
    setBlogs(data.data);
    setLoading(false);
  }

  // Toggle blog completed status
  function toggleBlog(id, completed) {
    axios
      .patch(`https://ancient-reaches-80096.herokuapp.com/blog/${id}/`, {
        completed: !completed
      })
      .then(data => fetchBlogs());
  }

  function deleteBlog(id) {
    axios
      .delete(`https://ancient-reaches-80096.herokuapp.com/blog/${id}/`)
      .then(data => fetchBlogs());
  }

  return { blogs, fetchBlogs, toggleBlog, deleteBlog, loading };
}

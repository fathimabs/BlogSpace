import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/axiosInstance";
import { setPosts } from "../redux/postSlice";
import PostList from "../components/ui/PostList";
import toast from 'react-hot-toast'

function Home() {

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts?.posts || []);

  const { user } = useSelector((state) => state.auth || {});


  useEffect(() => {

    const fetchBlogs = async () => {

      try {
        const res = await api.get("/blog/all-blog");

        if (Array.isArray(res.data)) {

          dispatch(setPosts(res.data));

          if (res.data.length === 0) {

            toast("No blogs available ");
          }
        } else {

          dispatch(setPosts([]));
          toast.error("Unexpected response");
        }
      } catch (err) {

        toast.error( err.response?.data?.message || "Failed to fetch blogs");
        dispatch(setPosts([]));
      }
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    <div>
      <section className="text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl mb-4">

          {user ? (
            <>
              Welcome back,{" "}
              <span className="text-blue-600">{user.username}</span>!
            </>
          ) : (
            "Welcome to My Blog"
          )}
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          {user
            ? "Ready to create something new today?"
            : "A space to share stories, ideas and experiences."}
        </p>
      </section>

      <PostList posts={posts} />
    </div>
  );
}

export default Home
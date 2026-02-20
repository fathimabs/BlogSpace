import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PostList from "../components/ui/PostList";

function MyBlog() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth || {});
    const posts = useSelector((state) => state.posts?.posts || []);

   
    const myBlogs = user
        ? posts.filter((post) => post.author?.toString() === user._id.toString())
        : [];

    //  toast shows only once
    const toastShown = useRef(false);

    useEffect(() => {
       
        if (!user) {
            if (!toastShown.current) {
                toastShown.current = true;
                toast.error("Please login to view your posts");
            }
            navigate("/login");
            return;
        }

      
        if (myBlogs.length === 0 && !toastShown.current) {
            toastShown.current = true;
            toast("You haven't created any posts yet!");
        }
    }, [user, myBlogs.length, navigate]);

    return (
        <div>
            <section className="text-center py-16 px-4">
                <h1 className="text-3xl md:text-5xl mb-4">My Blogs</h1>
                {user && (
                    <p className="text-gray-600 mb-8">
                         Welcome, <strong>{user.username}</strong>!
                    </p>
                )}
            </section>

            <PostList posts={myBlogs} showEdit={true} />
        </div>
    );
}

export default MyBlog;
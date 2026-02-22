import { useForm } from "react-hook-form";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";
import { useSelector, useDispatch } from "react-redux";
import api from "../api/axiosInstance";
import toast from "react-hot-toast";
import { updatePosts } from "../redux/postSlice";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function PostDetails() {

// post ID from route

  const { id } = useParams(); 

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);

  const posts = useSelector((state) => state.posts?.posts);

  const postToEdit = posts.find((p) => p._id === id);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // form  filled with existing data

  useEffect(() => {
    if (postToEdit) {
      reset({
        title: postToEdit.title,
        content: postToEdit.content,
      });
    }
  }, [postToEdit, reset]);

  const onSubmit = async (data) => {

    if (!user || !token) {

      toast.error("You must be logged in to edit this post!");
      return;
    }

    // Only allow author to edit

    if (postToEdit?.author !== user._id) {

      toast.error("You can only edit your own posts!");
      return;
    }

    try {
      const res = await api.put(`/blog/update-blog/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(updatePosts(res.data));

      toast.success("Post updated successfully!");

      navigate("/my-post"); // redirect back to home

    } catch (err) {
      console.log("Axios error:", err.response?.data || err.message);

      toast.error(err.response?.data?.message || "Failed to update post");
    }
  };

  if (!postToEdit) return <p className="text-center mt-16">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl mb-8">Edit Post</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input placeholder="Post Title"
            {...register("title", {
              required: "Title is required",
              minLength: { value: 5, message: "Minimum 5 characters" },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <TextArea rows="6"
            placeholder="Write your content..."
            {...register("content", {
              required: "Content is required",
              minLength: { value: 20, message: "Minimum 20 characters" },
            })}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
          )}
        </div>

        <Button type="submit">Update Post</Button>
      </form>
    </div>
  );
}

export default PostDetails
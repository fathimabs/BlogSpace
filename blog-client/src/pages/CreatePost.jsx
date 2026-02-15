import { useForm } from "react-hook-form";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";

function CreatePost() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Post Data:", data);
    alert("Post published successfully!");
    reset(); 
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl mb-8">Create New Post</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

       
        <div>
          <Input
            placeholder="Post Title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 5,
                message: "Minimum 5 characters",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title.message}
            </p>
          )}
        </div>


        <div>
          <TextArea
            rows="6"
            placeholder="Write your content..."
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 20,
                message: "Minimum 20 characters",
              },
            })}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <Button type="submit">
          Publish
        </Button>

      </form>
    </div>
  );
}

export default CreatePost;

import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";


 function CreatePost() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl mb-8">
        Create New Post
      </h1>

      <div className="space-y-4">
        <Input placeholder="Post Title" />
        <TextArea rows="6" placeholder="Write your content..." />
        <Button>Publish</Button>
      </div>
    </div>
  );
}

export default CreatePost
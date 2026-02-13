export default function PostDetails() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl mb-4">
        Blog Post Title
      </h1>

      <img
        src="https://via.placeholder.com/1200x600"
        alt="Post"
        className="w-full rounded mb-6"
      />

      <p className="text-gray-700 leading-relaxed">
        Blog content goes here. This page matches the clean,
        storytelling aesthetic of the Wix template.
      </p>
    </div>
  );
}

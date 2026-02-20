import PostCard from "./PostCard";


function PostList({ posts, showEdit = false }) {

  if (!Array.isArray(posts) || posts.length === 0) {

    return (
      <p className="text-center text-gray-500 mt-8">
        No posts yet.
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16">

      {posts.map((post) =>
        post ? (
          <PostCard key={post._id || Math.random()} post={post} showEdit={showEdit} />
        ) : null
      )}

    </div>
  );
}

export default PostList
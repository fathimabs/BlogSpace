import PostCard from "./PostCard";

export default function PostList() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16">
      <PostCard />
      <PostCard />
      <PostCard />
     
    </div>
  );
}

import PostList from "../components/ui/PostList";

function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          A space to share stories , ideas and experience
        </p>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
       
        <div className="mt-6 text-center">
          <h2 className="text-2xl mb-2">
            Featured Blog Title
          </h2>
          <p className="text-gray-600">
            A short introduction to the featured article.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <PostList />

    </div>
  );
}

export default Home
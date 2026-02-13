

function PostCard() {

    return (

        <div className="bg-white rounded shadow-sm hover:shadow-md transition">

            <div className="p-4">
                <h3 className="text-lg mb-2">
                    Blog Post Title
                </h3>
                <p className="text-sm text-gray-600">
                    A small preview text for this blog post.
                </p>
            </div>
        </div>
    )

}

export default PostCard
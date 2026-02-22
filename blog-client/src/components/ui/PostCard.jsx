import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function PostCard({ post, showEdit = false }) {

    const { user } = useSelector((state) => state.auth);

    if (!post ) return null;

    const { _id, title, content, author } = post;

    return (
        <div className="bg-white rounded shadow-sm hover:shadow-md transition p-4">
            <h3 className="text-lg font-semibold mb-2">
                {title || "Untitled Post"}
            </h3>

            <p className="text-sm text-gray-600 line-clamp-3">
                {content || "No content available"}
            </p>

            {showEdit && user?._id === author && _id && (
                
                <Link to={`/edit-post/${_id}`} className="text-blue-500 mt-3 inline-block">
                    Edit
                </Link>

            )}

        </div>
    );
}

export default PostCard;
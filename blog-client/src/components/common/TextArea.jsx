
function TextArea({ className = "", ...props }) {
    
    return (
        <textarea
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none 
      focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        />
    )
}
export default TextArea
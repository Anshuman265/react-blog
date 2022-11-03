const BlogList = (props) => {
    return (  
        <div className="blog-list">
            <h2>{props.title}</h2>
            {props.blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>Written by:- {blog.author}</p>
                    <button onClick={() => props.handleDelete(blog.id)}> Delete Blog </button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
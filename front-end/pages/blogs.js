export default function Page({ blogs }) {
    return (
        <div>
            <div className="header">
                <a href="/createBlog">Create blog</a> 
            </div>
            <div className="blogs">
                {blogs.map((blog, idx) =>  {
                    return (
                    <div className="article">
                        <h1  key={idx}>{blog.title}</h1>
                        <p key={idx}>Author: {blog.author}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    let blogs = [];
    const data = await fetch("http://localhost:3000/api/blogs", 
    {
        method: "POST"
    }).then((res) => { 
            return res.json();  
    }).then((data) => {
            console.log("data", data);
            blogs = data.blogs;
    });    
    
    return {
        props: {
            blogs
        }

    }
}
  
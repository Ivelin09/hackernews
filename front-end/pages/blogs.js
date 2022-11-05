import Link from "next/link";
import Head from 'next/head';

export default function Page({ blogs }) {
    return (
        <div>
            <Head>
            <link rel="stylesheet" href="/blogs.css"></link>
            </Head>
            <div className="header">
                <a href="/createBlog">Create blog</a> 
            </div>
            <div className="blogs">
                {blogs.map((blog, idx) =>  {
                    return (
                    <div className="article" key={idx}>
                        <Link href={`/blog/post?id=${blog.id}`}>{blog.title}</Link>
                        <p >Author: {blog.author}</p>
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
    console.log(blogs);
    
    return {
        props: {
            blogs
        }

    }
}
  
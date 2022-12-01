import Link from "next/link";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Alert, Button, Collapse } from '@mui/material';
import { useState } from 'react';
import { style } from "@mui/system";

export default function Page({ blogs }) {
    const router = useRouter();
    const isSuccess = router.query.success;
    const [open, setOpen] = useState(true);
    

    return (
        <div>
            <Head>
            <link rel="stylesheet" href="/blogs.css"></link>
            </Head>
            {isSuccess && (<div>       <Collapse in={open}>
                <Alert onClose={() => {setOpen(false)}} alignItems="center">Logged in successfuly</Alert>
                </Collapse> </div>)
            }
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
  j
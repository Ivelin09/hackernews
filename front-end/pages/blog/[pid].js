import { useRouter } from 'next/router';
import Head from 'next/head';

const Post = ({ blog }) => {
  const router = useRouter()
  const { pid, id} = router.query

  return (
    <div>
      <Head>
        <link href="/viewBlog.css" rel="stylesheet"/>
      </Head>
      <div className="container">
        <h1>{blog.title}</h1>
        <div className="description">
          <p>{blog.description}</p>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  console.log(id);

  const response = await fetch("http://localhost:3000/api/blog", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({blogId: id})
  }).then((res) => res.json());

  const blog = response.message;

  return {
    props: {
      blog
    }
  }
}

export default Post

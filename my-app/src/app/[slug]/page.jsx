
import data from "../components/data.json"

export default function page({ params }) {
  const blogId = parseInt(params.slug); 
  const blogData = data[blogId - 1];

  return (
    <div className='justify-center items-center h-screen'>
      <h1><strong>{blogData.title}</strong></h1>
      <p>{blogData.description}</p>
      <br></br>
      <p>by {blogData.author}</p>
      <br></br>
     
    </div>
  )
}

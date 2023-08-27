import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Blog(props) {
  let url = "http://127.0.0.1:8000/api/";
  const blogObj = {
    get: "get/blog",
  }

  const [loader, setLoader] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const fetchBlog = async (url) => {
    try {
      const res = await fetch(url + blogObj.get);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      console.log(data);
      setBlogData(data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBlog(url);
  }, []);
  return (
    <div>
  {loader ? (
    <h3>Loading...</h3>
  ) : (
    <div className='mt-3'>
      <div>
        <img src={require('./../assests/gifs/blogs.gif')} alt="" className='rounded mx-auto d-block img-fluid w-75 ' />
      </div>
      <div className='row row-cols-1 row-cols-md-3 g-4 me-0 ms-1 mt-5 pb-5'>
        {blogData && blogData.map((blogs, index) => (
          <div key={index} className=''>
            <div className="">
              <div className="card h-100 border-0">
                {/* Set a fixed size for the image */}
                <img
                  src={blogs.img}
                  alt={blogs.title}
                  className="card-img-top"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">
                    <Link to="" className="text-decoration-none">{blogs.title}</Link>
                  </h5>
                  <br /><br />
                  <small className="text-muted fst-italic">Rheem {new Date(blogs.created_at).toISOString().split('T')[0]}</small>
                  <p className="card-text text-black-50 fw-semibold mt-5">{blogs.des}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

  )
}
export default Blog


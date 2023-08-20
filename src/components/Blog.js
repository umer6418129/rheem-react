import React from 'react'
import { Link } from 'react-router-dom'
import blogs from '../objects/blog.json'

function Blog(props) {
  return (
    <div className='mt-3'>
      <div>
        <img src={require('./../assests/gifs/blogs.gif')} alt="" className='rounded mx-auto d-block img-fluid w-75 ' />
      </div>
      <div className='row row-cols-1 row-cols-md-3 g-4 me-0 ms-1 mt-5 pb-5'>
        {
          blogs.map(blogs => {
            return (
              <div className=''>
                <div className="">
                  <div className="card h-100 border-0">
                    <img src={blogs.img} alt={blogs.title} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title text-dark"><Link to=""
                        className="text-decoration-none">{blogs.title}</Link></h5><br /><br />
                      <small className="text-muted fst-italic">{blogs.createBy}{blogs.createAt}</small>
                      <p className="card-text text-black-50 fw-semibold mt-5">{blogs.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Blog


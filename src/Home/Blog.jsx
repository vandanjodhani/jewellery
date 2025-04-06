import React from 'react'

const Blog = () => {
  return (
    <>
      <div className="blog-outer">
        <div className="container">
          <div className="blog-inner">

            <div className="blog-head">
              <h3>From Our Blog</h3>
              <p>There are latest blog posts</p>
            </div>
            <div className="inner-blogs">
              <div className="blogs">
                <div className="blog-spac">
                  <div className="blog-img">
                    <img src="assets/image/blog1.jpg" alt="Blog" />
                  </div>
                  <div className="blog-info">
                    <div className="blog-rel-date">By <a href="#">admin</a> / April 25, 2018</div>
                    <h3><a href="#">Quisque egestas</a></h3>
                  </div>
                </div>
              </div>
              <div className="blogs">
                <div className="blog-spac">
                  <div className="blog-img">
                    <img src="assets/image/blog2.jpg" alt="Blog" />
                  </div>
                  <div className="blog-info">
                    <div className="blog-rel-date">By <a href="#">admin</a> / April 24, 2018</div>
                    <h3><a href="#">Post with Gallery</a></h3>
                  </div>
                </div>
              </div>
              <div className="blogs">
                <div className="blog-spac">
                  <div className="blog-img">
                    <img src="assets/image/blog3.jpg" alt="Blog" />
                  </div>
                  <div className="blog-info">
                    <div className="blog-rel-date">By <a href="#">admin</a> / April 24, 2018</div>
                    <h3><a href="#">Maecenas ultricies</a></h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Blog

import React from 'react';
import './blog.css';
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'
import Blogui from '../../containers/blogui/Blogui';


const Blog = () => {
  return (
   <div className="blog section__margin" id="case">
     <div className="blog-heading">
       <h1 className="gradient-text">A lot is happening, We are blogging about it.</h1>
     </div>
     <div className="blog-img">
       <div className="blog-img-sec1">
         <Blogui imgUrl={blog1} head="GPT-3 and Open AI is the future. Let us expolre how it is?" date="Sep 26, 2021" />
       </div>
       <div className="blog-img-sec2">
         <Blogui imgUrl={blog2} head="GPT-3 and Open AI is the future. Let us expolre how it is?" date="Sep 26, 2021" />
         <Blogui imgUrl={blog3} head="GPT-3 and Open AI is the future. Let us expolre how it is?" date="Sep 26, 2021"/>
         <Blogui imgUrl={blog4} head="GPT-3 and Open AI is the future. Let us expolre how it is?" date="Sep 26, 2021"/>
         <Blogui imgUrl={blog5} head="GPT-3 and Open AI is the future. Let us expolre how it is?" date="Sep 26, 2021" />
       </div>
     </div>
   </div>
  )
}

export default Blog
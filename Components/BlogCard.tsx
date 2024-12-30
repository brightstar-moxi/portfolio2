import React from 'react'

interface Props{
    image:string;
    title:string;
    comment:string;
    date:string;
}

const BlogCard = ({image, title, comment, date}:Props) => {
  return (
    <div>BlogCard</div>
  )
}

export default BlogCard
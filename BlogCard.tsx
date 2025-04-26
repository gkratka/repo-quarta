import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-gray-500 ml-2">{post.date}</span>
        </div>
        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>By {post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
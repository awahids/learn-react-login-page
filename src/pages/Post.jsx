import { posts } from '../data';
import { useLocation } from 'react-router';

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const post = posts.find(post => post.id.toString() === path);
  
  console.log(location);
  return (
    <div className="post">
      <img src={post.img} alt="" className="post-img" />
      <h1 className="post-title">{post.title}</h1>
      <p className='post-desc'>{post.desc}</p>
      <p className="post-long-desc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
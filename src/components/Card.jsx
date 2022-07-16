import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">
          {post.title}
        </span>
        <img src={post.img} alt="" srcset="" />
        <p className="desc">
          {post.desc}
        </p>
        <button className="card-btn">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default Card;
const Card = ({ post }) => {
  return (
    <div className="card">
      <span className="title">
        {post.title}
      </span>
      <img src={post.img} alt="" srcset="" />
      <p className="desc">
        {post.desc}
      </p>
      <button className="cardBtn">
        Read More
      </button>
    </div>
  );
}

export default Card;
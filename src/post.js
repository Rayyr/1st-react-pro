import "./post.css";

export default function Post(obj) {
  let title=obj.title;
  let body=obj.body;
  
  return (
    
  <div className="post">
    <h3 className="title">{title}</h3>
    <hr></hr>
    <p className="body">{body}</p>
  </div>);
}

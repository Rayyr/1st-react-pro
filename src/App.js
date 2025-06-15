import "./App.css";
import Header from "./header.js";
import Post from "./post.js";
import Button from "./button.js";

let first_title=`20
        اكاديمية ترميز`;

let btn1_content={title:"جديدة",icon:"💫💫💫",img:null};
let btn2_content={title:"الاكثر قراءة",icon:null,img:"./assets/watch.png"};
let btn3_content={title:"مقالات مميزة" , icon:null,img:null};
 
function App() {
  return (
    <>
      <Header></Header>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Post title={first_title} body="اكاديمية لتعليم البرمجة"></Post>
          <Post title="Hello world" body="hello world article"></Post>
          <Post title="post3" body="body of post 3"></Post>
          
        </div>

        <div
          className="buttons"
          style={{
            border: "3px solid rgb(0,128,128)",
            marginTop: "-250px",
            textAlign: "center",
          }}
        >
          <Button obj={btn1_content}></Button>
          <Button obj={btn2_content}></Button>
          <Button obj={btn3_content}></Button>

        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./header.js";
import Post from "./post.js";
import Button from "./button.js";

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
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>

        <div
          className="buttons"
          style={{
            border: "3px solid rgb(0,128,128)",
            marginTop: "-250px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "15px",
              paddingLeft: "70px",
              paddingRight: "70px",
              marginTop: "15px",
            }}
          >
            <Button />
            <Button />
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "15px",
              paddingLeft: "70px",
              paddingRight: "70px",
            }}
          >
            <Button />
            <Button />
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "15px",
              paddingLeft: "70px",
              paddingRight: "70px",
            }}
          >
            <Button />
            <Button />
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "15px",
              paddingLeft: "70px",
              paddingRight: "70px",
            }}
          >
            <Button />
            <Button />
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "15px",
              paddingLeft: "70px",
              paddingRight: "70px",
            }}
          >
            <Button />
            <Button />
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "15px",
              paddingLeft: "70px",
              paddingRight: "70px",
            }}
          >
            <Button />
            <Button />
          </div>

          <div style={{marginBottom:'20px'}}> 
            <Button />
          </div>


        </div>
      </div>
    </>
  );
}

export default App;

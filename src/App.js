import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import tonyImage from "./s.png";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const firstName = "Slim";

// Local CSS for card

  const cardStyle = {
    backgroundColor: "#f0f8ff",
    border: "groove",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "450px",
    margin: "20px auto",
  };

  const cardBodyStyle = {
    padding: "15px",
    textAlign: "center",
  };

  const greetingStyle = {
    marginTop: "50px",
    color: "black",
    fontWeight: "bold",
  };

  const imageStyle = {
    borderRadius: "10px 10px 0 0",
  };

  return (
    <div className="App">
      {/* profile picture and name */}

      <div style={{ textAlign: "center" }}>
        <h5 style={greetingStyle}>Hello, {firstName ? firstName : "there"}!</h5>
        {firstName && (
          <img
            src={tonyImage}
            alt="Profile"
            style={{
              marginTop: "20px",
              marginBottom: "50px",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "2px",
        }}
      >

        {/* Card of product */}

        <div className="card" style={cardStyle}>
          <Image style={imageStyle} />
          <div className="card-body" style={cardBodyStyle}>
            <Name />
            <Price />
            <Description />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

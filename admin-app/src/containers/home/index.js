import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout/";

/**
* @author
* @function Home

**/

const Home = (props) => {
  return (
    <Layout>
      <Jumbotron
        style={{ margin: "5rem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to Petstreet !!</h1>

        <p>
          <div>
            <Button variant="primary">Post</Button>
          </div>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English
        </p>
      </Jumbotron>
    </Layout>
  );
};

export default Home;
import React, { useEffect, useState } from "react";
import { Button, Jumbotron, Card, CardGroup, CardDeck } from "react-bootstrap";
import Layout from "../../components/Layout/";
import AdCard from "../../components/AdCard/index";
import axios from "../../helpers/axios";
/**
* @author
* @function Home

**/

const Home = (props) => {
  const [usedata, setusedata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("/")
        .then((res) => {
          setusedata(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchdata();
  }, []);
  if (usedata.length > 0) {
    return (
      <Layout>
        {console.log(usedata)}

        <Jumbotron
          id="jum"
          style={{ margin: "5rem", background: "#fff" }}
          className="text-center"
        >
          <h1>Welcome to Petstreet !!</h1>

          <div>
            <Button variant="primary" href="/create">
              Post
            </Button>
            <div className="mx-auto">
              <CardDeck id="cd" style={{}}>
                {usedata.map((val) => {
                  return (
                    <AdCard
                      petPhoto={val.petPhoto}
                      petType={val.petType}
                      breed={val.breed}
                      age={val.age}
                      city={val.city}
                    />
                  );
                })}
              </CardDeck>
            </div>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </Jumbotron>
      </Layout>
    );
  } else {
    return null;
  }
};

export default Home;

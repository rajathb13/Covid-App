import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import CosmicSky from "../assets/CosmicSky.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${CosmicSky}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    overflow: hidden,
    height: 200px;
    postion: realtive;
    z-index: -2;
  }

  .overlay {
    background-color: white;
    opacity: 0.6;
    position: absolute;
    overflow: hidden,
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo" >
      <div className="overlay"></div>
      <Container>
        <h1>Covid-19 Dashboard</h1>
        <p>Providing Real-Time data of covid cases</p>
      </Container>
    </Jumbo>
  </Styles>
);

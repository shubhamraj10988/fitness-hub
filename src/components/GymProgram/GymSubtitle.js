/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const GymSubtitle = () => (
  <p css={styles}>
    Fitness-Hub  is a large room with equipment for exercising the body and increasing strength or a club where you can go to exercise and keep fit.{" "}
    <br />
    A gym is a gymnasium, also known as health club and fitness centre. 
  </p>
);

const styles = css`
  color: #7a7a7a;
  font-size: 15px;
  line-height: 1.7;
  @media (max-width: 700px) {
    padding: 0 40px;
    br {
      display: none;
    }
  }
`;

export default GymSubtitle;

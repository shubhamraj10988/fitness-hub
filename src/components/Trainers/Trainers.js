/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";
import TrainerTwoBg from "../Image/trainerTwo.jpg";
import TrainerThreeBg from "../Image/trainerThree.jpg";
import Aerobics from "../Image/Aerobics.jpg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
    As a fitness professional, our primary responsibilities include instruction, education, and personal training in health and fitness.{" "}
      <br />
      You can work as a personal trainer, group fitness instructor, health and wellness professional, and more.
    </p>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Shubham Raj"
        desc="Strength training may enhance your quality of life and improve your ability to do everyday activities. It can also protect your joints from injury."
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Muscle Trainer"
        name="Akhil Rawat"
        desc="
        Resistance training increases strength by making your muscles work against a weight or force. A beginner needs to train two or three times per week to gain the maximum benefit."
        img={TrainerTwoBg}
      />
      <TrainerCard
        title="Power Trainer"
        class="Power"
        name="Vicky Kumar"
        desc="Power-Plate is a machine that gives the body's muscles a high-speed workout by using vibrations to stimulate them to contract and relax."
        img={TrainerThreeBg}
      />
      <TrainerCard
        title="Aerobics Training"
        name="Priya Chatterjee"
        desc="
        We teach people of all ages and fitness levels various maneuvers in aerobic exercise. One goal of aerobic training is to enhance sports performance and to improve training response."
        img={Aerobics}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }

  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    column-gap:20px;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;

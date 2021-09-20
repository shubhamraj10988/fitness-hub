/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Once you’re warmed up and fully prepared, it’s time to train. If you’re unsure of how to start at the gym, we’ve got you covered."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="BodyWeight Training: Things like squats and push-ups are simple ways to get your muscles used to working against resistance."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Gym classes are sessions led by a professional trainer who will take you through a fixed set of exercises. They’re done in groups."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc=" Nothing is more frustrating than getting half-way through your session before finding the next set of dumbbells is missing."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="
        Most people tend to focus on one type of exercise or activity and think they're doing enough. Important: endurance, strength, balance, and flexibility."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;

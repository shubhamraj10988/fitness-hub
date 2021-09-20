/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="First Training Class"
        info="If you’re feeling self-conscious on your first gym visit, your initial instinct might be to skip straight to the treadmill or weight machine and ‘prove your worth,’ but this is a rookie mistake. One of the most important parts of a good workout is to properly warm up.

        Warm-ups are crucial as they prepare your body for the demands of exercise, loosening up the muscles and reducing the risk of injury. This also means you’re less likely to pull a muscle during your workout and minimizes the chances of lactic acid building-up, which can lead to cramping."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Second Training Class"
        info="Once you’re warmed up and fully prepared, it’s time to train. But where do you begin? If you’re unsure of how to start at the gym, we’ve got you covered.

        Good workouts aren’t improvised: they’re meticulously planned ahead of time. Those people who seem to glide from treadmill to tricep press are actually following a well-kept schedule, tailor-made to get the most out of each session.
        
        So what’s the secret to mapping out a workout that works for you? It’s understanding what each piece of gym equipment is designed to do — and how it can help you reach your goals
        HIIT cardio circuit. ...
        Stretch and cool-down."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Third Training Class"
        info="TREADMILL — A running machine that can provide a great workout to improve your cardiovascular strength. You can adjust incline and pace depending on what type of workout you’re looking for.
        ELLIPTICAL CROSS TRAINER — A dual-action trainer that works both your upper and lower body in tandem. Provides a low-impact way of exercising your hamstrings, quads, glutes, chest, back, triceps and biceps.
        ROWING MACHINE — Simulates the movements of a rower’s body, swapping the water and oars for a handle and chain. A fantastic full-body workout that puts emphasis on your core and melts away fat.
        EXERCISE BIKE — A sit-down cardio machine that works all of your leg muscles. You can increase resistance to strengthen and tone your legs.
        STAIR CLIMBER (OR ‘STEPPER’) — Like a treadmill, only with steps! Provides a workout that's easy on your joints but still works every muscle in your legs."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Fourth Training Class"
        info="BEST FOR: Building strength and mass; muscle toning. The first time you pick up free weights, start at the bottom and work your way up. If you’re training with a barbell, try doing a few reps using just the bar. You’ll be surprised by how heavy they are. If you’re feeling self-conscious, know that experienced deadlifters still warm up by using the bar on its own, so you won’t be the only one."
       
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;

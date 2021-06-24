import React from "react";

import WordingContainer from "./WordingContainer";
import Wording from "./Wording";
import States from "./States";
import H2 from "./H2";

function GetInsight() {
  return (
    <WordingContainer>
      <Wording>
        {" "}
        <h1>
          Get <span>Insight</span> that help your business grows.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <States>
          <H2>
            <h2>10K+</h2>
            <p>COMPANIES</p>
          </H2>{" "}
          <H2>
            <h2>314</h2>
            <p>TEMPLATES</p>
          </H2>{" "}
          <H2>
            <h2>12M+</h2>
            <p>QUARIES</p>
          </H2>
        </States>
      </Wording>
    </WordingContainer>
  );
}

export default GetInsight;

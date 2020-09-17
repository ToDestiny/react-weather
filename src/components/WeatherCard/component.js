import React from "react";
import styled from "@emotion/styled";

import Location from "components/WeatherCard/Location";
import Condition from "components/WeatherCard/Condition";
import Icon from "components/WeatherCard/Icon";

const WeatherCard = props => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (props.temp > 12) {
    // Hot weather mechanics
    highColor = (1 - (props.temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (props.temp <= 12) {
    // Cold weather mechanics
    highColor = (1 - (props.temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }
  console.log(lowColor);
  console.log(highColor);
  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;

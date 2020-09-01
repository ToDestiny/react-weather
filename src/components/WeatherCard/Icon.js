import React from "react";
import MostlyCloudy from "img/Mostly Cloudy-2x.png";
import styled from "@emotion/styled";

const Icon = props => {
  const Icon = styled.img`width: 40%;`;

  return <Icon className="icon" src={MostlyCloudy} alt="Weather Icon" />;
};

export default Icon;

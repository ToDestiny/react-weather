import React from "react";

import Clouds from "img/Mostly Cloudy-2x.png";
import Clear from "img/Mostly Sunny-2x.png";
import Haze from "img/Haze-2x.png";
import Hail from "img/Hail-2x.png";
import Fog from "img/Fog-2x.png";
import Tornado from "img/Tornado-2x.png";
import Dust from "img/Dust-2x.png";
import Mist from "img/Fog-2x.png";
import Snow from "img/Snow-2x.png";
import Rain from "img/Rain-2x.png";
import Drizzle from "img/Drizzle-2x.png";
import Thunderstorm from "img/Thunderstorm-2x.png";

import styled from "@emotion/styled";

const Icon = props => {
  const Icon = styled.img`width: 40%;`;

  let icon = "";
  switch (props.condition) {
    case "Clouds":
      return <Icon src={Clouds} alt="Weather Icon" />;
      break;
    case "Clear":
      return <Icon src={Clear} alt="Weather Icon" />;
      break;
    case "Haze":
      return <Icon src={Haze} alt="Weather Icon" />;
      break;
    case "Hail":
      return <Icon src={Hail} alt="Weather Icon" />;
      break;
    case "Fog":
      return <Icon src={Mist} alt="Weather Icon" />;
      break;
    case "Tornado":
      return <Icon src={Tornado} alt="Weather Icon" />;
      break;
    case "Dust":
      return <Icon src={Dust} alt="Weather Icon" />;
      break;
    case "Mist":
      return <Icon src={Mist} alt="Weather Icon" />;
      break;
    case "Snow":
      return <Icon src={Snow} alt="Weather Icon" />;
      break;
    case "Rain":
      return <Icon src={Rain} alt="Weather Icon" />;
      break;
    case "Drizzle":
      return <Icon src={Drizzle} alt="Weather Icon" />;
      break;
    case "Thunderstorm":
      return <Icon src={Thunderstorm} alt="Weather Icon" />;
      break;
    default:
      return <Icon src={Mist} alt="Weather Icon" />;
      break;
  }
};

export default Icon;

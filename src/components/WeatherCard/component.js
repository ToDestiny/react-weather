import React from 'react';
import styled from '@emotion/styled';

import Location from "components/WeatherCard/Location"
import Condition from "components/WeatherCard/Condition"
import Icon from "components/WeatherCard/Icon"

const WeatherCard = (props) => {

	const Card = styled.div`
		margin: 0 auto;
		background: linear-gradient(to bottom, blue, lightblue);
		width: 200px;
		height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;
	`

	return ( 
			<Card>
				<Location />
				<Icon />
				<Condition />
			</Card>
	);
}

export default WeatherCard;
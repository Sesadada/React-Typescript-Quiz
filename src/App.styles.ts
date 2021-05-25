import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/stars.jpg';

export const GlobalStyle = createGlobalStyle`
html{
  height: 100%;
}
body {
  background-image: url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center
}
*{
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		text-align: center;
		color: blue;
	}
	.score {
		color: white;
		font-size: 2rem;
		margin: 0;
	}
	h1 {
		font-family: 'Montserrat', sans-serif;
		font-size: 70px;
		color: white;
		margin-bottom: 1rem;
	}
	button {
		border: none;
		border-radius: 10px;
		padding: 0.5rem 1rem;
		margin-bottom: 0.4rem;
		color: blue;
		text-align: center;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
	}
	button:hover {
		background-color: blue;
		color: white;
		font-weight: bold;
		letter-spacing: 4px;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	}
	.start,
	.next {
		cursor: pointer;
		background-color: white;
		color: black;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
	}
	.start {
		max-width: 200px;
	}

	.next {
		margin-top: 1rem;
	}
`;

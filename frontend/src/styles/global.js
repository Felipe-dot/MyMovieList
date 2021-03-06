import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #313D3E;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  margin: 0;
}

body, button, input{
  font-size: 1rem;
}

button{ 
  cursor: pointer;
}

.root {
    display: flex;
    flex-direction: column;
}

header {
    background-color: #151819;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
}

.search {
    border-radius: 30px;
    margin-top: 18px;
    margin-bottom: 17px;
    margin-right: 1rem;
    width: 370px;
    font-family: inherit;
    font-size: 1.2rem;
    border: none;
    color: #ffffff;
    background-color: #313D3E;
    padding: 0.5rem 1.5rem;
}

.search:focus {
    outline: none;
}

header img {
    width: 140px;
    height: 70px;
    margin-right: 1rem;
}

header a {
    
    text-decoration: none;
    border-radius: 30px;
    margin-top: 18px;
    margin-bottom: 17px;
    width: inherit;
    font-family: inherit;
    font-size: 1.2rem;
    border: none;
    color: #ffffff;
    background-color: #313D3E;
    padding: 0.5rem 1.5rem;
}

header h1 {
    
    text-decoration: none;
    margin-top: 18px;
    margin-bottom: 17px;
    width: inherit;
    font-family: inherit;
    font-size: 1.2rem;
    color: #D9AE52;
    padding: 0.5rem 1.5rem;
}

.movie-container {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}

.movie {
    position: relative;
    border-radius: 1rem;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #151819;
    margin: 30px;
    width: 270px;
}

.movie img {
    object-fit: cover;
    height: 400px;
    width: 100%;
}

.movie-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

.movie-info h3 {
    margin: 0;
}

.movie-overview {
    background-color: #151819;
    max-height: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(102%);
    transition: transform 0.5s ease-in-out;
}

.movie:hover .movie-overview {
    transform: translateY(0%);
}

.tag {
    background-color: #313D3E;
    font-weight: bold;
    border-radius: 3px;
    padding: 0.5rem;
}

.tag.green {
    color: green
}
.tag.orange {
    color: orange;
}
.tag.red {
    color: red;
}

`;

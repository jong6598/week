import React from "react";
import styled from "styled-components";
import { Route, Switch, useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import Detail from "./Detail";
import Mon from "./Mon";
import Tue from "./Tue";
import Wed from "./Wed";
import Thu from "./Thu";
import Fri from "./Fri";
import Sat from "./Sat";
import Sun from "./Sun";



function App() {

    const [list, setList] = React.useState(["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"]);
    const text = React.useRef(null);

    const addStarRating = () => { 
        setList([...list, text.current.value]); 
    }
    console.log("list :" + list);

    const random_stars = [];
    for (let i = 0; i < 7; i++) {
      random_stars.push(Math.floor(Math.random() * 5) + 1);
    }
    const getAverage = (
      random_stars.reduce((cur, acc) => (cur += acc)) / 7
    ).toFixed(2);

    const [average, updateAverage] = React.useState(getAverage);

    return (
        <div className="App">
            <Container>
                <Title>내 일주일은?</Title>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <StarRating list={list} />
                        )} 
                    />
                    <Route path="/detail" component={Detail} />
                    <Route path="/mon" component={Detail}>
                    </Route>
                    <Route path="/tue" component={Detail}>
                    </Route>
                    <Route path="/wen" component={Detail}>
                    </Route>
                    <Route path="/thu" component={Detail}>
                    </Route>
                    <Route path="/fri" component={Detail}>
                    </Route>
                    <Route path="/sat" component={Detail}>
                    </Route>
                    <Route path="/sun" component={Detail}>
                    </Route>
                    <StarRating />
                </Switch>
                <Average>
                        평균 
                        <span>{average}</span>
                      <button
                        onClick={() => {
                          updateAverage(0);
                        }}
                      >
                        Reset
                      </button>
                      </Average>
            </Container>
        </div>
        
    );
}

const Container = styled.div`
max-width: 350px;
min-height: 85vh;
background: white;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h3`
color:black; 
text-align: center;
`;

const Average = styled.div`
  flex-direction: column;
	display: flex;
	font-size: 40px;
	color: black;
	font-weight: bold;
	padding-top: 40px;
	align-items: center;
	justify-content: center;

	button {
		border: 1px solid #ddd;
		color: white;
		padding: 5px 15px;
		font-size: 20px;
		border-radius: 2px;
		background: blue;
		margin-left: 10px;
		cursor: pointer;
	}
`;

export default App;
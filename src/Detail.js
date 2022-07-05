import React from "react";
import { FaDribbble } from "react-icons/fa";
import { Route, useHistory } from "react-router-dom";

const colors = {
    orange: "purple",
    grey: "gray"
}

const Detail = (props) => { //부모 컴포넌트에게 받아온 데이터
    let history = useHistory(); //usehistory 훅을 history에 저장
    console.log("history.location.pathname :" + history.location.pathname)
    let day = "" //빈 값을 day에 저장
    if (history.location.pathname === "/MON") { //history.location.pathname이 Mon페이지와 일치하면 "월요일"을 day에 저장
        day = "월요일"
    } else if (history.location.pathname === "/TUE") {
        day = "화요일"
    } else if (history.location.pathname === "/WED") {
        day = "수요일"
    } else if (history.location.pathname === "/THU") {
        day = "목요일"
    } else if (history.location.pathname === "/FRI") {
        day = "금요일"
    } else if (history.location.pathname === "/SAT") {
        day = "토요일"
    } else if (history.location.pathname === "/SUN") {
        day = "일요일"
    }

    const stars = Array(5).fill(0); //아이콘 5개 배열을 stars에 저장
    console.log("stars :" + stars)
    const [currentValue, setCurrentValue] = React.useState(0); //currentValue 설정하고 default value를 0로 설정
    const [hoverValue, setHoverValue] = React.useState(undefined); //hoverValue 설정하고 default value를 undefined로 설정


    // 이벤트 체인지 시 적용될 3가지 function 설정
    const handleClick = value => { //handleClick function 설정. 클릭 시 새로운 값으로 현재 value 값 설정
        setCurrentValue(value)
    };

    const handleMouseOver = value => { //마우스오버 시 새로운 값으로 현재 value 값 설정
        setHoverValue(value)
    }

    const handleMouseLeave = () => { //마우스를 떼면 value를 reset해줌
        setHoverValue(undefined)
    }

    return (
        <div style={styles.container}>
            <h3 style={{ color: "#E065CB" }}>{day} 평점 남기기</h3>
            {/* //10번째줄 참고 */}
            <div style={styles.stars}>
                {stars.map((_, index) => { //31번에서 설정한 stars 아이콘 갯수(5)개 만큼 반복하며 뱉어냄, key properties는 index에 설정
                    return (
                        <FaDribbble
                            key={index}
                            size={30}
                            style={{
                                marginRight: 10,
                                cursor: "pointer" 
                            }}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            onClick={() => handleClick(index + 1)} 
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>

            <button style={styles.button}
                onClick={() => {
                    history.push("/"); 
                }}
            >
                평점 남기기
            </button>
            <Route path="/" exact> </Route>
            <Route path="./mon" exact> </Route>
            <Route path="/App">
            </Route>
        </div>
    );
};



const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    button: {
        borderRadius: 5,
        borderColor: "white",
        width: 200,
        padding: 10,
        margin: 10,
        background: "purple",
        color: "white"
    }
}

export default Detail;
import React from "react";
import styled from "styled-components";
import { FaDribbble } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useHistory } from "react-router-dom";


const colors = {
    purple: "purple",
    grey: "gray"
}


const StarRating = (props) => { 
    let history = useHistory();
    console.log("props :" + props);
    const my_lists = props.list; 

    console.log("my_lists :" + my_lists)


    return (
        <ListStyle>
            {my_lists.map((list, index) => {
                const random = Math.floor(Math.random() * 5 ) + 1;
                console.log("random :" + random)
                return (
                    <div key={index}>
                        <ItemStyle
                            className="list_item" //해당 div(이름 list_item)안에 컴포넌트 넣어주고 넘겨줄 것들 명시
                            key={index}
                            onClick={() => {
                                history.push(`/${list}`); //각 인덱스 값 클릭 시 각 요일페이지 템플릿 리터럴로 연결
                            }}
                        >
                            {list}
                            {[...Array(5)].map((_, index) => { //스마일 아이콘 갯수(5)개 만큼 반복하며 뱉어냄
                                return <label key={index}>
                                    <FaDribbble 
                                        key={index}
                                        size={30}
                                        style={{
                                            marginRight: 3,
                                        }}
                                        color={(random) > index ? colors.purple : colors.grey}
                                    />
                                </label>
                            })}
                            <GoStyle>
                                <label><FaPlay className="click" size={30} style={{
                                            marginRight: 3,
                                            cursor: "pointer"
                                        }} 
                             /></label>
                            </GoStyle>
                        </ItemStyle>
                    </div>
                );
            })}
        </ListStyle>
    );
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div`
padding: 14px;
margin: 3px;
font-weight: bold;
color: black;
display: flex;
justify-content: space-around;
`;

const GoStyle = styled.div`
display: flex;
justify-content: space-around;
color: purple;
`;

export default StarRating;




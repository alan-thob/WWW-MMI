import '../css/parcours.css';
import {useState} from "react";
import axios from "axios";
// import ./test.json as test
import data from "./data.jsx";

export default function Parcours() {
    const [image, setImage] = useState("../assets/img/parcours/question1-2.png");
    const [question, setQuestion] = useState("question1");

    const redirect = (e) => {
       return  axios.get('http://localhost:3001/result').then(r => {
            console.log(r.data);

            window.location.replace('/result/' + r.data);
        })
    }

    return (
        <>
            {
                data[question].choices[0].next_question[0] === "end" ? (
                    <>
                        {redirect()}
                    </>
                ) : (
                    <>
                        <div className="navbar">
                            <div className="logo">
                                <a href="/"><img src="../assets/img/header/logo.svg" alt="Logo"/></a>
                            </div>
                        </div>

                        <div className="image-parcours">
                            <img src={data[question].image} useMap="#image-map"/>
                            <map name="image-map">
                                {
                                    data[question].choices[0].path.map((path, index) => {
                                        console.log(data[question].choices[0])
                                        return (<div   style={{
                                            // add style to div hover to change cursor
                                            cursor: 'pointer'
                                        }}       key={index} onClick={function (e) {
                                            let valueToIncrement = data[question].choices[0].value[index];
                                            // axios request to increment value
                                            axios.get('http://localhost:3001/' + valueToIncrement + '/increment')
                                                .then((response) => {
                                                    console.log(response.data);
                                                });
                                            // change the state of question and image
                                            let nextQuestion = data[question].choices[0].next_question[index];
                                            setQuestion(nextQuestion);
                                        }}>
                                            <area target={data[question].choices[0].value[index]} alt="" title="" coords={path} shape="rect"/>
                                        </div>)
                                    })
                                }
                            </map>
                        </div>
                    </>
                )
            }
        </>
    )
}
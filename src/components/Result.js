import React from 'react';
import { myAnsw } from '../myAnsw';
import '../styles/Result.css'

const URL = process.env.PUBLIC_URL + "/images/"

class Result extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            result: "",
            you: "", 
            descrip: "",
            effect: "", 
            image: ""
        }
    }

    componentDidMount(){
        const { e,s,t,j } = this.props.points
        let merge = ""

        merge += e > 0 ? "e":"i";
        merge += s > 0 ? "s":"n";
        merge += t > 0 ? "t":"f";
        merge += j > 0 ? "j":"p";

        const resultArr = myAnsw.filter((ans) => ans.mbti === merge)

        console.log("RESULT : ", resultArr)
        this.setState({
            result: merge,
            you: resultArr[0].you, 
            descrip :resultArr[0].descrip, 
            effect: resultArr[0].effect,
            image: resultArr[0].image
        })
        
    }

    render(){
        return <div className="result">
            {this.state.image && <img style={{ width:300, height:180}} src={URL+ this.state.image} alt="TEA" /> }
            <p className="character">{this.state.result}</p>
            <p className="you">{this.props.userName} <br /><br /> 
            <span className="user_type">가장 잘 어울리는 차는</span>  {this.state.you} !</p>
            <div className="type"><p>성격특징</p>{this.state.descrip}</div>
            <div className="effect"><p>효능</p>{this.state.effect}</div>
            <button onClick={this.props.resetName}>다시하기</button>
        </div>
    }
}

export default Result;
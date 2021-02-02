import React from 'react';
import { myAnsw } from '../myAnsw';
import '../styles/Result.css'


class Result extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            result: "",
            you: "", 
            descrip: "",
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
            you: resultArr[0].you, descrip :resultArr[0].descrip,
        })
        
    }

    render(){
        return <div className="result">
            <img />
            <p className="character">{this.state.result}</p>
            <p className="you">{this.props.userName} <br /><br /> {this.state.you}</p>
            <div className="type">{this.state.descrip}</div>
        </div>
    }
}

export default Result;
import React, { Component } from 'react'
import { Login, Register } from '../components/login/index'
import './loginStyle.scss'
import fender from "../components/images/fender.png"
import fenderFlip from "../components/images/fender180.png"

export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true
        };
    }

    changeState() {
        const { isLogginActive } = this.state;
        if (isLogginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        }
        else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }

        this.setState((prevState) => ({ isLogginActive: !prevState.isLogginActive }));
    }

    render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "Login" : "Register";

        return (
            <div className="main">
                <div className="imageFend">
                    <img src={fender} alt="fender" />
                </div>
                <div className="imageFendFlip">
                    <img src={fenderFlip} alt="fenderFlip" />
                </div>

                <div className="Log">
                    <div className="container" ref={ref => (this.container = ref)}>
                        {isLogginActive && (<Login containerRef={ref => (this.current = ref)} />)}
                        {!isLogginActive && (<Register containerRef={ref => (this.current = ref)} />)}
                    </div>
                    <RightSide current={current} currentActive={currentActive} containerRef={ref => (this.rightSide = ref)} onClick={this.changeState.bind(this)} />
                </div>
            </div>
        )
    }
}

const RightSide = props => {
    return (
        <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
            <div className="inner-container">
                <div className="text">
                    {props.current}
                </div>
            </div>
        </div>
    )
}
export default login;

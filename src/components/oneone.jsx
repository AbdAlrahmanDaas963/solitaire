import React, { Component } from 'react';
import frontImg from '../img/deadpool.png'
import backImg from '../img/Frame2.jpg'
let rotateA = null;
let rotateB = null;
let elemA = "";
let elemB = "";
let imgA = "";
let imgB = "";
let canRotate = 0;
//var nowImg = document.getElementById("cardImg");
class Oneone extends Component {
    state = { 
        nowImg : document.getElementById("cardImg")
    }
    doRotate = (element) => {
        document.getElementById(element).style.transform = "rotateY(90deg)";
        setTimeout( () => {
            let nnn = document.getElementById("cardImg");
            nnn.setAttribute("src",backImg);
            //nowImg = backImg;
            //nowImg.setAttribute("src",backImg);
            console.log(this.state.nowImg);
            document.getElementById(element).style.transform = "rotateY(180deg)";
        },500)
        
    }
    dontRotate = (element) => {
        document.getElementById(element).style.transform = "rotateY(90deg)";
        setTimeout( () => {
            let nnn = document.getElementById("cardImg");
            nnn.setAttribute("src",frontImg);
            //nowImg = frontImg;
            //nowImg.setAttribute("src",frontImg);
            console.log(this.state.nowImg);
            document.getElementById(element).style.transform = "rotateY(0deg)";
        },500)
        
    }
    flip = () => {
        console.log(canRotate);
        if(rotateA === null){
            rotateA = this.props.name;
            elemA = this.props.number;
            imgA = this.props.imgS;
            }
        else {
            rotateB = this.props.name;
            elemB = this.props.number;
            imgB = this.props.imgS;
            }

        if (canRotate === 2 && ! document.getElementById(this.props.number).style.transform === "rotateY(180deg)") {
            
        }
        else {
            
            if (canRotate === 1){
                this.doRotate(elemB);
                canRotate++;
                setTimeout( () => {
                    if(rotateA === rotateB){
                        this.doRotate(elemA); 
                        this.doRotate(elemB);
                        console.log("equal");
                    }else{
                        this.dontRotate(elemA);
                        this.dontRotate(elemB);
                        console.log("not equal");
                    }
                    canRotate=0;
                    elemB=elemA="";
                    rotateA=rotateB=null;
                },1500)
                
            }else{
            this.doRotate(elemA);
            canRotate++;
            }
            
        }

    }
    render() { 
        return ( <div className="one" onClick={ this.flip } >
            <img id="cardImg"   alt="" width="100%" height="100%" />
            <h1>card  {this.props.name}</h1>
        </div> );
    }
}
export default Oneone;
import React, { Component } from 'react';


let rotateA = null;
let rotateB = null;
let elemA = "";
let elemB = "";
let canRotate = 0;
let x="";
let y="";
class Oneone extends Component {
    state = {   }
    flip = () => {
        console.log(canRotate);
        if(rotateA === null){rotateA = this.props.name; elemA = this.props.number}
        else {rotateB = this.props.name; elemB = this.props.number}

        if (canRotate === 2 && ! document.getElementById(this.props.number).style.transform === "rotateY(180deg)") {
            
        }
        else {
            
            if (canRotate === 1){
                document.getElementById(elemB).style.transform = "rotateY(180deg)";
                canRotate++;
                setTimeout( () => {
                    if(rotateA === rotateB){
                        document.getElementById(elemA).style.transform = "rotateY(180deg)";
                        document.getElementById(elemB).style.transform = "rotateY(180deg)";    
                        console.log("equal");
                    }else{
                        document.getElementById(elemA).style.transform = "rotateY(0deg)";
                        document.getElementById(elemB).style.transform = "rotateY(0deg)";
                        console.log("not equal");
                    }
                    canRotate=0;
                    elemB=elemA="";
                    rotateA=rotateB=null;
                },1000)
                
            }else{
            document.getElementById(elemA).style.transform = "rotateY(180deg)";
            canRotate++;
            }
            
        }


        // console.log(this.props.number); 
        // let num = this.props.number;
        // //document.getElementsByClassName("one").style.marginTop = "0px";
        // document.getElementById(this.props.number).style.transform = "rotateY(180deg)";
        // console.log(document.getElementById(this.props.number).style.transform);
    }
    render() { 
        return ( <div onClick={ this.flip } >
            <img   alt=""/>
            <h1  className="one">card  {this.props.name}</h1>
        </div> );
    }
}

export default Oneone;


    //if (bool){
    //     rotate = "90deg"; 
    //     setTimeout(function(){ pic=img; console.log("img1"); rotate="180deg"; this.setState({rotate:"rotateY("+rotate+")"})}, 600);
    //     bool=false;
    // }
    // else{
    //     rotate = "-90deg"; 
    //     setTimeout(function(){ pic=img2; console.log("img2"); rotate="0deg";}, 500);
    //     bool=true ;
    // }
    // this.setState(
    //     {
    //         rotate : "rotateY("+rotate+")",
    //         Imag : pic
    //     }
    //     );
    // console.log(this.state.Imag);

    //secound
    // if (bool) {
            
    //     pic=img2;
    //     console.log(this.props.rotate); //"90deg";
    //     setTimeout(()=>{
    //         console.log(this.props.rotate); //"180deg";
    //         console.log("timer true");
    //     },2000);
    //     bool = false;
    // }
    // else {
        

    //     pic=img;
    //     console.log(this.props.rotate); // = "90deg";
    //     setTimeout(()=>{
    //         console.log(this.props.rotate); //= "0deg";
    //         console.log("timer false");
    //     },2000);
    //     bool = true;
    // }
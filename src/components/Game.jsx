import Oneone from './oneone';
import React, { Component } from 'react';
let numm = ["0","n1","n2","n3","n4","n5","n6","n7","n8","n9","n10","n11","n12","n13","n14","n15","n16"];
let nam = ["0","name1","name2","name3","name4","name5","name6","name7","name8"]
class Game extends Component {
    state = { 
        
    }
    
    
    render() { 
        
        return ( 
            <div>
                <Demo/>
                <div className="All row">
                <div className="col-3"><div id={numm[1]} className={numm[1]," card"}><Oneone rotate={false}  name={nam[1]} number={numm[1]}/></div>
                                        <div id={numm[2]} className={numm[2]," card"}><Oneone rotate={false} name={nam[2]} number={numm[2]}/></div>
                                        <div id={numm[3]} className={numm[3]," card"}><Oneone rotate={false} name={nam[3]} number={numm[3]}/></div>
                                        <div id={numm[4]} className={numm[4]," card"}><Oneone rotate={false} name={nam[4]} number={numm[4]}/></div>
                                        </div>
                <div className="col-3"><div id={numm[5]} className={numm[5]," card"}><Oneone rotate={false} name={nam[5]} number={numm[5]}/></div>
                                        <div id={numm[6]} className={numm[6]," card"}><Oneone rotate={false} name={nam[6]} number={numm[6]}/></div>
                                        <div id={numm[7]} className={numm[7]," card"}><Oneone rotate={false} name={nam[7]} number={numm[7]}/></div>
                                        <div id={numm[8]} className={numm[8]," card"}><Oneone rotate={false} name={nam[8]} number={numm[8]}/></div>
                                        </div>
                <div className="col-3"><div id={numm[9]} className={numm[9]," card"}><Oneone rotate={false} name={nam[1]} number={numm[9]}/></div>
                                        <div id={numm[10]} className={numm[10]," card"}><Oneone rotate={false} name={nam[2]} number={numm[10]}/></div>
                                        <div id={numm[11]} className={numm[11]," card"}><Oneone rotate={false} name={nam[3]} number={numm[11]}/></div>
                                        <div id={numm[12]} className={numm[12]," card"}><Oneone rotate={false} name={nam[4]} number={numm[12]}/></div>
                                        </div>
                <div className="col-3"><div id={numm[13]} className={numm[13]," card"}><Oneone rotate={false} name={nam[5]} number={numm[13]}/></div>
                                        <div id={numm[14]} className={numm[14]," card"}><Oneone rotate={false} name={nam[6]} number={numm[14]}/></div>
                                        <div id={numm[15]} className={numm[15]," card"}><Oneone rotate={false} name={nam[7]} number={numm[15]}/></div>
                                        <div id={numm[16]} className={numm[16]," card"}><Oneone rotate={false} name={nam[8]} number={numm[16]}/></div>
                                        </div>
                </div>
            </div>
        );
    }
}
class Demo extends Component {
    state = {  }
    change = () => {
        console.log(numm[5]);
        //document.querySelector("."+numm[5]).style.backgroundColor = "blue";
        //document.getElementsByClassName(numm[5]).style.backgroundColor = "blue";
        document.getElementById(numm[11]).style.backgroundColor = "blue";
    }
    render() { 
        return ( <div>
            <button onClick={this.change}>demo</button>
            <h1 className="ddemo">demo</h1>
        </div> );
    }
}

//export default Demo;
export default Game;
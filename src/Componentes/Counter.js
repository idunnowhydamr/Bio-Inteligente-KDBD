import React from 'react';

class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            number : this.
            props.num
        }
    }
   /*  state = {
        number: 10
    } */
    counterUp = () => {
        this.setState({
            number: this.
            state.number + 1
        })
    }
    counterDown = () => {
        this.setState({
            number: this.
            state.number - 1
        })
    }
    
    render(){
        return(
            <>
            <h1>Mi contador</h1>
            <button onClick= {this.counterUp}>Incrementar</button> {" "}
            <button onClick= {this.counterDown}>Decrementar</button>
        <h3>{this.state.number}</h3>
            
            </>
        );
    }
}

export default Counter
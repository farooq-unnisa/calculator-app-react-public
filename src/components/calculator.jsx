import React, {Component} from 'react';
import './styles.css';
class Calculator extends Component {
    state = {
        previousOperand: "",
        currentOperand: "",
        operand: null
    } 
    //-----------------------------------------AC operation-----------------------------------------
    resetCalculator=() => {
        this.setState({previousOperand: this.state.previousOperand = ""});
        this.setState({currentOperand: this.state.currentOperand = ""});
        this.setState({operand: this.state.operand = ""});
    };
    //-----------------------------------------delete operation-----------------------------------------
    deleteFunction=() => {
        this.setState({currentOperand: this.state.currentOperand = Math.floor(this.state.currentOperand / 10)});
    };
    //-----------------------------------------numbers-----------------------------------------
    numberFunction=(number) => {
        this.setState({currentOperand: this.state.currentOperand= this.state.currentOperand+number});  
    };
    //-----------------------------------------operators-----------------------------------------
    operationFunction=(operand)=>{
        //cases for % percentage operand
        if(operand === '%' ){
            //case 1:
            //prev: 
            //curr: 15
            //click on %
            //or
            //prev: 12 
            //curr: 
            if((this.state.currentOperand !== '' && this.state.previousOperand ==='') 
                || (this.state.currentOperand === '' && this.state.previousOperand !=='')){
                this.setState({currentOperand: (+this.state.currentOperand)/100});
                this.setState({operand: this.state.operand = ""});
            }
            if(this.state.currentOperand !== '' && this.state.previousOperand !=='' && this.state.operand !== ''){
                this.setState({currentOperand: (+this.state.currentOperand)* (+this.state.previousOperand)/100});
            }
        }
        //prev: 12 +
        //curr: 3
        //click on = (from here case 1 applies)
        //case 1: need to work on this
        //prev: 15
        //curr:
        else if(this.state.previousOperand !== "" && this.state.currentOperand === ''){
            this.setState({operand: this.state.operand = operand});
            this.setState({previousOperand: this.state.previousOperand});
        }
        //case 2: 
        //say previousOperand is not assigned yet but, we have currentOperand
        //prev: 
        //curr: 12
        //clicked on +
        else if(this.state.currentOperand !== '' && this.state.previousOperand ===''){
            this.setState({previousOperand: this.state.currentOperand});
            this.setState({currentOperand: this.state.currentOperand = ""});
            this.setState({operand: this.state.operand = operand});
            //o/p
            //prev: 12 +
            //curr: 
        }
        //case 3: (see case 2)
        //prev: 12 +
        //curr: 2
        //click on -
        else if(this.state.currentOperand !== '' && this.state.previousOperand !=='' && this.state.operand !==''){
            this.equalsFunctionCallFrmOthrFunc();
            this.setState({operand: this.state.operand = operand});
            //o/p
            //prev: 14 -
            //curr: 
        }
        //case 4: works
        //prev: 15
        //curr: 3
        //click on + -> here case 4 applies
        else if(this.state.currentOperand !== '' && this.state.previousOperand !=='' && operand !==''){
            this.setState({previousOperand: this.state.currentOperand});
            this.setState({currentOperand: this.state.currentOperand = ""});
            this.setState({operand});
            //o/p 
            //prev: 3 +
            //curr: 
        }
    }
    //-----------------------------------------dot-----------------------------------------
    dotFunction=() => {
        this.setState({currentOperand: this.state.currentOperand+= '.'});
    }
    //-----------------------------------------equals-----------------------------------------
    equalsFunctionCallFrmOthrFunc() {
        if(this.state.operand === '%'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) % (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) % (+this.state.currentOperand)});
        }
        else if(this.state.operand === '*'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) * (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) * (+this.state.currentOperand)});
        }
        else if(this.state.operand === '/'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) / (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) / (+this.state.currentOperand)});
        }
        else if(this.state.operand === '-'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) - (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) - (+this.state.currentOperand)});
        }
        else if(this.state.operand === '+'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) + (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) + (+this.state.currentOperand)});
        }
        this.setState({currentOperand: this.state.currentOperand = ""});
    }
    equalsFunction = ()=>{
        if(this.state.operand === '%'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) % (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) % (+this.state.currentOperand)});
        }
        else if(this.state.operand === '*'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) * (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) * (+this.state.currentOperand)});
        }
        else if(this.state.operand === '/'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) / (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) / (+this.state.currentOperand)});
        }
        else if(this.state.operand === '-'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) - (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) - (+this.state.currentOperand)});
        }
        else if(this.state.operand === '+'){
            // this.setState({previousOperand: (Math.round(((+this.state.previousOperand)+ Number.EPSILON)* 1000000)/1000000) + (Math.round(((+this.state.currentOperand)+ Number.EPSILON)* 1000000)/1000000) });
            this.setState({previousOperand: (+this.state.previousOperand) + (+this.state.currentOperand)});
        }
        this.setState({currentOperand: this.state.currentOperand = ""});
        this.setState({operand: this.state.operand = ""});
    }
    //-----------------------------------------render-----------------------------------------
    render() { 
        return (
        <div className = 'calculator-grid'>
            <div className='output'>
                <div className='previous-operand'>{this.state.previousOperand} {this.state.operand}</div>
                <div className='current-operand'>{this.state.currentOperand}</div>
            </div>
            {/* line 1 */}
            <button onClick={this.resetCalculator}>AC</button>
            <button onClick={this.deleteFunction}>DEL</button>
            <button onClick={()=> this.operationFunction("%")}>%</button> 
            <button onClick={()=> this.operationFunction("/")}>/</button>
            {/* line 2 */}
            <button onClick={()=> this.numberFunction(7)}>7</button>
            <button onClick={()=> this.numberFunction(8)}>8</button>
            <button onClick={()=> this.numberFunction(9)}>9</button>
            <button onClick={()=> this.operationFunction("*")}>x</button>
            {/* line 3 */}
            <button onClick={()=> this.numberFunction(4)}>4</button>
            <button onClick={()=> this.numberFunction(5)}>5</button>
            <button onClick={()=> this.numberFunction(6)}>6</button>
            <button onClick={()=> this.operationFunction("-")}>-</button>
            {/* line 4 */}
            <button onClick={()=> this.numberFunction(1)}>1</button>
            <button onClick={()=> this.numberFunction(2)}>2</button>
            <button onClick={()=> this.numberFunction(3)}>3</button>
            <button onClick={()=> this.operationFunction("+")}>+</button>
            {/* line 5 */}
            <button onClick={()=> this.numberFunction(0)} className='span-two'>0</button>
            <button onClick={this.dotFunction}>.</button>
            <button onClick={this.equalsFunction}>=</button>
        </div>
    );
    }
}
 
export default Calculator;
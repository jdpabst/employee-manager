import React, { Component } from 'react';

class EmployeeEditor extends Component {
    constructor() {
        super();
        this.state = {
            employee: null,
            originalEmployee: null,
            notModified: true
        }
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentWillReceiveProps(props){
        this.setState({
            employee: Object.assign({}, props.selected), 
            originalEmployee: props.selected
        })
    }

    handleChange(prop, val){
        if(this.state.notModified){
            this.setState({ notModified: false });
        }

        var employeeCopy = Object.assign({}, this.state.employee);
        employeeCopy[prop] = val;
        this.setState({
            employee: employeeCopy
        })
    }

    render(){
        return (
            <div className="infoCard">
                {this.state.employee
                ?
                <div>
                    <span id="employeeID"> ID: {this.state.employee.id } </span>
                    <p id="employeeTitle"> {this.state.originalEmployee.name} </p>
                    <br />
                    <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={this.save}>SAVE</button>
                    <button className="neutralButton" disabled={this.state.notModified} onClick={this.cancel}>CANCEL</button>
                    <br />
                    <span className="placeholderText">NAME</span>
                    <input className="materialInput" value={this.state.employee.name} onChange={ (e) => {this.handleChange('name', e.target.value) } }></input>
                    <span className="placeholderText">PHONE NUMBER</span>
                    <input className="materialInput" value={this.state.employee.phone} onChane={ (e) =>}
                }
            </div>
        )
    }
}
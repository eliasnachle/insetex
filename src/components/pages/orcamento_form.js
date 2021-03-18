import React, { Component }         from 'react';
import StepDados                    from './stepDados';
import StepDetails                  from './stepDetails';
import StepConclusion               from './stepConclusion';


export class OrcamentoForm extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        password: '',
        facebook: '',
        twitter: '',
        github: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { name, email, phone, password, facebook, twitter, github } = this.state;
        const values = { name, email, phone, password, facebook, twitter, github };

        switch (step) {
            case 1:
                return (                    
                    <StepDados 
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}                    
                    />
                );
            case 2:
                return(
                    <StepDetails
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}  
                    />
                );
            case 3:
                return(
                    <StepConclusion
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}  
                    />
                );                
        }
    }
}
export default OrcamentoForm
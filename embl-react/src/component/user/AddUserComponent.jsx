import React, { Component  } from 'react';
import { Input,Form, FormGroup, Col, Label, Button } from 'reactstrap';
import ApiService from "../../service/ApiService";

class AddUserComponent extends Component{
   
    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            age: '',
            favColor: '',
            hobbies:[],
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {favColor: this.state.favColor, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, hobbies: this.state.hobbies.split(',')};
        
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                console.log(this.state.message);
                this.props.history.push('/users');
            });
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <Form>
                <FormGroup row>
                    <Label sm={2} >First Name:</Label>
                    <Col sm={5}>
                        <Input placeholder="Enter First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} >Last Name:</Label>
                    <Col sm={5}>
                        <Input placeholder="Enter Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                <Label sm={2} >Age:</Label>
                    <Col sm={5}>
                        <Input type="number" placeholder="Enter Age" name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label sm={2} for="exampleEmail">Hobbies:</Label>
                    <Col sm={5}>
                    <Input type="name" name="hobbies" placeholder="Enter Hobbies E.g-Swimming, Reading" onChange={this.onChange} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} >Favorite Color:</Label>
                    <Col sm={5}>
                    <Input placeholder="Enter Fav Color" name="favColor" className="form-control" value={this.state.favColor} onChange={this.onChange}/>
                    </Col>
                </FormGroup>
               <Button className="btn btn-success" onClick={this.saveUser}>Save</Button>
            </Form>
    </div>
        );
    }
}

export default AddUserComponent;
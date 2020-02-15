import React, { Component } from 'react';
import { Input,Form, FormGroup, Col, Label, Button } from 'reactstrap';
import ApiService from "../../service/ApiService";

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            hobbies:[],
            favColor: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                hobbies:user.hobbies,
                favColor: user.favColor,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id,firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, favColor: this.state.favColor};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit User</h2>
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
                  

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </Form>
            </div>
        );
    }
}

export default EditUserComponent;
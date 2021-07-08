import { Header } from "../header/header";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { createMessage } from '../../actions/contact';
import {useSelector} from 'react-redux';



const Contact = () => {

    const [postMessages, setPostMessage] = useState({ name: '', email: '', message: '' });
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createMessage(postMessages));
          
    }

    function refreshPage() {
		window.location.reload(false);
	}
        return (
            <div>
                <Header />
                <div style={{ paddingTop: '50px', paddingBottom: '50px', paddingRight: '200px', paddingLeft: '200px', textAlign: '-webkit-center', width: '100%' }}>
                    <Form className="contactWrapper" autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <h1 style={{ color: 'black' }}>Contact Us</h1>
                        <FormGroup>
                            <Label for="Name">Name</Label>
                            <Input
                                type="name"
                                name="name"
                                id="name"
                                value={postMessages.name}
                                onChange={(e) => 
                                    setPostMessage({
                                        ...postMessages, name:e.target.value
                                    })}
                                placeholder="Whats your name?" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={postMessages.email}
                                onChange={(e) => 
                                    setPostMessage({
                                        ...postMessages, email:e.target.value
                                    })}
                                placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input
                                type="textarea"
                                name="text"
                                id="exampleText"
                                value={postMessages.message}
                                onChange={(e) => 
                                    setPostMessage({
                                        ...postMessages, message:e.target.value
                                    })}
                                placeholder="Your message here" />
                        </FormGroup>
                        <Button onClick={refreshPage} type="submit" style={{ border: 'none', fontFamily: 'Oswald, sans-serif', marginTop: '25px', width: '50%', backgroundColor: '#FFB0B0' }}>Submit</Button>

                    </Form>
                </div>
            </div >
        )
    }


export default Contact;


import React from 'react';
import { FormGroup, Button, Label } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { baseUrl } from '../utils/utils';
export default function CreatePage() {
    const navigate = useNavigate()

    return (
        <div className="form">
            <h1>Create Racer</h1>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    email: '',
                    urlPhoto: '',
                    coordinateY: '',
                    coordinateX: '',
                    teamId: '',
                    countWins: '',
                }}
                onSubmit={async (values, actions) => {
                    if (values) {
                        axios.post(`${baseUrl}/users`,
                            values,
                        )
                            .then(() => {
                                navigate('/cards')
                            })
                        // actions.resetForm()
                    }
                }}
            >
                <Form>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Field
                            id="name"
                            name="name"
                            required
                            placeholder="Name"
                            className="form-control"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="surname">Surname</Label>
                        <Field
                            id="surname"
                            name="surname"
                            required
                            placeholder="surname"
                            className="form-control"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Field
                            id="email"
                            name="email"
                            required
                            placeholder="email"
                            className="form-control"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="urlPhoto">Image Link</Label>
                        <Field
                            className='form-control'
                            id="urlPhoto"
                            name="urlPhoto"
                            required
                            placeholder="urlPhoto"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="coordinateY">Birth place coordinate Y</Label>
                        <Field
                            className='form-control'
                            id="coordinateY"
                            name="coordinateY"
                            required
                            placeholder="43"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="coordinateX">Birth place coordinate X</Label>
                        <Field
                            className='form-control'
                            id="coordinateX"
                            name="coordinateX"
                            required
                            placeholder="23"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="countWins">Count of wins</Label>
                        <Field
                            id="countWins"
                            name="countWins"
                            placeholder="5"
                            className="form-control"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="teamId">teamId</Label>
                        <Field
                            className='form-control'
                            id="teamId"
                            name="teamId"
                            required
                            placeholder="699"
                        />
                    </FormGroup>
                    <Button color="success" type="submit">Create</Button>
                </Form>
            </Formik>
        </div >
    );
}

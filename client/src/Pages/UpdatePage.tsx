import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from "react-router-dom"
import { useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../utils/utils';
import { Button, FormGroup, Label } from 'reactstrap';

export default function UpdatePage() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [defaultValue, setValue] = useState({
        id: '', name: '', email: '', surname: '', coordinateY: 0, coordinateX: 0, urlPhoto: '', countWins: 0
    })
    useEffect(() => {
        axios.get(`${baseUrl}/users/${state}`)
            .then(({ data: { name, email, surname, coordinateX, coordinateY, urlPhoto, id, countWins } }) => {
                setValue({ name, email, surname, coordinateX, coordinateY, urlPhoto, id, countWins })
            })

    }, [state])
    return (
        <>
            <div className="form">
                <h1>Update Racer</h1>
                <Formik
                    enableReinitialize
                    initialValues={{
                        ...defaultValue
                    }}
                    onSubmit={async (values, actions) => {
                        console.log(JSON.stringify(values))
                        axios.patch(`${baseUrl}/users`, values)
                            .then(() => {
                                navigate('/cards')
                                actions.resetForm()
                            })
                    }}
                >
                    <Form>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Field
                                id="name"
                                name="name"
                                placeholder="Jane"
                                className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="surname">Surname</Label>
                            <Field
                                id="surname"
                                name="surname"
                                placeholder="Doe"
                                className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Doe"
                                className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="coordinateX">Birth place coordinate X</Label>
                            <Field
                                id="coordinateX"
                                name="coordinateX"
                                placeholder="3423.234"
                                className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="coordinateX">Birth place coordinate Y</Label>
                            <Field
                                id="coordinateY"
                                name="coordinateY"
                                placeholder="3423.234"
                                className="form-control"
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
                            <Label htmlFor="coordinateX">urlPhoto</Label>
                            <Field
                                id="urlPhoto"
                                name="urlPhoto"
                                placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lauda%2C_Niki_1973-07-06.jpg/268px-Lauda%2C_Niki_1973-07-06.jpg"
                                className="form-control"
                            />
                        </FormGroup>


                        <Button color="light" type="submit">Update</Button>
                    </Form>
                </Formik>

            </div>
        </>
    );
}

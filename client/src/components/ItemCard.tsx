/* eslint-disable no-delete-var */
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardImg } from 'reactstrap'
import { useNavigate } from "react-router-dom"

export interface IPropsCard {
    urlPhoto: string;
    name: string;
    surname: string;
    teamId: number;
    id: number;
    email: string;
    team: {
        id: number
        name: string;
        country: string;
    }
    countWins: number | null;
    deleteCard: (id: number) => void
}


function ItemCard({ urlPhoto, name, surname, teamId, id, deleteCard, email, team, countWins }: IPropsCard): JSX.Element {

    const navigate = useNavigate()

    return (
        <Card

        >
            <CardBody>
                <CardImg
                    top
                    width="100%"
                    alt='Card Image'
                    src={urlPhoto}
                />
                <CardTitle tag="h5">{name} {surname}</CardTitle>
                <CardText>{team.name} ({team.country})</CardText>
                <CardText>Количество побед: {countWins || 0}</CardText>
                <hr />
                <div className="btn_group">
                    <Button color="light" onClick={() => navigate(`/update`, { state: id })} className='update-btn'>Update</Button>
                    <Button color="dark" onClick={() => deleteCard(id)}>Delete</Button>
                </div>

            </CardBody>
        </Card>
    )
}

export default ItemCard;

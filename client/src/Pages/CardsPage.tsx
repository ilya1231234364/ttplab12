import React, { FC, useState, useEffect } from 'react';
import axios from 'axios'

import ItemCard from '../components/ItemCard';
import { baseUrl } from '../utils/utils';
import SelectItem from '../components/SelectItem';
import InputItem from '../components/InputItem';

const CardsPage: FC = (): JSX.Element => {
    const [data, setData] = useState([])
    const [tempValue, setTempValue] = useState('')
    const [selectedId, setSelectedId] = useState(null)
    useEffect(() => {
        axios.get(`${baseUrl}/users`)
            .then(({ data }) => {
                setData(data)
            })
    }, [])
    const filterData = ({ target: { value } }: any) => {
        setTempValue(value)
    }
    const deleteCard = (userId: number) => {
        axios.delete(`${baseUrl}/users/${userId}`)
            .then(() => {
                setData(data.filter(({ id }) => id !== userId))
            })
    }
    const selectItem = (data: any) => {
        console.log(data)
        if (data) {
            setSelectedId(data.value)
        } else {
            setSelectedId(null)
        }
    }
    return (
        <>
            <div className="top__block">
                <SelectItem data={data} selectHandler={selectItem} />
                <InputItem changeHandler={filterData} />
            </div>
            <div className="wrapper">
                <div className="body">
                    {data
                        .filter(({ name }: any) => name.toLowerCase().includes((tempValue.toLowerCase())))
                        .filter(({ id }) => selectedId ? id === selectedId : id)
                        .map(({ id, name, surname, email, teamId, urlPhoto, team, countWins }) =>
                            <ItemCard urlPhoto={urlPhoto} name={name} teamId={teamId} id={id} surname={surname} email={email} deleteCard={deleteCard} team={team} countWins={countWins} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default CardsPage
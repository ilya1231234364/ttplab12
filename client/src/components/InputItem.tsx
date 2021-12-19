import React from 'react';
import { Input } from 'reactstrap';

export default function InputItem({ changeHandler }: any) {
    return (
        <>
            <Input placeholder="Search by name..." onChange={changeHandler} />
        </>
    );
}

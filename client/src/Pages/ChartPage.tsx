import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChartItem from '../components/ChartItem';
import { baseUrl } from '../utils/utils';

export default function ChartPage() {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get(`${baseUrl}/users`)
            .then(({ data }) => {
                setData(data);
            })
    }, [])

    return (
        <div className="chart__block">
            <ChartItem dataSource={data} />
        </div>
    );
}

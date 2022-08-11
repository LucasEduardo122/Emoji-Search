import React, { useState } from "react";
import { useEffect } from "react";
import List from "../../components/list";
import DataJson from '../../service/data.json';
import './index.css';

export default function Home() {

    let [data, setData] = useState([DataJson]);
    let [changeText, setChangeText] = useState(false);
    let [filterData, setFilterData] = useState([]);

    function changeResult2(value) {
        if (value.length == 0) {
            setChangeText(false);
            setFilterData([])
        } else if (value.length > 0) {
            let filter = [];
            filter.push(data[0].filter(item => item.keywords.includes(value)))
            setFilterData(filter)
            setChangeText(true);
        }
    }



    return (
        <div className="initial">
            <div>
                <h1>😺 Emoji Search 😺</h1>
            </div>

            <div className="inputSearch">
                <input type="text" placeholder="Digite aqui" onChange={(e) => changeResult2(e.target.value)} />
            </div>
            {changeText ? <List dados={filterData} /> : <List dados={data} />}
        </div>
    )
}
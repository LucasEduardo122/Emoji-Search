import React from "react";
import './list.css';

export default function List({ dados }) {
    return (
        <div className="wrapper">
            <ul>
                {dados[0].map((element) => (
                    <li className="line-list" key={element.title}>
                        {element.symbol} {element.title}
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

import React from "react";
import './ListTitlePrice.scss';


const ListTitlePrice = (props) => (
    <div className="list_title_price">
        <span className="list_title_num">{props['data-text-num']}</span><span>{props['data-text-title']}</span>
    </div>
);

export {ListTitlePrice};
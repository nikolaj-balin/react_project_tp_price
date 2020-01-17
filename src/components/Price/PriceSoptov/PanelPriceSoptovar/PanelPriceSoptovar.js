import React, {useCallback, useRef} from "react";
import './PanelPriceSoptovar.scss';
import {useDispatch, useSelector} from "react-redux";
import {createSoptovarAction} from "../../../../actions/Actions";

const getDecodeSym = (sym) => {
    const parser = new DOMParser();
    return parser.parseFromString(`<!doctype html><body>${sym}`, 'text/html').body.textContent;
}


const getSoptovarArr = (obj) => {
    let arr = [];
    for(let value in obj) {
        arr.push(obj[value]);
    }
    return arr;
};

const getValuePrice = (price, col) => {

    if(col == 0) {
        return price.toLocaleString("ru-RU",{useGrouping:true});
    } else {
        return (price*col).toLocaleString("ru-RU",{useGrouping:true});
    }
};


const PanelPriceSoptovar = () => {
    const state_ = useSelector(state => {return {...state}});
    const dispatch = useDispatch();
    const dispatch_soptovar = useCallback((e) => {dispatch(createSoptovarAction(e))}, []);

    return (
        <div className='panel_price_soptovar'>
            {getSoptovarArr(state_.data.soptovar).map((value) => (
                <div key={value.name}
                     className="panel_price_soptovar_cols"
                     data-name={value.name}
                     onClick={dispatch_soptovar}
                >
                    <div className="panel_price_soptovar_cols_container"
                         style={{ backgroundImage: `url(${value.img_src})` }}
                         data-src={require('' + value.img_src).dafault}>
                        <div className={"dopopciya_col "  + (state_.selected_value.soptovar[value.name] != 0 ? 'minus' : '')}
                             title="Щелкните для добавления сопутствующего товара">
                                {state_.selected_value.soptovar[value.name] != 0 ? getDecodeSym('&ndash;') : '+'}
                        </div>
                        <div className={"dopopciya_count " + (state_.selected_value.soptovar[value.name] != 0 ? 'show' : '')}>
                            {+state_.selected_value.soptovar[value.name]}
                        </div>
                    </div>
                    <div className="circle_label">{value.label}</div>
                    <div className="circle_price">{getValuePrice(value.price, state_.selected_value.soptovar[value.name])} руб.</div>
                </div>
            ))}
        </div>
    )
};

export {PanelPriceSoptovar};
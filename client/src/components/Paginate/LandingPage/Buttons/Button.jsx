import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {previousPage, changePage, nextPage } from '../../../../redux/actions.js';

export default function Button({name}) {

    const dispatch = useDispatch();
    const {page, countRecipes} = useSelector(state => state);

     const onClickButton = (e) => {

        if (e.target.name === '<') {
            
            return (page === 1)? null : dispatch(previousPage());
            
        }
        else if (e.target.name === '>') {

            return (page === (Math.ceil(countRecipes/9)))? null : dispatch(nextPage());

        }
        else if (page !== parseInt(e.target.name)) {

            return dispatch(changePage(parseInt(e.target.name)));
        }
       
    } 

    return (
        <button name={name} disabled={(page === name)} onClick={onClickButton}>{name}</button>
    )

}
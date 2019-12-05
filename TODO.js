import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import index from '@babel/template';

const list = [
    {
        family: [{
            name: "sara",
            tel: "123456789",
            address: "israel",
            category: "family"
        },
        {
            name: "leah",
            tel: "123456789",
            address: "israel",
            category: "family"
        }]
    },
    {
        work: [{
            name: "rivka",
            tel: "123456789",
            address: "israel",
            category: "work"
        },
        {
            name: "rina",
            tel: "123456789",
            address: "israel",
            category: "work"
        }]
    },
    {
        class: [{
            name: "rachel",
            tel: "123456789",
            address: "israel",
            category: "class"
        },
        {
            name: "bina",
            tel: "123456789",
            address: "israel",
            category: "class"
        }]
    }
];
const Line = (props) => {
    return (
        <div>
            <p>{props.line.name} - {props.line.tel} - {props.line.address} - {props.line.category}</p >
        </div>
            )
}
const App = () => {
                <div>
                    <h1>my list!</h1>
                    list.map(category => category.map(line => <Line key={index} line={line} />, index)
                </div>
            }
import React from "react";
import { ReactDOM } from "react";
import PropTypes from "prop-types";

function Person(props){
    return (
        <div><h2>
        Hi {props.info.title}{props.info.name},{props.info.rol}
        </h2>
        </div>
    )
}


import React from "react";
import Sort from "./Sort";
import CardHolder from "./CardHolder";
import Last from "./Last";

function RightMain(){
    return(
        <div class="right-main">
            <Sort /> 
            <CardHolder user="Made For Atharva" />
            <CardHolder user="Romantic Hits"/>       
            <CardHolder user="Retro Radio"/>       
            <Last />
            </div>
    );
};

export default RightMain;
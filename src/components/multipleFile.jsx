import { useState } from "react";
import "./formInput.css";

const MultipleFileUpload = () =>{
    return(
        <>
        <div className="formInput">
            <input type="file" multiple onChange={onChnage}/>
        </div>
        </>
    )

}
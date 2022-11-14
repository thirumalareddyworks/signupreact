import React, {useState} from "react";

const Image = () => {
const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
      
        return(
            <div className="colo">
            <input type="file" onChange={handleChange} className="imga"/>
            <img src={file}  style={{"width":"100px"}}/>
            </div>
        )
    }
    export default Image;
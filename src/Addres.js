import React, { useState } from 'react';
function Address(){
    const [wordcount,setWordcount]=useState(0)
    return(
        <div>
              <textarea maxLength={50} className="text"
            onChange={(e)=>setWordcount(e.target.value.length)}placeholder='Please Enter Your Address In 50 Characters Only'  ></textarea>
            <p>No of words:{wordcount}/50</p>
        </div>
    )
}
export default Address;
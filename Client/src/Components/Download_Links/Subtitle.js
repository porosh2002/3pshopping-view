import React from 'react'
export default function Subtitle({ Loop, Change}) {
const NewArray= []
for(var i =1 ; i<Loop ;i++){
    NewArray.push(i)
}
const SubFile = () => {

}
    return (
        <>
        {NewArray.map((i) => {
              return <div key={i}>
                <br />
          <p className="uploadTitle">Subtitle Download Links {i} : </p> 
          <textarea
            onChange={Change}
            spellCheck="false"
            className="UploadPageTextArea"
            name={`Subtitle_Link_${i}`}
            required
          ></textarea>
              </div>
        })}
        </>
    )
}

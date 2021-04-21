import React from 'react'
export default function Subtitle({ Loop, Change }) {
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
          <p className="uploadTitle">Subtitle Download Links : </p>
          <textarea
            onChange={Change}
            spellCheck="false"
            className="UploadPageTextArea"
            name="Subtitle_Link"
            required
          ></textarea>
              </div>
        })}
        </>
    )
}

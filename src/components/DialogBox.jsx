import React, { useState } from 'react'

function DialogBox({ selectedContent= 'Open Box', onChange }) {
    const [open, setOpen] = useState(false);
    const content=['Medicine 1', 'Medicine 2', 'Medicine 3'];

    console.log('Selected:', selectedContent)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '2rem 0 2rem 0'}}>
        <dialog open={open} style={{ position: 'absolute', transform: 'translate(10px, -180px)' }}>
        <p>Welcome to Pandora's Box</p>
            {
              content.map((medicine, idx) =>
                <div>
                  <input type="radio" name={"Medicine"} value={medicine} id={idx} onChange={onChange} />
                  <label style={{ paddingLeft: '10px' }}>{medicine}</label>
                </div>)
            }
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
        <button style={{ backgroundColor: 'white', color: 'gray', height: 'unset', width: 'unset', border: '2px dotted rebeccapurple' }} onClick={(e) =>setOpen(prevState => !prevState)}>{selectedContent}</button>
    </div>
  )
}

export default DialogBox
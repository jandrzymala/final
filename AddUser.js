import React, { useState } from 'react';
const AddUser = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
    }
    const handleClick = (e) => {
     setShow(true);
    }
    return (
        <>
        { !show && (
            <>
            <div> 
            <form onSubmit={handleSubmit}>
                <label>Przedstaw się</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type='submit' onClick={handleClick}>Wyślij</button>
            </form></div></>
            )
        }
{show && (<><h2>Witaj {name}</h2><button>Dołącz!</button></>)}
        
        </>
    )}



// import React, { useState } from 'react'

// function AddUser({ addUser }) {
// const [name, setName] = useState('');



// function onSubmit(e) {
// e.preventDefault()

// addUser({
// name,
// totalScore: 0,
// })

// }

// return (
//     <><form onSubmit={onSubmit}>
//     <div>
//     <label>Przedstaw się, aby dołączyć</label>
//     <input
//     type='text'
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     />
//     </div>
//     <button type='submit'>DODAJ</button>
// </form>
// </>
// )
// }

export default AddUser
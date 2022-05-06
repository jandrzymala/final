import React, { useState } from 'react'

function AddUser({ userName, addUser }) {
const [name, setName] = useState('')


function onSubmit(e) {
e.preventDefault()

addUser({
name,
totalScore: 0,
})
}

return (
    <><form onSubmit={onSubmit}>
    <div>
    <label>Przedstaw się, aby dołączyć</label>
    <input
    type='text'
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    </div>
    <button type='submit'>DODAJ</button>
</form>
<h2>Witaj {name}</h2></>

)
}

export default AddUser
import React, { useState, useEffect } from 'react';
import AddUser from '../AddUser/AddUser';
import SingleUser from '../SingleUser/SingleUser';

function UsersManager() {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)

async function addUser(user) {
    let response = await fetch('http://localhost:3000/users');
    let data = await response.json();
    let namesArr = data.map(function(user){return user.name})
    if (namesArr.includes(user.name)) {
        alert('Nazwa użytkownika jest zajęta. Wpisz inną')
    } else {
        fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
        'Content-Type': 'application/json',
        },
        })
        .then((response) => {
        return response.json()
        })
        .then((res) => {
        setData((prevState) => {
        return [...prevState, res]
        })
        })
    }  
}
function removeUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
    }).then(() => {
    setData((prevState) => {
    return prevState.filter((user) => {
    return user.id !== id
    })
    })
    })
    }

useEffect(() => {
fetch('http://localhost:3000/users')
.then((response) => {
return response.json()
})
.then((userData) => {
setData(userData)
setLoading(false)
})
}, [])

if (loading) {
return <div>loading </div>
}
return (
<div>
<AddUser addUser={addUser} />
<ul className='usersList'>
                {data.map((user) => {
                return <SingleUser user={user} key={user.id} removeUser={removeUser}/>
                })}
            </ul>
</div>
)
}

export default UsersManager
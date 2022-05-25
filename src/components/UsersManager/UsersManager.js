import React, { useState, useEffect } from 'react';
import AddUser from '../AddUser/AddUser';
import SingleUser from '../SingleUser/SingleUser';
function UsersManager() {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)

function addUser(user) {
    let name = localStorage.getItem('current-user-name');
    console.log(name);
    if (name===user.name) {
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
                return <SingleUser user={user} key={user.id} />
                })}
            </ul>
</div>
)
}

export default UsersManager
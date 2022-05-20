import React, { useState } from 'react'

function AddUser({ name, addUser }) {
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
<h2>Witaj {name}</h2>
const UsersList = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
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
            <section className='users'>
            <h3>ZAWODNICY</h3>
            <ul className='usersList'>
                {data.map((user) => {
                return <SingleUser user={user} key={user.id} />
                })}
            </ul>
            </section>
        )
}
</>

)
}

export default AddUser
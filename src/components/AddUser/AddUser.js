import React, { useState } from 'react'

<<<<<<< HEAD
function AddUser({ name, addUser }) {
const [name, setName] = useState('')
=======
function AddUser({ addUser }) {
const [name, setName] = useState('');

>>>>>>> 611cd73470754809d73766be3f0c558f83100cb5


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
<<<<<<< HEAD
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

=======
</>
>>>>>>> 611cd73470754809d73766be3f0c558f83100cb5
)
}

export default AddUser
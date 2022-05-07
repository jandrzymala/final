import { useState, useEffect } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import './userslist.scss'

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
export default UsersList
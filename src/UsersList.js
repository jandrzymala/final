import { useState, useEffect } from 'react';
import SingleUser from './SingleUser';
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
            <ul className='usersList'>
                {data.map((user) => {
                return <SingleUser user={user} key={user.id} />
                })}
            </ul>
        )
}
export default UsersList
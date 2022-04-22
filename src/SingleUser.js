import React from 'react'

function SingleUser({user}) {
return (
<li>
<strong>{user.name}</strong>
<span> {user.totalScore} pkt</span>
</li>
)
}

export default SingleUser
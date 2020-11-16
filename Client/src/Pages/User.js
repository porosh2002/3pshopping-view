import React from 'react'
import {AdminContent,UserCard} from '../Styled';
import {Link} from 'react-router-dom'
export default function User() {
    return (
        <AdminContent>
            <UserCard>
                Balance : 0
            </UserCard>
            <UserCard><Link style={{color:"royalblue",textDecoration:"none"}} to=''>Add Balance</Link></UserCard>
            <UserCard> <Link style={{color:"royalblue",textDecoration:"none"}} to=''>Withdraw Balance (min-500 max-20,000)</Link></UserCard>
        </AdminContent>
    )
}

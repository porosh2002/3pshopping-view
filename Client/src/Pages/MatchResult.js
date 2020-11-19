import React from 'react'
import Adminmenu from '../Components/AdminMEnu/AdminMenu'
import Tennis from '../Components/Tennis.Admin/Tennis'
import Football from '../Components/Football.admin/Football'
export default function MatchResult() {
    return (
        <div>
            <Adminmenu />
            <Football />
            <Tennis />
        </div>
    )
}

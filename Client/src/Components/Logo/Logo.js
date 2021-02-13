import React from 'react'
import {Link} from 'react-router-dom'
import {GiFilmProjector} from 'react-icons/gi'
function Logo() {
    return (
        <Link className="LogoLink" to="/">
          <div className="LogoIcon">
            <GiFilmProjector />
          </div>
          Film Views
        </Link>
    )
}

export default Logo


import { Link } from 'react-router-dom'


/** Header Component with a navbar*/

function Header() {

    return (
        <header className="header">
            <Link to={"/"}><div className="logo"></div></Link>
            <div className="navbar">
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </div>
            <div></div>
        </header>
    )

}
export default Header
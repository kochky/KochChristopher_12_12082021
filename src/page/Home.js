import { Link } from 'react-router-dom'



function Home(){// function to render a tempory page to switch between the 2 userId
    return (
        <div>
            <Link to={'/user/12'}><button>id 12</button></Link>
            <Link to={'/user/18'}><button>id 18</button></Link>
        </div>
        )
}


export default Home
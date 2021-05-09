import Carrousel from '../../../Carrousel'
import Cursos from '../../../Cursos'
import Navbar from '../../../Navbar'

import './Home.sass'

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <Navbar />
                <Carrousel />
                <Cursos />
            </div>
        </div>
    )
}

export default Home

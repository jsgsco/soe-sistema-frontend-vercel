// Importando Componentes
import Login from '../components/pages/Auth/Login'
import Home from '../components/pages/Auth/Home'
import MisMaterias from '../components/pages/Auth/MisMaterias'
import AreaPersonal from '../components/pages/Auth/AreaPersonal'

// Importacion de Error
import Error from '../components/pages/Error'

const routes = [
    {
        path: '/iniciar-sesion',
        component: Login,
        exact: true
    },
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/mis-materias',
        component: MisMaterias,
        exact: true
    },
    {
        path: '/area-personal',
        component: AreaPersonal,
        exact: true
    },
    {
        path: '/**',
        component: Error
    }
]

export default routes
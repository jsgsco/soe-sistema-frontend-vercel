import { Link } from 'react-router-dom'
import '../pages/Auth/Login/Login.sass'

const Login = () => {
    return (
        <div className="login-form">
                <form>
                    <div className="login-form-group">
                        <label htmlFor="correo">Correo Electronico</label>
                        <input 
                            type="email" 
                            name="email"
                            className="login-form-group-input"
                            placeholder="ejemplo@ejemplo.com" 
                            autoFocus
                        />
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="correo">Contraseña</label>
                        <input 
                            type="password" 
                            name="password"
                            className="login-form-group-input"
                            placeholder="**************" 
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-form-submit"
                    >Iniciar Sesión</button>
                    <Link
                        to='/'
                        className="login-form-repass"
                    > <span>¿Olvidaste tu clave?</span> Recuperala aqui</Link>
                </form>
            </div>
    )
}

export default Login

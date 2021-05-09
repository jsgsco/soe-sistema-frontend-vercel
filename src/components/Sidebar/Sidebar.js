import { PersonFill, PencilFill, MegaphoneFill, GeoAltFill, GeoFill, GearFill } from 'react-bootstrap-icons'
import './Sidebar.sass'

const Sidebar = () => {
    return (
        <div className="area-personal-sidebar">
            <h2 className="area-personal-sidebar-title">Area Personal</h2>
            <div className="area-personal-sidebar_foto">
                <img 
                    src="https://i.imgur.com/dE965B9.jpg" 
                    alt="Jhon Steven Giron Saavedra" 
                    className="area-personal-sidebar_foto-foto"
                />
                <button
                    type="button"
                    className="area-personal-sidebar_foto-editar"
                >Editar Foto</button>
            </div>
            <div className="area-personal-sidebar-info">
                <div className="area-personal-sidebar-info-nombre">
                    <PersonFill 
                        size={20}
                    />
                    <div className="area-personal-sidebar-info-nombre-nombre">
                        <h3 className="area-personal-sidebar-info-nombre-nombre-title">Nombre Alumno</h3>
                        <p className="area-personal-sidebar-info-nombre-nombre-alumno">Jhon Steven Giron Saavedra</p>
                    </div>
                </div>
                <div className="area-personal-sidebar-info-nombre">
                    <PencilFill 
                        size={20}
                    />
                    <div className="area-personal-sidebar-info-nombre-nombre">
                        <h3 className="area-personal-sidebar-info-nombre-nombre-title">Grado Actual</h3>
                        <p className="area-personal-sidebar-info-nombre-nombre-alumno">11º ONCE</p>
                    </div>
                </div>
                <div className="area-personal-sidebar-info-nombre">
                    <MegaphoneFill 
                        size={20}
                    />
                    <div className="area-personal-sidebar-info-nombre-nombre">
                        <h3 className="area-personal-sidebar-info-nombre-nombre-title">Directora de Curso</h3>
                        <p className="area-personal-sidebar-info-nombre-nombre-alumno">Nubia Roquel Torres</p>
                    </div>
                </div>
                <div className="area-personal-sidebar-info-nombre">
                    <GeoAltFill 
                        size={20}
                    />
                    <div className="area-personal-sidebar-info-nombre-nombre">
                        <h3 className="area-personal-sidebar-info-nombre-nombre-title">Direccion</h3>
                        <p className="area-personal-sidebar-info-nombre-nombre-alumno">CL 16 SUR #11-51 BR Villa Melida</p>
                    </div>
                </div>
                <div className="area-personal-sidebar-info-nombre">
                    <GeoFill 
                        size={20}
                    />
                    <div className="area-personal-sidebar-info-nombre-nombre">
                        <h3 className="area-personal-sidebar-info-nombre-nombre-title">Ciudad</h3>
                        <p className="area-personal-sidebar-info-nombre-nombre-alumno">Villvicencio - Meta</p>
                    </div>
                </div>
            </div>
            <div className="area-personal-sidebar-config">
                <button
                    type="button"
                    className="area-personal-sidebar-config-button"
                > <GearFill 
                        size={15}
                    /> Configuraciones  </button>
            </div>
        </div>
    )
}

export default Sidebar

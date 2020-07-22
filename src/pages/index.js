import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic15 from '../assets/images/pic15.jpg'
import pic12 from '../assets/images/pic12.jpg'
import pic13 from '../assets/images/pic13.jpg'
import pic14 from '../assets/images/pic14.jpg'




class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Jesús Rodríguez"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="projects" className="tiles">
                        <article style={{backgroundImage: `url(${pic12})`}}>
                            <header className="major">
                                <h3>Célula de Desarrollo de Software UTZAC</h3>
                                <p>Estamos en la busqueda de la certificación ISO/IEC 29110 VSEs</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic13})`}}>
                            <header className="major">
                                <h3>Leagold Mining</h3>
                                <p class="">Leagold Mining es una empresa minera lider en la producción de oro a nivel Américas, se encuentra en desarrollo el sistema para el control de Mantenimiento para sus equipos de trabajo </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic15})`}}>
                            <header className="major">
                                <h3>TianGui's</h3>
                                <p>Comprar los alimentos para la semana no debe ser un problema, con esta app móvil tendras a la mano el listado de aquellos productos que necesitas, haz chek en aquellos que ya adquiriste, tu y los demás usuarios podrán ver los cambios en tiempo real.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic14})`}}>
                            <header className="major">
                                <h3>DBmex</h3>
                                <p>Desarrollo de sitio web y tienda en linea para la venta de beats / instrumetales de la casa productora K.M.I Group </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        
                    </section>
                    <section id="about">
                        <div className="inner">
                            <header className="major">
                                <h2>Algo de mi</h2>
                            </header>
                            <div class="box">
                                Aparentemente soy un tipo de pocos amigos, me han dicho que tengo cara de "infumable" pero no es así. Siempre estoy dispuesto a compartir un gran <Link to="https://www.facebook.com/jesussrc/photos_all">momento</Link> con cualquier persona, siempre y cuando muestre respeto por todo y por todos (quienes que me conocen son testigos de ello), la <Link to="http://www.utzac.edu.mx/">UTZAC</Link> me ha dado la oportunidad de ser profesor de tecnologías, me apasiona enseñar lo poco que sé.  
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
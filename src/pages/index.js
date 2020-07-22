import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

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
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Célula de Desarrollo de Software UTZAC</h3>
                                <p>Estamos en la busqueda de la certificación ISO/IEC 29110 VSEs</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Leagold Mining</h3>
                                <p>Leagold Mining es una empresa minera lider en la producción de oro a nivel Américas, se encuentra en desarrollo el sistema para el control de Mantenimiento para sus equipos de trabajo </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>TianGui's</h3>
                                <p>Comprar los alimentos para la semana no debe ser un problema, con esta app móvil tendras a la mano el listado de aquellos productos que necesitas, haz chek en aquellos que ya adquiriste, tu y los demás usuarios podrán ver los cambios en tiempo real.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
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
                                Aparentemente soy un tipo de pocos amigos, me han dicho que tengo cara de "infumable" pero no es así. Siempre estoy dispuesto a compartir momentos con las personas, siempre y cuando tengan respeto por todo y por todos. Me gusta mucho el fútbol ⚽  
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
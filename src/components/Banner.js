import React from 'react'
import {Link} from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Yisus estás Muteado</h1>
            </header>
            <div className="content">
                <blockquote>
                Por allá en Abril de 2020 me invitaron a participar en la <Link to="https://carlosrojaso.github.io/javascript-week/" target="_blank">JSWeek Edición Pandemia </Link>, una iniciativa colombiana sobre todo lo relacionado con Javascript (React, Angular, Vue, Vanilla JS, Node), aquel día todo cambió para mi. Quieres saber que significa "Yisus estás muteado" dale un vistazo a esto:
                <a href="https://www.youtube.com/watch?v=joEISNnd6K0&t=6511s" target="_blank"> 📼</a>
                </blockquote>

                <ul className="actions">
                    <li><a href="#projects" className="button special fit">Proyectos Actuales</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner

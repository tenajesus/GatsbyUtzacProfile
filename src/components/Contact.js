import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
            <a href="#" className="button fit">Dejame un mensaje</a>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Tu mensaje</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">jrodriguez@utzac.edu.mx</a>
                        <br />
                        <a href="#">salvador.rodriguez@zacatecas.gob.mx</a>

                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Carretera Zacatecas, Cd Cuauhtémoc km. 5<br />
                        Ejido Cieneguitas, C.P 98601<br />
                        Guadalupe, Zacatecas  </span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

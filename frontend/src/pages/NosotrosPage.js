import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic, perferendis consequuntur earum
                    nesciunt quaerat inventore nam possimus debitis enim ut sapiente mollitia. Molestias corrupti assumenda
                    ullam nulla. Labore, totam?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reiciendis odio minus in, labore
                    suscipit consequuntur aliquid voluptatem, beatae impedit atque, dolorum ipsum possimus quod dolores id
                    ullam dignissimos voluptatibus?</p>
            </div>
            <div>
                <div className="staff">
                    <h2>staff</h2>
                    <div className="personas">
                        <div className="persona">
                            <img src="images/nosotros/nosotros1.jpg" alt="Juan Perez" />
                            <h5>Juan Gomez</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eum, minus sit, alias sed
                                aut aspernatur consequuntur autem incidunt iste architecto ad veritatis, porro odio voluptas
                                soluta cupiditate doloribus eos.</p>
                        </div>
                        <div className="persona">
                            <img src="images/nosotros/nosotros2.jpg" alt="Juan Perez" />
                            <h5>Rosalia Ledezma</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eum, minus sit, alias sed
                                aut aspernatur consequuntur autem incidunt iste architecto ad veritatis, porro odio voluptas
                                soluta cupiditate doloribus eos.</p>
                        </div>
                        <div className="persona">
                            <img src="images/nosotros/nosotros3.jpg" alt="Juan Perez" />
                            <h5>Federick Kloss</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eum, minus sit, alias sed
                                aut aspernatur consequuntur autem incidunt iste architecto ad veritatis, porro odio voluptas
                                soluta cupiditate doloribus eos.</p>
                        </div>
                        <div className="persona">
                            <img src="images/nosotros/nosotros4.jpg" alt="Juan Perez" />
                            <h5>Laura Tibro</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eum, minus sit, alias sed
                                aut aspernatur consequuntur autem incidunt iste architecto ad veritatis, porro odio voluptas
                                soluta cupiditate doloribus eos.</p>
                        </div>
                        <div className="persona">
                            <img src="images/nosotros/nosotros5.jpg" alt="Juan Perez" />
                            <h5>Charles Manson</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eum, minus sit, alias sed
                                aut aspernatur consequuntur autem incidunt iste architecto ad veritatis, porro odio voluptas
                                soluta cupiditate doloribus eos.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
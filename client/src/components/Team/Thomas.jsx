import './font.css'

export default function Thomas() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <a href="/"><img src="../assets/img/header/logo.svg" alt="Logo"/></a>
                </div>
            </div>

            <section className="container">
                <h1 className="title-portfolio" style={{"color": "#FB5607"}}>Portfolio.</h1>
                <div className="row">
                    <div className="col-sm-3 member-avatar">
                        <img src="../assets/img/team/thomas.png" alt="Alan"/>
                        <h4>Thomas Marrot</h4>
                        <p>Parcours Création numérique.</p>
                    </div>
                    <div className="col-sm-9 member-bio">
                        <p>
                            Je suis étudiant à l'université de Toulon et j'habite également dans cette ville. Je suis en 3e année dans un BUT MMI dans la spécialité création numérique. Plus tard, j'aimerais travailler à distance tout en voyageant dans tous les pays.<br/><br/>
                            Secret inavouable : Bois au moins 1 thermos de café par journée en projet.
                        </p>
                    </div>
                </div>
                <hr className="separator" style={{"margin": "30px 0 20px 0"}}/>

            </section>

            <section className="container">
                <h1 style={{"text-align": "center", "color": "#FB5607"}}>Mes réalisations.</h1>
                <div className="row">
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/thomas/MMI3D.gif" alt="MMI3D"/>
                        <h4>Logo MMI3D.</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Logo MMI en 3D tournant sur lui même.
                            Réalisé avec le logiciel Blender et ainsi que la compilations d'image avec GIMP.
                        </p>
                    </div>
                </div>
                <hr className="separator"/>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Vidéo présentant les statues moaï sur l'iles de pâques avec un effet de paralax.
                            Les images sont prisent sur google images, les montages photos avec Photoshop et la vidéo est réalisé avec un logiciel de 3D, Blender.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <iframe width="635" height="400" src="https://www.youtube.com/embed/YMezjn0attI"
                                title="Statue Moaï Marotte Thomas" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <h4>Présentation des statues Moaï.</h4>

                    </div>
                </div>
                <hr className="separator"/>
            </section>


            <section className="container">
                <div className="row">
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/thomas/Dijon1.png" alt="Dijon1"/>
                        <h4>Gazette de course d'obstacle.</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Réalisation d'un gazette pour une course d'obstacle pour l'organisation de La Ruée Des Fadas.
                            Cela à été réalisé avec Illustrator ainsi que Phostoshop.
                            A savoir qu'il est important de "Incorporer" vos images et vectoriser votre texte afin d'avoir une impréssion papier impécable !
                        </p>
                    </div>
                </div>
                <hr className="separator"/>
            </section>


            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Trailer pour une entreprise fictive Klap's basée dans le domaine du multimédia.
                            Cette vidéo à été réalisé avec des captations dans la ville de toulon et le montage vidéo avec Première pro et After Effect.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <iframe width="635" height="400" src="https://www.youtube.com/embed/jQtrZwJRVw4" title="Trailer Klap's"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        <h4>Trailer Klap's</h4>
                    </div>
                </div>
                <hr className="separator"/>
            </section>


            <section className="container">
                <div className="row">
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/thomas/lowpolythomas.jpg" alt="Lowpoly Thomas"/>
                        <h4>Portrait Lowpoly</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Autoportrait dans le cadre universitaire dans le style Lowpoly, un ensemble de forme colorées créant l'image.
                            Cela à été réalisé avec Illustrator, à savoir que le fait des superposé des calques dans l'espace de travail est utile pour ne pas cliquer inutilement sur des formes finis.
                        </p>
                    </div>
                </div>
                <hr className="separator"/>
            </section>



            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Vidéo d'un montage entre un épisode de Rick et Morty ainsi qu'une animation 3D de Rick cornichon "Pickle Rick"
                            La vidéo à été téléchargée via un extrait sur Youtube avec Youtube Mp3, l'animation en 3D le logiciel Blender et le montage vidéo à été fait avec Première pro.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <iframe width="635" height="400" src="https://www.youtube.com/embed/0j0qer8uLSM"
                                title="Pickle Rick 3D" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        <h4>Pickle Rick 3D</h4>
                    </div>
                </div>
                <hr className="separator"/>
            </section>



            <section className="container">
                <div className="row">
                    <div className="col-sm-6 project-image">
                        <iframe width="635" height="400" src="https://www.youtube.com/embed/zz5RRhAC-TM" title="Post insta/tabac"
                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h4>Application test de logo</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Vidéo créer dans le but de faire une application de logo créer sur une pancarte devant un bâtiment existant dans le village de Fourques.
                            Le logo à été réalisé avec Illustrator, l'animation 3D avec Blender et le montage vidéo avec Première pro.
                        </p>
                    </div>
                </div>
                <hr className="separator"/>
            </section>


            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Vidéo présentant la méthode SCRUM.
                            Les images sont prisent sur google images et Pngegg, les montages photos avec Photoshop et la vidéo est réalisé avec Première Pro.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <iframe width="635" height="400" src="https://www.youtube.com/embed/LajTRGcnQXc" title="Méthode SCRUM MMI" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        <h4>Présentation de la méthode SCRUM</h4>
                    </div>
                </div>
                <hr className="separator"/>
            </section>


            <section className="container">
                <div className="row">
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/thomas/Bubbletea.png" alt="Bubble tea"/>
                        <h4>Maquette graphique pour Bubbletea</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Réalisation d'une maquette filaire de site pour la vente à distance via un système de "uber eats".
                            Le site est héberger et monter avec Wordpress, la maquette est créer à l'aide de Figma pour le montage de la maquette et Photoshop pour des montages d'images des produits.
                        </p>
                    </div>
                </div>
                <hr className="separator"/>
            </section>



            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Réalisation d'une maquette filaire de site pour le sport à la maison.
                            Créer à l'aide de Figma pour le montage de la maquette et Photoshop pour des arrangement d'images.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/thomas/sport.png" alt="maquette sport"/>
                        <h4>Maquette de site pour le sport à la maison</h4>
                    </div>
                </div>
            </section>

        </>
    )
}
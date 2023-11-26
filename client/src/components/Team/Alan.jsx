import './font.css'

export default function Alan() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <a href="/"><img src="../assets/img/header/logo.svg" alt="Logo"/></a>
                </div>
            </div>

            <section className="container">
                <h1 className="title-portfolio" style={{"color":" #3A86FF"}}>Portfolio.</h1>
                <div className="row">
                    <div className="col-sm-3 member-avatar">
                        <img src="../assets/img/team/alan.png" alt="Alan" />
                            <h4>Alan THOB</h4>
                            <p>Parcours Développement.</p>
                    </div>
                    <div className="col-sm-9 member-bio">
                        <p>
                            Bonjour ! Moi, c'est Alan, et je suis un passionné des nouvelles technologies depuis de nombreuses
                            années, j'ai eu la chance de travailler dans le domaine de l'informatique en tant que dépanneur pendant
                            plus de 10 ans. Au cours des 3 dernières années, j'ai également développé mes compétences en
                            développement grâce à la formation MMI parcours développement WEB, et en travaillant sur divers projets
                            personnels, professionnels et universitaires. Mon expérience, combinée en dépannage informatique et en
                            développement, m'a permis de développer une compréhension approfondie des technologies de l'information
                            et mon objectif principal est de continuer à explorer et à innover dans ce domaine en constante
                            évolution. Je vous propose au travers de ce portfolio de découvrir mon univers 😎.
                            <br/><br/>
                                Secret inavouable : R6 c'est cool pendant les cours de dev !
                        </p>
                    </div>
                </div>
                <hr className="separator" style={{"margin": "30px 0 20px 0"}} />

            </section>

            <section className="container">
                <h1 style={{"text-align": "center",  "color": "#3A86FF"}}>Mes réalisations.</h1>
                <div className="row">
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/sfait.png" alt="SFAIT" />
                            <h4>SFAIT.</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Site personnel que j'ai créé pour ma future entreprise dans le cadre de la vente de mes services de
                            dépannage informatique.
                        </p>
                    </div>
                </div>
                <hr className="separator" />
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Site d'e-commerce réalisé dans le cadre d'un projet universitaire dans le thème des sports de glisse,
                            avec une mise en vente fictive d'articles relatifs à la glisse.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/le-monde-de-la-glisse.png" alt="Le monde de la glisse" />
                            <h4>Le monde de la glisse.</h4>
                    </div>
                </div>
                <hr className="separator"/>
            </section>

            <section className="container">
                <div className="row">
                    <div class="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/e-gnose.png" alt="e-Gnose"/>
                            <h4>e-Gnose.</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Site de e-library réalisé dans le cadre d'un projet universitaire, avec la présence d'une base de
                            données qui répertorie des films, séries et livres.
                        </p>
                    </div>
                </div>
                <hr className="separator"/>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Création d'un site de séminaire dans le cadre d'un projet universitaire.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/orasis-2023.png" alt="Orasis 2023"/>
                            <h4>Orasis 2023.</h4>
                    </div>
                </div>
                <hr className="separator"/>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/sud-air.png" alt="Sud-Air"/>
                            <h4>Sud'Air.</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Création d'un site qui affiche la qualité de l'air des villes de la région Provence Alpes Côte d'Azur, dans le cadre d'un projet universitaire.
                        </p>
                    </div>
                </div>
                <hr className="separator"/>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Première création d'un site internet de la formation MMI qui consistait à faire un portrait croisé de moi et 2 collègues.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/portrait-croise.png" alt="Portrait Croisé"/>
                            <h4>Portrait croisé.</h4>
                    </div>
                </div>
                <hr className="separator"/>
            </section>

            <section className="container">
                <div className="row">
                    <div class="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/appontage.png" alt="Appontage porte-avions"/>
                        <h4>Appontage porte-avions</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Site internet crée sur le logiciel Adobe Animate CC dans le cadre de mon stage de deuxième année, pour le service de l'Ecole du Personnel de Pont d'Envol à la Base Aéronavale d'Hyères, qui consistait à créer un cours interactif du Porte-avions Charles de Gaulle, pour les élèves de l'école.
                        </p>
                    </div>
                </div>
                <hr className="separator"/>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            Site crée dans le cadre de la réalisation de mon portfolio universitaire et professionnel où je répertorie l'ensemble de mes projets WEB réalisés à titre personnel, professionnel et universitaire.
                        </p>
                    </div>
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/portfolio.png" alt="portfolio"/>
                        <h4>Portfolio personnel.</h4>
                    </div>
                </div>
                <hr className="separator"/>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-sm-6 project-image">
                        <img src="../assets/img/portfolio/alan/eppe.png" alt="Appontage porte-avions"/>
                        <h4>Ecole du Personnel de Pont d'Envol.</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Site réalisé dans le cadre de mon stage de première année en MMI pour faire rayonner l'école et aider les futurs stagiaires à mieux se repérer au sein de l'Ecole du Personnel de Pont d'Envol.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
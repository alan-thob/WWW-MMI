import React from "react";
import '../css/portfolio-member.css';
import '../css/team.css';

import { useParams } from "react-router-dom";
import Hana from "../components/Team/Hana";
import Alan from "../components/Team/Alan";
import Ferreol from "../components/Team/Ferreol";
import Hugo from "../components/Team/Hugo";
import Thomas from "../components/Team/Thomas";



export default function Team() {
    // get the slug from the url
    const  {teamId} = useParams();

    return (
        <>
            {
                teamId ? teamId === "alan" ? <Alan /> : teamId === "hana" ? <Hana /> : teamId === "hugo" ? <Hugo /> : teamId === "thomas" ? <Thomas /> : teamId === "ferreol" ? <Ferreol /> : "404" : (
                    <>
                        <div className="navbar">
                            <div className="logo">
                                <a href="/"><img src="/assets/img/header/logo.svg" alt="Logo" /></a>
                            </div>
                        </div>

                        <section className="container team">
                            <h4>Salut !

                                Nous sommes cinq étudiants en MMI. On est là pour te présenter nos trois parcours, afin que tu choisisses celui que tu préfères. Que ce soit le développement web, la création numérique ou la stratégie de communication. On te laisse cliquer sur nos profils pour en savoir plus sur nous. 😊</h4>
                            <h1>Choisis un membre de l'équipe.</h1>

                            <div className="teams">
                                <div className="team-member alan">
                                    <a href="/team/alan"><img src="/assets/img/team/alan.png" alt="Alan" /></a>
                                </div>
                                <div className="team-member hana">
                                    <a href="/team/hana"><img src="/assets/img/team/hana.png" alt="Hana" /></a>
                                </div>
                                <div className="team-member ferreol">
                                    <a href="/team/ferreol"><img src="/assets/img/team/ferreol.png" alt="Ferréol" /></a>
                                </div>
                                <div className="team-member thomas">
                                    <a href="/team/thomas"><img src="/assets/img/team/thomas.png" alt="Thomas" /></a>
                                </div>
                                <div className="team-member hugo">
                                    <a href="/team/hugo"><img src="/assets/img/team/hugo.png" alt="Hugo" /></a>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </>
    )
}
import {useParams} from "react-router-dom";
import '../css/result.css';
export default function Result() {
    const  {slug} = useParams();
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <a href="/"><img src="../assets/img/header/logo.svg" alt="Logo"/></a>
                </div>

                <div className="nav-button__team">
                    <a href="../../team.php"><img src="../../assets/img/header/bouton-portfolio.png" alt="Bouton portfolio" /></a>
                </div>
            </div>

            {
                slug === "dev" ? (
                    <>
                        <section className="container">
                            <h1 className="result-title">Fin du parcours.</h1>
                            <div className="contratulations">
                                <h2>Félicitations ! Le parcours MMI'<span>Story</span> a révélé que la spécialité idéale pour toi est :</h2>
                                <h1>le Développement WEB.</h1>
                            </div>
                        </section>
                    </>
                ) : slug === "com" ? (
                    <>
                        <section className="container">
                            <h1 className="result-title">Fin du parcours.</h1>
                            <div className="contratulations">
                                <h2>Félicitations ! Le parcours MMI'<span>Story</span> a révélé que la spécialité idéale pour toi est :</h2>
                                <h1>la Stratégie de communication.</h1>
                            </div>
                        </section>
                    </>
                ) : slug === "crea" ? (
                    <>
                        <section className="container">
                            <h1 className="result-title">Fin du parcours.</h1>
                            <div className="contratulations">
                                <h2>Félicitations ! Le parcours MMI'<span>Story</span> a révélé que la spécialité idéale pour toi est :</h2>
                                <h1>la Création Numérique.</h1>
                            </div>
                        </section>

                    </>
                ) : "404"
            }
        </>
    )
}
import './css/welcome.css';

function App() {
  return (
      <div style={{
          backgroundImage: `url("https://via.placeholder.com/500")`
      }}>
        <div className="navbar">
            <div className="logo">
                <img src="assets/img/header/logo.svg" alt="Logo" />
            </div>
            <div className="nav-button__team">
                <a href="/team">
                    <img src="assets/img/header/bouton-portfolio.png" alt="Button Image" id="buttonImage"/></a>
            </div>
        </div>

        <section className="container welcome">
            <div className="welcome-border"></div>
            <div className="welcome-lines">
                <h1>Bienvenue sur MMI'<span>Story</span> !</h1>
                <h2>Tu veux connaitre le quotidien des MMI'liciens❓<br /> On t'invite à le découvrir 😎</h2>
                <h4>Trouve le parcours MMI qui te correspond ! À chaque situation, choisis la solution que tu préfères pour définir ton parcours à la fin. Chaque choix compte, donc choisis-les avec soin. 🤓</h4>
                <a href="/parcours">👉 C'est parti !</a>
            </div>
        </section>
    </div>
  );
}

export default App;

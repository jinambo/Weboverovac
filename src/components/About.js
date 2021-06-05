const About = () => {
    return (
        <div className="page-about row row--lg center padding-v-xl">
            <h1 className="title title--md">O stránce Webověřovač.cz</h1>
            
            <div className="page-about__item margin-t-md">
                <h3 className="title title--sm">K čemu Webověřovač.cz slouží?</h3>
                <p className="description">
                    Webověřovač.cz je webový nástroj, který chrání uživatele, jenž se chystají nakoupit na méně známých internetových stránkách, před potencionálními podvodníky.
                </p>
            </div>

            <div className="page-about__item margin-t-md">
                <h3 className="title title--sm">Jak Webověřovač.cz vznikl?</h3>
                <p className="description">
                    Webověřovač.cz vznikl v roce 2021 jako semestrální projekt studenta softwarového inženýrství.
                </p>
            </div>

            <div className="page-about__item margin-t-md">
                <h3 className="title title--sm">Odkud víme, že je daná stránka riziková?</h3>
                <p className="description">
                    Webověřovač.cz pracuje s oficiálními otevřenými daty České obchodní inspekce (ČOI), která data průběžně aktualizuje (obvykle několikrát týdně).
                </p>
            </div>
        </div>
    )
}

export default About;
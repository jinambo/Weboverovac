import { useState } from "react";

const About = () => {
    const [infoBoxes, setInfoBoxes] = useState([
        {
            title: 'K čemu Webověřovač.cz slouží?',
            content: 'Webověřovač.cz je webový nástroj, který chrání uživatele, jenž se chystají nakoupit na méně známých internetových stránkách, před potencionálními podvodníky.'
        },
        {
            title: 'Odkud víme, že je daná stránka riziková?',
            content: 'Webověřovač.cz pracuje s oficiálními otevřenými daty České obchodní inspekce (ČOI), která data průběžně aktualizuje (obvykle několikrát týdně). Weby, které má ČOI uvedené ve svoji databázi jsou považovány rizikové a uživatel by se jim měl vyhnout.'
        },
        {
            title: 'Jak Webověřovač.cz vznikl?',
            content: 'Webověřovač.cz vznikl v roce 2021 jako semestrální projekt studenta softwarového inženýrství.'
        },
    ])

    return (
        <div className="page-about row row--lg center padding-t-xl padding-b-md">
            <h1 className="title title--md">O stránce Webověřovač.cz</h1>
            
            {
                infoBoxes.map(box => (
                    <div className="page-about__item margin-t-md">
                        <h3 className="title title--sm">
                            { box.title }
                        </h3>
                        <p className="description">
                            { box.content }
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default About;
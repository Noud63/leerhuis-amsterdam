import React from "react";
import BackButton from "../components/BackButton";
import { useLocation } from 'react-router-dom';
import SectionTitle from "../components/SectionTitle";

const Verslag_241026 = () => {
  const url = useLocation().pathname;
  return (
    <div className="w-full min-h-screen pt-[180px] px-8 max-xxxsm:px-4 mb-32">
      
      <div className="w-full max-w-[900px] mx-auto prose-base">
        <SectionTitle className="w-full max-w-[900px] flex text-lg max-sm:text-xl tracking-wide mb-2 py-1 px-4">Juist AI doet ons beseffen wat het is om mens te zijn</SectionTitle>
        <span className="pl-4">Lezing Frank Bosman, Muiderkerk, 24 oktober 2026</span>
        <img
            src={`/images/bosman.jpg`}
            alt=""
            className="w-full h-auto block mx-auto my-2 rounded-lg"
            loading="lazy"
          />
        <p className="font-semibold">Wie bepaalt de morele grenzen van
        artificiële intelligentie? Dat was de hoofdvraag van de lezing van Frank
        Bosman, cultuurtheoloog aan de Tilburg School of Catholic Theology,
        tijdens de eerste bijeenkomst in het jaarthema ‘Zie de mens’ van het
        Leerhuis Amsterdam. Het antwoord op die vraag is niet zo makkelijk te
        geven, zo bleek tijdens de goed bezochte zaterdagmiddag (24 oktober) in
        de Muiderkerk.</p>
        <p>Hoe behouden we menselijke waardigheid en sociale
        rechtvaardigheid nu kunstmatige intelligentie – of artificial
        intelligence (AI) – zich alsmaar sneller ontwikkelt? Daarover gaat de
        encycliek ‘Magnifica Humanitas - Schitterende mensheid’ (2026) van paus
        Leo XIV. Leerhuis Amsterdam laat zich daardoor inspireren voor het
        jaarthema 2026-2027: ‘Zie de mens’. Frank Bosman beet het spits af, met
        zijn lezing ‘Tussen Babel en Jeruzalem’, over Paus Leo XIV, artificiële
        intelligentie en de toekomst van de mens.</p>
        <p className=""><span className="font-semibold">Babel versus Jeruzalem</span>< br />
          Bosman liet eerst zien dat Paus Leo met zijn encycliek – een belangrijk
        document van de Paus – in een lange traditie staat van de moderne
        katholieke sociale leer. Die begon bij de encycliek Rerum Novarum
        (1891), waarin Paus Leo XIII zich uitsprak over sociaalmaatschappelijke
        kwesties. Paus Leo XIV buigt zich in zijn recente encycliek over hoe we
        ons menszijn bewaren, nu AI misschien wel slimmer wordt dan wij. De Paus
        laat zien dat technologie in theorie neutraal is – technologie heeft uit
        zichzelf geen goede of kwade bedoelingen – maar dat je het in de
        praktijk kunt inzetten voor zowel opbouwende als vernietigende
        ontwikkelingen. Met kernenergie kun je een atoombom maken, maar ook
        radiotherapie om kwaadaardige cellen mee te bestrijden. De Paus
        illustreert dat, aldus Bosman, aan de hand van de Bijbelse steden Babel
        en Jeruzalem. Babel gaat over macht en zelfverrijking, in het Bijbelse
        Jeruzalem staan juist God en de gemeenschap centraal: technologie in
        dienst van herstel en het gemeenschappelijk goede.</p>
        <p><span className="font-semibold">AI is geen mens </span><br />Het
        gaat er, legde Frank Bosman uit, vooral om hoe wij mensen met
        voortschrijdende technologie als AI omgaan. Is het een middel van
        machthebbers om uitsluiting, manipulatie en ongelijkheid mee te
        vergroten? Of wenden we het aan voor bescherming van kwetsbare groepen,
        eerlijke verdeling en betekenisvolle menselijke besluitvorming? Bosman
        benadrukte dat AI geen mens is, ook al ligt het gevaar om een chatbot
        als een vriend te zien, op de loer. Met als risico dat we er emotioneel
        afhankelijk van worden, of onze verantwoordelijkheden ernaartoe
        verschuiven. ‘Maar menselijke nabijheid, zorg en verantwoordelijkheid
        blijven onvervangbaar’, zei Bosman.</p>
        <p><span className="font-semibold">Morele grenzen samen bepalen</span> Juist
        AI, zo concludeerde hij, doet ons beseffen wat het is om mens te zijn:
        wij zijn geen ‘perfecte’ machines, maar we zijn kwetsbaar, eindig en
        afhankelijk. En juist die ‘begrensdheid’ geeft ruimte aan solidariteit,
        mededogen en betekenis. Kiezen tussen ‘Babel en Jeruzalem’ is geen
        technologische keuze, maar een morele. De vraag is niet wat AI allemaal
        kan, maar vooral waar wij het voor inzetten. Die morele grenzen moeten
        we als mensen en als samenleving met elkaar bepalen, betoogde Bosman.
        Dat dat niet eenvoudig is bleek uit het feit dat hij zijn lezing niet
        alleen begon, maar ook afsloot met een vraag: zijn mensen wijs genoeg om
        met steeds intelligentere machines om te gaan?’</p> 
        <p><span className="font-semibold">Taal als gemeenschappelijke factor</span><br />
        Die vraag leidde na de pauze tot een
        geanimeerd gesprek met de circa 35 geïnteresseerde aanwezigen. Allerlei
        nieuwe vragen kwamen op: wat doet AI met ons menselijk bewustzijn? Wat
        is ‘intelligent’ eigenlijk? Hoe zorgen we dat we AI moreel bewaken, en
        wat is daarin de rol van de kerk? De antwoorden zijn niet eenduidig, en
        zullen we mettertijd samen moeten ontdekken, zo bleek tijdens de
        discussie. Vast staat dat wij ons van AI onderscheiden door onze
        menselijke waardigheid en het hebben van een ‘ziel’. De Paus verwijst
        vanuit Babel ook naar Pinksteren, zei een van de aanwezigen, waar taal
        juist een gemeenschappelijke factor is. Die kan ons helpen om ook een
        fundamenteel nieuwe technologische revolutie als AI tegemoet te treden.
        In de hoop dat we daar wijs genoeg voor zijn… </p>
        <p><span className="font-semibold">Op 10 november</span><br />
        organiseert Leerhuis Amsterdam de tweede
        bijeenkomst in het jaarthema ‘Zie de mens’. Dan geeft Maaike Harmsen,
        theoloog, technologiekenner en schrijver van het boek ‘Dank God voor
        techniek’, in de Muiderkerk een lezing over ‘Mens tussen natuur, ethiek
        en technologie’. Hier lees je er meer over.</p>
      </div>
      <BackButton url={url} />
      </div>
  );
};

export default Verslag_241026;

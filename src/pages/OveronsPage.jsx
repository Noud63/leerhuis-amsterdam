import React from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const OveronsPage = () => {

  const url = window.location.pathname

  return (
    <div className="w-full flex items-center px-8 relative max-lg:px-8 pb-0 max-bracket:px-4">
      <div className="w-full">
        <div className="overons flex flex-col">
          <div className="w-full flex flex-row justify-between text-black font-normal gap-12 rounded-lg z-5 max-lg:flex-col">
            <div className="flex pt-[185px] flex-1 flex-col leading-2 text-lg max-lg:w-full pb-20 max-xxsm:pt-[160px]">
              <div className="flex justify-between border-b border-black mb-8">
                <span className="flex text-[#000] text-2xl font-semibold pb-2 pt-2">
                  # Over het Leerhuis
                </span>
              </div>

              <div className="w-full h-full flex flex-col items-center justify-center">
                <span className="flex text-xl font-semibold pb-4 italic">
                  "Leven in een complexe wereld"
                </span>
                <div className="w-full max-w-[900px] italic max-lg:w-full px-0">
                  <p>Het Leerhuis Amsterdam richt zich op zinvol samen leven in een
                  complexe wereld die ons voor veel vragen stelt.
                  <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en
                  de hedendaagse wereld van kunst en cultuur zoeken wij hierover
                  het gesprek.
                  <br /> We organiseren daarom bijeenkomsten, dialogen en
                  cursussen, in de Muiderkerk, waarin deze werelden elkaar
                  ontmoeten.<br />
                  Leerhuis Amsterdam nodigt je uit voor 'moedige egesprekken'
                  met het oog op vragen, over hoe we met elkaar zinvol kunnen
                  samenleven .<br />
                  Rond de bespreking van een boek of een thema ontstaat voor
                  een tijdje een gemeenschap. Daarin hebben we aandacht voor
                  ieders geloof, spiritualiteit, filosofisch en
                  levensbeschouwend perspectief. Verras elkaar met je
                  leergierigheid, je vrijmoedig dóórvragen en soms ook met je
                  levenservaringen, wanneer je die wilt delen.
                  <br />
                  Betekenis vinden, op ideeën komen, door ontmoeting en
                  dialoog. Daar draait het om. En mogelijk heb je er ook wat
                  aan in gesprekken met vrienden, familie tijdens je werk, bij
                  je morele en politieke keuzes of in je geloofsgemeenschap.
                  Zo'n zinvolle doorwerking van wat we met en van elkaar leren
                  zou mooi zijn!
                  <br />
                  Trouwens: heb je zélf een onderwerp dat je wilt bespreken
                  met anderen, laat het ons weten, dan kijken we of en wanneer
                  het past.
                  <br />
                  We kijken naar jullie uit!
                  </p>
                </div>
              </div>
              {/* <div className="w-full flex justify-center items-center text-md">
                <img src={gathering} alt="" className="rounded-xl shadow-lg" />
              </div> */}

              {/* <Link
                to="/"
                className="w-full flex justify-center mt-12 border-b border-black pb-12"
              >
                <button
                  type="button"
                  className="btn w-[150px] rounded-full justify-center items-center text-[#000] border-2 
                  border-black gap-2 pb-1 leading-8 pt-1 text-md font-semibold cursor-pointer"
                >
                  Terug
                </button>
              </Link> */}

              <BackButton url={url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OveronsPage

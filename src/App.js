import bn from './Images/bn.png';
import foguete from './Images/foguete.png';
import zsonda from './Images/sonda.png';
import logo from './Images/logo.png';
import './App.css';
function App() {
  return (
    <div className="Home">
      <header id="About-header">
        <div className="Menu">
            <img src={logo} className="menulogo" alt="foto" />
          <h1>CosmosExplorer</h1>
          <div className="menubotoes">
          <ul>
                  <li><a href="#About-header">Início</a> </li>
                  <li><a href="#Projects">Artigos</a> </li>
                  <li><a href="#Contact">Sobre</a> </li>
              </ul>
          </div>
        </div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <h1 className="titulos"><br/>Destaques</h1>
          <div className="container1">
              <div className="Destaque1">
                <a href="https://jacksonfnx.github.io/pagina2/" target="" rel="not"><br/>
                <img src={bn} className="foto" alt="foto" />
                <h2>
                  O que são os buracos negros?
                  </h2>
                    <p className ="paragrafo">
                    &nbsp;Um buraco negro é uma região do espaço com um campo gravitacional tão intenso que nem mesmo a luz consegue escapar de dentro dele. A intensa gravidade comprime a matéria até que não haja mais espaço entre os átomos. Corpos celestes dessa natureza podem surgir em decorrência da morte de estrelas supermassivas.
                    </p>
                    <p className ="paragrafo">
                    &nbsp;A comunidade científica acredita que os buracos negros apresentem dimensões bastante variadas: os menores deles podem apresentar até mesmo o tamanho de um único átomo. Os maiores, por sua vez, podem ter raios de poucos quilômetros e milhões de vezes a massa do Sol. Algumas observações astronômicas já forneceram fortes evidências de que o centro de todas as grandes galáxias é ocupado por um buraco negro supermassivo. No centro da nossa galáxia, a Via Láctea, há um desses, e o seu nome é Sagittarius A.
                    </p>
                </a>
                </div>
              <div className="Destaque1">
              <a href="https://jacksonfnx.github.io/Projeto-Interfaces" target="" rel="not"><br/>
              <img src={zsonda} className="foto" alt="foto" />
                <h2>
                Agências espaciais perdem contato com sondas em Marte
                </h2>
                <div className="About-cont-redes">
                  <p className ="paragrafo">
                  &nbsp;O rover Perseverance e seu companheiro, o pequeno helicóptero Ingenuity, ficaram estacionados em Marte por semanas sem receber instruções da NASA. Do outro lado do equador marciano, o Curiosity também ficou isolado. A interrupção das comunicações afeta todas as missões ativas em Marte.
                  </p>
                  <p className ="paragrafo">
                  &nbsp;Aproximadamente a cada dois anos, a Terra e Marte ficam em lados opostos do Sol, o que chamamos de conjunção solar. Como as órbitas de ambos os planetas têm inclinações diferentes, é raro que Marte fique completamente escondido pela estrela, mas foi exatamente isso que aconteceu desta vez.
                  </p>
                </div>
              </a>
              </div>
              <div className="Destaque1">
              <a href="https://jacksonfnx.github.io/Projeto-Interfaces" target="" rel="not"><br/>
              <img src={foguete} className="foto" alt="foto" />
                <h2>
                SpaceX: Starship Explode após lançamento
                </h2>
                <div className="About-cont-redes">
                  <p className ="paragrafo">
                  &nbsp;A empresa de foguetes SpaceX fez um segundo teste de lançamento da Starship -- considerada a nave mais poderosa do mundo. 
                  </p>
                  <p className ="paragrafo">
                  &nbsp;A decolagem aconteceu às dez da manhã, no estado americano do Texas, mas o propulsor -- que é a parte inferior da nave -- explodiu pouco depois de se separar da cápsula, a parte superior..
                  </p>
                  <p className ="paragrafo">
                  &nbsp;Os cientistas perderam contato com a cápsula e a missão foi encerrada. A SpaceX admitiu que sabia da possibilidade de incidentes. O objetivo era que a Starship voasse por uma hora e meia, com pouso no Oceano Pacífico.
                  </p>
                  <p className ="paragrafo">
                  &nbsp;A empresa planeja usar essa nave para levar seres humanos à lua, nos próximos anos, e a Marte no futuro.
                  </p>
                </div>
              </a>
              </div>
            </div>
      </header>
      <div id= "Projects">
              <h2 className="titulos">Artigos</h2>
              <div className="container3">
              <div className="Project-block1">
                <a href="https://jacksonfnx.github.io/pagina/" target="" rel="not"><br/>
                  <p>Entenda como funciona o processo de Terraformação</p>
                </a>
              </div>
              <div className="Project-block2">
                <a href="https://jacksonfnx.github.io/pagina2/" target="" rel="not"><br/>
                  <p>O que são os buracos negros?</p>
                </a>
              </div>
                <div className="Project-block3">
                  Em breve
                </div>
                <div className="Project-block4">
                  Em breve
                </div>
                <div className="Project-block5">
                  Em breve
                </div>
                <div className="Project-block6">
                  Em breve
                </div>
              </div>
              
      </div>
      <div id= "Contact">
              <h2 className="titulos">Sobre nós</h2>
              <br/>
              <br/>
              <p>
              Projeto academico da disciplina de Interfaces para Mídias Digitais
              </p>
              <br/>
              <p>
              Jackson Galdino 26423375
              </p>
              <br/>
              <p>
              Discord: fnx_
              </p>
              <br/>
              <p>
              Email: jacksonfnx@gmail.com
              </p>
              <br/>
              <p>
              GitHub /JacksonFNX
              </p>
      </div>
    </div>
  );
}
export default App;
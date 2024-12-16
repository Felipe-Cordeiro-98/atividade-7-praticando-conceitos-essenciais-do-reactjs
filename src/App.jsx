import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contador from "./components/Contador";
import AlterarCorDeFundo from "./components/AlterarCorDeFundo";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Temporizador from "./components/Temporizador";
import FiltroDeLista from "./components/FiltroDeLista";
import FormularioDeRegistro from "./components/FormularioDeRegistroSimples";
import RequisicaoDeDados from "./components/RequisicaoDeDadosSimples";
import GaleriaDeImagens from "./components/GaleriaDeImagens";
import TimerComAlerta from "./components/TimerComAlerta";
import TabsNavegaveis from "./components/TabsNavegaveis";

function App() {
    return (
        <Router>
            <div className="container">
                <div className="navegacao">
                    <div>
                        <h1>Atividade 7</h1>
                        <p>Praticando conceitos essenciais do ReactJS</p>
                    </div>
                    <nav>
                        <Link className="link" to="/contador">1 - Contador Simples</Link>
                        <Link className="link" to="/alterar-cor-de-fundo">2 - Alterar Cor de Fundo</Link>
                        <Link className="link" to="/lista-de-tarefas">3 - Lista de Tarefas</Link>
                        <Link className="link" to="/temporizador">4 - Temporizador</Link>
                        <Link className="link" to="/filtro-de-lista">5 - Filtro de Lista</Link>
                        <Link className="link" to="/formulario-de-registro">6 - Formulário de Registro</Link>
                        <Link className="link" to="/requisicao-de-dados-simples">7 - Requisição de Dados Simples</Link>
                        <Link className="link" to="/galeria-de-imagens">8 - Galeria de Imagens</Link>
                        <Link className="link" to="/timer-com-alerta">9 - Timer com Alerta</Link>
                        <Link className="link" to="/tabs-navegaveis">10 - Tabs Navegáveis</Link>
                    </nav>
                </div>
                <div className="conteudo">
                    <Routes>
                        <Route path="/contador" element={<Contador />} />
                        <Route path="/alterar-cor-de-fundo" element={<AlterarCorDeFundo />} />
                        <Route path="/lista-de-tarefas" element={<ListaDeTarefas />} />
                        <Route path="/temporizador" element={<Temporizador />}/>
                        <Route path="/filtro-de-lista" element={<FiltroDeLista />}/>
                        <Route path="/formulario-de-registro" element={<FormularioDeRegistro />}/>
                        <Route path="/requisicao-de-dados-simples" element={<RequisicaoDeDados />}/>
                        <Route path="/galeria-de-imagens" element={<GaleriaDeImagens />}/>
                        <Route path="/timer-com-alerta" element={<TimerComAlerta />} />
                        <Route path="/tabs-navegaveis" element={<TabsNavegaveis />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

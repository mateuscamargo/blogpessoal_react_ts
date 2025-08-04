import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./cadastro/Cadastro";
import FormPostagem from "./components/postagens/formpostagem/FormPostagem";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens";
import DeletarTema from "./components/temas/deletartema/DeletarTemas";
import FormTema from "./components/temas/formtema/FormTemas";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/cadastrartema" element={<FormTema />} />
          <Route path="/editartema/:id" element={<FormTema />} />
          <Route path="/deletartema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/cadastrarpostagem" element={<FormPostagem />} />
          <Route path="/editarpostagem/:id" element={<FormPostagem />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
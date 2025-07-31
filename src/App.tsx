import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./cadastro/Cadastro";
import FormTema from "./components/temas/formtema/FormTemas";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import DeletarTema from "./components/temas/deletartema/DeletarTemas";

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
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
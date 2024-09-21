import { FormEvent } from "react";
import { DiscordHook } from "./data/hooks/DiscordHook";
import "./App.css";
function App() {
  const discordHook = DiscordHook();

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(discordHook.discordUi);

    await discordHook.handleSendMessage();
  };

  return (
    <div>
      <h1>Discord Detona</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do bot</label>
          <input
            type="text"
            value={discordHook.discordUi.botName}
            name="botName"
            placeholder="Informe o nome do bot"
            onChange={discordHook.handleChange}
          />
        </div>
        <div>
          <label>Titulo da mensagem</label>
          <input
            type="text"
            name="messageTitle"
            value={discordHook.discordUi.messageTitle}
            placeholder="Informe o titulo da mensagem"
            onChange={discordHook.handleChange}
          />
        </div>
        <div>
          <label>Titulo do embed</label>
          <input
            type="text"
            name="embedTitle"
            value={discordHook.discordUi.embedTitle}
            placeholder="Informe o titulo do embed"
            onChange={discordHook.handleChange}
          />
        </div>
        <div>
          <label>Link a ser redirecionado</label>
          <input
            type="url"
            name="linkToRedirectTo"
            value={discordHook.discordUi.linkToRedirectTo}
            placeholder="digite o link aqui"
            onChange={discordHook.handleChange}
          />
        </div>
        <div>
          <label>Conteudo do embed</label>
          <input
            type="text"
            name="embedContent"
            value={discordHook.discordUi.embedContent}
            placeholder="Informe o conteudo do embed"
            onChange={discordHook.handleChange}
          />
        </div>

        <div className="btn-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;

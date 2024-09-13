import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { DiscordUi, discordUiDefault } from "./ui/DiscordUi";
import { DiscordApiService } from "./services/DiscordApiService";

function App() {
  const [discordUi, setDiscordUi] = useState<DiscordUi>(discordUiDefault);

  const discordApiService = new DiscordApiService();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDiscordUi((oldValueState) => ({
      ...oldValueState,
      [name]: value,
    }));
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(discordUi);

    if (
      discordUi.botName != "" &&
      discordUi.embedContent != "" &&
      discordUi.embedTitle != "" &&
      discordUi.linkToRedirectTo != "" &&
      discordUi.messageTitle != ""
    ) {
      await discordApiService.sendMessage(discordUi);
    }
  };

  return (
    <div>
      <h1>Discord Detona</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do bot</label>
          <input
            type="text"
            value={discordUi.botName}
            name="botName"
            placeholder="Informe o nome do bot"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Titulo da mensagem</label>
          <input
            type="text"
            name="messageTitle"
            value={discordUi.messageTitle}
            placeholder="Informe o titulo da mensagem"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Titulo do embed</label>
          <input
            type="text"
            name="embedTitle"
            value={discordUi.embedTitle}
            placeholder="Informe o titulo do embed"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Link a ser redirecionado</label>
          <input
            type="url"
            name="linkToRedirectTo"
            value={discordUi.linkToRedirectTo}
            placeholder="digite o link aqui"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Conteudo do embed</label>
          <input
            type="text"
            name="embedContent"
            value={discordUi.embedContent}
            placeholder="Informe o conteudo do embed"
            onChange={handleChange}
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

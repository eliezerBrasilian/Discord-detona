import axios from "axios";
//import { api } from "../api/client";
import { DicordUitoDiscordDataMapper } from "../data/mapper/DicordUitoDiscordDataMapper";
import { DiscordUi } from "../ui/DiscordUi";

export class DiscordApiService {
  async sendMessage(discordUi: DiscordUi) {
    var data = DicordUitoDiscordDataMapper(discordUi);

    try {
      // await api.post("", data);

      await axios.post("/api/requisicao/", data);
      console.log("suceso");
    } catch (error: any) {
      alert("um erro ocorreu");
    }
  }
}

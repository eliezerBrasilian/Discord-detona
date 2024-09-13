import { api } from "../api/client";
import { DicordUitoDiscordDataMapper } from "../data/mapper/DicordUitoDiscordDataMapper";
import { DiscordUi } from "../ui/DiscordUi";

export class DiscordApiService {
  async sendMessage(discordUi: DiscordUi) {
    var data = DicordUitoDiscordDataMapper(discordUi);

    try {
      await api.post("", data);
    } catch (error: any) {
      alert("um erro ocorreu");
    }
  }
}

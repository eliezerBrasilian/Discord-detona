import { DiscordUi } from "../../ui/DiscordUi";

export function DicordUitoDiscordDataMapper(discordUi: DiscordUi) {
  return {
    username: discordUi.botName,
    avatar_url: "",
    content: discordUi.messageTitle,
    embeds: [
      {
        title: discordUi.embedTitle,
        description: `Clique no [link](${discordUi.linkToRedirectTo}) para acessar.`,
        color: 5814783,
      },
    ],
  };
}

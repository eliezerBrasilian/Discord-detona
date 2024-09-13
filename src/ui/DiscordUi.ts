export interface DiscordUi {
  botName: string;
  messageTitle: string;
  embedTitle: string;
  linkToRedirectTo: string;
  embedContent: string;
}

export const discordUiDefault: DiscordUi = {
  botName: "",
  messageTitle: "",
  embedTitle: "",
  linkToRedirectTo: "",
  embedContent: "",
};

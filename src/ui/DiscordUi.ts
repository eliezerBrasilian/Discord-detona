export interface DiscordUi {
  botName: string;
  messageTitle: string;
  embedTitle: string;
  linkToRedirectTo: string;
  embedContent: string;
}

export const discordUiDefault: DiscordUi = {
  botName: "Teste",
  messageTitle: "mensagem",
  embedTitle: "titulo",
  linkToRedirectTo: "http://exemplo",
  embedContent: "embed content",
};

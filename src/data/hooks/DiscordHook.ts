import { useState, ChangeEvent } from "react";
import { DiscordUi, discordUiDefault } from "../../ui/DiscordUi";
import { DiscordApiService } from "../../services/DiscordApiService";

export function DiscordHook() {
  const [discordUi, setDiscordUi] = useState<DiscordUi>(discordUiDefault);
  const discordApiService = new DiscordApiService();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDiscordUi((oldValueState) => ({
      ...oldValueState,
      [name]: value,
    }));
  };

  const handleSendMessage = async () => {
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

  return {
    discordUi,
    handleChange,
    handleSendMessage,
  };
}

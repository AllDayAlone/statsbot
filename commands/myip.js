const { SlashCommandBuilder } = require("discord.js")
const axios = require("axios").default

const template = ({ ip, country }) => `
**My Public IP Address:** ${ip}
**My IP Location:** ${country}
`

module.exports = {
  data: new SlashCommandBuilder()
    .setName("myip")
    .setDescription("Convenient command to check your IP"),
  async execute(interaction) {
    console.log(interaction)
    await axios({
      method: "get",
      url: "https://api.myip.com",
      responseType: "json",
    })
      .then((response) => {
        interaction.reply(template(response.data))
      })
      .catch((error) => {
        interaction.reply("Something went wrong!")
      })
  },
}

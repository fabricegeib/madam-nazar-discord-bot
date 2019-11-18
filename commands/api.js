const fetch = require("node-fetch");

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const formatDateTweet = date => {
  let newDate = date.toDateString().slice(4);
  newDate.substring(0, date.length - 5);

  return newDate.substring(0, newDate.length - 5);
};

module.exports = {
  name: "findnazar",
  description: "Respond with Madam Nazar location",
  execute(message, args) {
    fetch(
      "https://madam-nazar-location-api.herokuapp.com/location/current"
    ).then(function(response) {
      var contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          console.log(json.data.location.image);
          const botAnswer = `🚩 Today ${formatDateTweet(
            new Date()
          )} 📅\nMadam Nazar was found in the region of **${capitalize(
            json.data.location.region.precise
          )}** \nIn the **${capitalize(
            json.data.location.region.name
          )}** territory. \n🗺  ${json.data.location.image.normal.full}`;
              message.channel.send(botAnswer);

        });
      } else {
        console.log("Oops, nous n'avons pas du JSON!");
      }
    });
  }
};

import React from "react";

const App = () => {

  var client_id = "74329acf00924b76bf51cc36fee87e21";
  var client_secret = "dd9dfc7c5b954cc3bce753ba28e71174";

  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
    }
  });

  return <div>App</div>;
};

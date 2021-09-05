// utils
const { CREATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return formattedResponse(405, { error: "Method not supported" });
  }

  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };

  try {
    const { createLink } = await sendQuery(CREATE_LINK, variables);
    return formattedResponse(200, createLink);
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { error: "Something went wrong." });
  }
};

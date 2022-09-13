import dbConnect from "../../../dbConnect";
import Card from "../../../models/Card";
// API-Route
// localhost:3000/api/card/create
export default async function create(request, response) {
  await dbConnect();
  try {


    // HTTP Verben GET POST PUT DELETE:::
    //CREATE => POST , READ => GET, Update => PUT, Delete => DELETE
    if (request.method === "POST") {
    // request.body wird von NextJS als JSON bereits interpretiert
      Card.create(request.body);
      response.status(201).json("A card was added! 🎉");
    }
  } catch (error) {
    console.log("A card could not be added. 😟");
    console.error(error);
  }
}
import dbConnect from '../../../dbConnect';
import Card from '../../../models/Card'; 

export default async function handler(request, response) {
    await dbConnect(); 
  const { id } = request.query;  //request.query.id

  switch (request.method) {
   
    case 'DELETE': {
      await Card.findByIdAndDelete(id);
      response.status(200).json({ message: 'Die Karte ist weg' });
      break;
    }
    default:
      response.status(405).json({ message: 'Das war nix' });
  }
}
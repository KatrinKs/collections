import { DataService } from "./dataService";

class CollectionService extends DataService  {

  constructor() {
      super("/collections");
  }
  lol() {
      let key = super.create({
          name: 'My Favorite books',
          description: 'An ultimate collection of Sci-Fi books of my childhood',
          items: [
              {
                  name: 'Foundation, by Isaac Asimov (1951)'
              }
          ]
      });
      console.log('created '+key);
     
  }
}

export default new CollectionService();


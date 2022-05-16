import { DataService } from "./dataService";



class CollectionService extends DataService  {

  constructor() {
      super("/collections");
  }
}

export default new CollectionService();


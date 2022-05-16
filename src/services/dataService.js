<<<<<<< HEAD
import firebase from "../firebase";
=======
import {db} from "../firebase";
import {push, set, get, child,  ref, onValue, remove, update} from "firebase/database";

console.log(db)
>>>>>>> 70ced950b1b4a92c33ba52cf11b82c80b1e4abe8

class DataService {

 constructor(path) {
     this.basePath = path
 }
     
  ref(addition) {
      if (addition) 
        return ref(db, this.basePath+'/'+addition) 
      return ref(db, this.basePath);
  }

  get(key) {
    get(child(this.ref(), this.basePath+'/'+key).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return snapshot.val();
        } else {
          console.log("No data available");
          return null;
        }
      }).catch((error) => {
        console.error(error);
        return null;
      }));
  }

  create(value) {
        return push(child(this.ref()), value).then((it) => {
            return it.key;
        }).catch((error) => {
            console.log(error);
            return null
        });
  }

  set(key, value) {
    set(this.ref(key), value);
  }

  update(key, value) {
    return update(child(this.ref(key)), value
        ).catch((error) => {
        console.log(error);
        return null
    });
  }

  delete(key) {
    return remove(child(this.ref()), key
        ).catch((error) => {
        console.log(error);
        return null
    });
  }  

  deleteAll() {
    return remove(this.ref());
  }
//   getRef() {
//       return this.dbRef;
//   }
  
//   get(key) {
//     return this.db.getOnce(key);
//   }

//   create(object) {
//     return this.db.push(object);
//   }

//   update(key, value) {
//     return this.db.child(key).update(value);
//   }

//   delete(key) {
//     return this.db.child(key).remove();
//   }

//   deleteAll() {
//     return this.db.remove();
//   }
}

export  {DataService as DataService};
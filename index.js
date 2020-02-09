const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      
      let loopThruArray = [];
      if (Array.isArray(collection)) {
        loopThruArray = collection.slice();
        for (let i = 0; i < loopThruArray.length; i++) {
          callback(loopThruArray[i], i, loopThruArray);
        }
      } else { // it's an object
        loopThruArray = Object.entries(collection)
        for (const [key, value] of loopThruArray) {
          callback(value, key, loopThruArray);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let loopThruArray = [];
      let resultArr = [];
      if (Array.isArray(collection)) {
        loopThruArray = collection.slice();
        
        for (let i = 0; i < loopThruArray.length; i++) {
          resultArr.push(callback(loopThruArray[i], i, loopThruArray));
        }
      } else { // it's an object
        loopThruArray = Object.entries(collection)
        for (const [key, value] of loopThruArray) {
          resultArr.push(callback(value, key, loopThruArray));
        }
      }
      return resultArr;

    },

    reduce: function(collection, callback, acc) {
      let loopThruArray = [];
      let i = 0;
      if (Array.isArray(collection)) {
        loopThruArray = collection.slice(); 
      } else { // it's an object
        loopThruArray = Object.values(collection);
      }
      if (acc) {
         i = 0;
      } else {
        acc = loopThruArray[0];
        i = 1;
      }
      for (; i < loopThruArray.length; i++) {
        acc = callback(acc, loopThruArray[i], loopThruArray);
      }
      return acc;
    },

    find: function(collection, predicate) {
      let loopThruArray = [];
      if (Array.isArray(collection)) {
        loopThruArray = collection.slice(); 
      } else { // it's an object
        loopThruArray = Object.values(collection);
      }
      for (let i = 0; i < loopThruArray.length; i++) {
        if (predicate(loopThruArray[i])){
          return loopThruArray[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      let loopThruArray = [];
      let resultArr = [];
      if (Array.isArray(collection)) {
        loopThruArray = collection.slice(); 
      } else { // it's an object
        loopThruArray = Object.values(collection);
      }
      for (let i = 0; i < loopThruArray.length; i++) {
        if (predicate(loopThruArray[i])){
          resultArr.push(loopThruArray[i]);
        }
      }
      return resultArr;
    },

    size: function (collection){
      if (Array.isArray(collection)) {
        return collection.length;
      } else { // it's an object
        return Object.keys(collection).length;
      }
    },

    first: function(collection, n) {
      if (Array.isArray(collection)) {
        if (n) {
          return collection.slice(0, n);
        } else {
          return collection[0];
        }
      }
      else { // it's an object   
        if (n) {
          return Object.values(collection).slice(0, n);
        } else {
          return Object.values(collection)[0];
        }
      }
    },

    last: function(collection, n) {
      let len = 0;
      if (Array.isArray(collection)) {
        len = collection.length;
        if (n) {
          return collection.slice(len - n);
        } else {
          return collection[len - 1];
        }
      }
      else { // it's an object  
        len = Object.values(collection).length; 
        if (n) {
          return Object.values(collection).slice(len - n);
        } else {
          return Object.values(collection)[len - 1];
        }
      }
    },
    compact: function(myArray){
      const falsyValues = [false, null, 0, "", undefined, NaN];
    
      let resultArray = [];
      
      myArray.map( element => {
        if  (!falsyValues.includes(element)) {
          resultArray.push(element);
        }
      });
      return resultArray;
    },
    
    sortBy: function(myArray, callback){
      
      let resultArray = [];
      
      myArray.map( element => {
        if  (!falsyValues.includes(element)) {
          resultArray.push(element);
        }
      });
      return resultArray;
    },
    functions: function() {

    },


  }
})()

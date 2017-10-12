// create an object from given array

export function objectFromArray(arr, key = 'id'){
  if( arr && arr.length ){
    return arr.reduce((v, i) => {
      v[i[key]] = i;
      return v;
    }, {});
  } else {
    return {};
  }
}

// create an array from given objectFromArray
export function arrayFromObject(obj, key = 'id'){
  return Object.keys(obj).map(key => (obj[key]));
}

// create a random id
export function guid() {
  return;
}

// get sorted posts array based on sorting preferences
export function getSortedPostsArray(posts, sortingPref) {
  const postsArray = arrayFromObject(posts, 'id');
  if(sortingPref){
    switch (sortingPref) {
      case 'byScore':
        return postsArray.sort((a, b) => (a.voteScore < b.voteScore));
      case 'byDate':
        return postsArray.sort((a, b) => (a.timestamp < b.timestamp));
      default:
        return postsArray;
    }
  }else{
    return postsArray;
  }
}

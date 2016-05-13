const friends1 = [
  [1,1,0],
  [1,1,1],
  [0,1,1],
]; // => 1

const friends2 = [
  [1,1,0],
  [1,1,0],
  [0,0,1],
]; // => 2

const friends3 = [
  [1,0,0],
  [0,1,0],
  [0,0,1],
]; // => 3

const friends4 = [
  [1,0,0,0,1],
  [0,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1],
  [1,0,0,1,1],
]; // => 3

const friendCircles = friends => {
  const circles = new Set(); // will be full of sets
  let iCircle, jCircle;
  for (let i = 0; i < friends.length; i++) {
    for (let j = i; j < friends[i].length; j++) {
      if (friends[i][j]) {
        iCircle = jCircle = false;
        circles.forEach(circle => {
          iCircle = iCircle || circle.has(i) && circle;
          jCircle = jCircle || circle.has(j) && circle;
        });
        if (iCircle && jCircle) {
          if (iCircle !== jCircle) {
            jCircle.forEach(kid => iCircle.add(kid));
            circles.delete(jCircle);
          }
        } else if (iCircle) {
          iCircle.add(j);
        } else if (jCircle) {
          jCircle.add(i);
        } else {
          circles.add(new Set([i, j]));
        }
      }
    }
  }
  return circles.size;
}

console.log(friendCircles(friends1) === 1);
console.log(friendCircles(friends2) === 2);
console.log(friendCircles(friends3) === 3);
console.log(friendCircles(friends4) === 3);

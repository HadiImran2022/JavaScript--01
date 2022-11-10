var a = ["a", "b", "c", "d"];
a.push("name");
console.log(a);

var b = ["a", "b", "c", "d"];
b.pop("name");
console.log(b);

var c = ["a", "b", "c", "d"];
c.shift("name");
console.log(c);

var d = ["a", "b", "c", "d"];
d.unshift("name");
console.log(d);

var e = ["a", "b", "c", "d"];
var f = e.slice(1, 3);
console.log(e);

var g = ["a", "b", "c", "d"];
var h = g.splice(1, 3);
console.log(g);

var b = a.length;
console.log(b);

var i = a.indexOf("d");
console.log(i);

for (var i = 0; i < 20; i++) {
  console.log("abc");
}

for (var i = 0; i < 12; i++) {
  console.log("2 X " + (i + 1) + "=" + 2 * (i + 1));
}

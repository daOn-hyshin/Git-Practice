const map : Map<string, number> = new Map(); //map obeject生成: keyはstring, valueはnumber
map.set("foo",1234);
map.set("hayul",5678);
console.log(map.get("foo")); //1234
console.log(map.get("bar")); //undefined

console.log(map); //Map(2) { 'foo' => 1234, 'hayul' => 5678 }
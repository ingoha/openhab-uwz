var regex = /<div style="float:left;display:block;width:117px;height:110px;padding-top:6px;"><img src="..\/images\/icons\/(.*?)-(.*?).gif" width="117" height="104"><\/div>/ig;
var line = ' <div style="float:left;display:block;width:117px;height:110px;padding-top:6px;"><img src="../images/icons/gewitter-gelb.gif" width="117" height="104"></div>';

console.log(regex.exec(line));

var str = 'tag: <span>'
var re = /<(.*?)>/ig;

console.log(re.exec(str)[1]);

var warnstufen = {gelb: 1, orange: 2, rot: 3, violett: 4};
console.log(warnstufen['gelb']);

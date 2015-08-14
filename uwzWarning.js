// ok, we are running inside rhino here...
// see https://github.com/openhab/openhab/raw/master/bundles/core/org.openhab.core.transform/src/main/java/org/openhab/core/transform/internal/service/JavaScriptTransformationService.java
// and https://docs.oracle.com/javase/7/docs/technotes/guides/scripting/programmer_guide/

// logic from http://knx-user-forum.de/forum/%C3%B6ffentlicher-bereich/knx-eib-forum/code-schnipsel/16534-unwetterzentrale
(function() {
	var lines = input.split('\n');
	var regex = '/<div style="float:left;display:block;width:117px;height:110px;padding-top:6px;"><img src="..\/images\/icons\/(.*?)-(.*?).gif" width="117" height="104"><\/div>/i'

	var type_max = 0;
	var level_max = 0;
	for (var i = 0; i < lines.length; i += 1) {
		var type = (regex.exec(lines[i]) && regex.exec(lines[i]).$1) || type_max;
		var level = (regex.exec(lines[i]) && regex.exec(lines[i]).$2) || level_max;
		if (type > type_max) type_max = type;
		if (level > level_max) type_max = type;
	}
	// TBD: how to return warning level?
	return type_max;
}(input))

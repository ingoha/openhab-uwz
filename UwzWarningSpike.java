import javax.xml.parsers.*;
import org.w3c.dom.*;

public class UwzWarningSpike {

	public static void main() {
		String input = "<html><head><title>Test</title></head><body><h1>Test</h1></body></html>";
		Document document = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(input);
		return 0;
	}
}


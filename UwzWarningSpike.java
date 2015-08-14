import java.io.*;
import org.xml.sax.InputSource;
import javax.xml.parsers.*;
import org.w3c.dom.*;

public class UwzWarningSpike {

	public static void main(String[] args) throws Exception {
		String input = "<html><head><title>Test</title></head><body><h1>Test</h1></body></html>";
		Document document = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(new InputSource(new StringReader(input)));
		
		NodeList h1s = document.getElementsByTagName("h1");
        for (int i = 0; i < h1s.getLength(); i += 1) {
            System.out.println(h1s.item(i).getTextContent());
        }

		System.exit(0);
	}
}


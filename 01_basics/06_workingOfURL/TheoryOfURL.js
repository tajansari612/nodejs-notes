// A URL (Uniform Resource Locator) is the address of a unique resource on 
// the internet. It is one of the key mechanisms used by browsers to 
// retrieve published resources, such as HTML pages, CSS documents, images, 
// and so on.



// Basics: anatomy of a URL
// Here are some examples of URLs:
// https://developer.mozilla.org
// https://developer.mozilla.org/en-US/docs/Learn/
// https://developer.mozilla.org/en-US/search?q=URL

// Any of those URLs can be typed into your browser's address bar to tell it
//  to load the associated resource, which in all three cases is a Web page.

// A URL is composed of different parts, some mandatory and others optional. 
// The most important parts are highlighted on the URL in image 01_mdn-url-all.png



//01 Scheme (Protocol)
// The first part of the URL is the scheme, which indicates the protocol 
// that the browser must use to request the resource (a protocol is a set 
// method for exchanging or transferring data around a computer network). 
// Usually for websites the protocol is HTTPS or HTTP (its unsecured version).
// Addressing web pages requires one of these two, but browsers also know
// how to handle other schemes such as mailto: (to open a mail client),
// so don't be surprised if you see other protocols.



//02 Authority (Domain name and Port)
// Next follows the authority, which is separated from the scheme by the
// character pattern ://. If present the authority includes both the domain 
// (e.g. www.example.com) and the port (80), separated by a colon:
// Then:
//i) The domain indicates which Web server is being requested. Usually this is
//  a domain name, but an IP address may also be used (but this is rare as it 
// is much less convenient).

//ii) The port indicates the technical "gate" used to access the resources 
// on the web server. It is usually omitted if the web server uses the 
// standard ports of the HTTP protocol (80 for HTTP and 443 for HTTPS) to 
// grant access to its resources. Otherwise it is mandatory.


//03) Path to resource file
// /path/to/myfile.html is the path to the resource on the Web server. In 
// the early days of the Web, a path like this represented a physical file 
// location on the Web server. Nowadays, it is mostly an abstraction handled 
// by Web servers without any physical reality.


//04) Parameters
// ?key1=value1&key2=value2 are extra parameters provided to the Web server. 
// Those parameters are a list of key/value pairs separated with the & 
// symbol. The Web server can use those parameters to do extra stuff before 
// returning the resource. Each Web server has its own rules regarding 
// parameters, and the only reliable way to know if a specific Web server is 
// handling parameters is by asking the Web server owner.
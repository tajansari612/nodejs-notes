// Representational State Transfer (REST) is a software architecture that 
// imposes conditions on how an API should work. REST was initially created 
// as a guideline to manage communication on a complex network like the 
// internet. You can use REST-based architecture to support high-performing 
// and reliable communication at scale. You can easily implement and modify 
// it, bringing visibility and cross-platform portability to any API system.

// API developers can design APIs using several different architectures. 
// APIs that follow the REST architectural style are called REST APIs. Web 
// services that implement REST architecture are called RESTful web services. 
// The term RESTful API generally refers to RESTful web APIs. However, you 
// can use the terms REST API and RESTful API interchangeably.

// The following are some of the principles of the REST architectural style:

// Uniform interface:
// The uniform interface is fundamental to the design of any RESTful webservice.
// It indicates that the server transfers information in a standard format. 
// The formatted resource is called a representation in REST. 
// Resources should have a uniform or fixed set of operations, such as PUT, GET, 
// POST, and DELETE operations. This is a key principle that differentiates between 
// a REST web service and a non-REST web service.
// This format can be different from the internal representation of 
// the resource on the server application. For example, the server can store 
// data as text but send it in an HTML representation format.

// Uniform interface imposes four architectural constraints:

//01 Requests should identify resources. They do so by using a uniform resource 
// identifier.

//02 Clients have enough information in the resource representation to modify or 
// delete the resource if they want to. The server meets this condition by 
// sending metadata that describes the resource further.

//03 Clients receive information about how to process the representation further. 
// The server achieves this by sending self-descriptive messages that contain 
// metadata about how the client can best use them.

//04 Clients receive information about all other related resources they need to 
// complete a task. The server achieves this by sending hyperlinks in the 
// representation so that clients can dynamically discover more resources.



// Statelessness
// In REST architecture, statelessness refers to a communication method in which 
// the server completes every client request independently of all previous 
// requests. Clients can request resources in any order, and every request is 
// stateless or isolated from other requests. This REST API design constraint 
// implies that the server can completely understand and fulfill the request 
// every time. 



// Layered system
// In a layered system architecture, the client can connect to other authorized 
// intermediaries between the client and server, and it will still receive 
// responses from the server. Servers can also pass on requests to other servers. 
// You can design your RESTful web service to run on several servers with 
// multiple layers such as security, application, and business logic, working 
// together to fulfill client requests. These layers remain invisible to the 
// client.



// Cacheability
// RESTful web services support caching, which is the process of storing some 
// responses on the client or on an intermediary to improve server response time. 
// For example, suppose that you visit a website that has common header and 
// footer images on every page. Every time you visit a new website page, the 
// server must resend the same images. To avoid this, the client caches or 
// stores these images after the first response and then uses the images 
// directly from the cache. RESTful web services control caching by using API 
// responses that define themselves as cacheable or noncacheable.



// Code on demand
// In REST architectural style, servers can temporarily extend or customize 
// client functionality by transferring software programming code to the client. 
// For example, when you fill a registration form on any website, your browser 
// immediately highlights any mistakes you make, such as incorrect phone numbers. 
// It can do this because of the code sent by the server.



// RESTful Architecture:

//01 Division of State and Functionality: 
// State and functionality are divided into distributed resources. This is 
// because every resource has to be accessible via normal HTTP commands. 
// That means a user should be able to issue the GET request to get a file, 
// issue the POST or PUT request to put a file on the server, or issue the 
// DELETE request to delete a file from the server.

//02 Stateless, Layered, Caching-Support, Client/Server Architecture: A type 
// of architecture where the web browser acts as the client, and the web 
// server acts as the server hosting the application, is called a 
// client/server architecture. The state of the application should not be 
// maintained by REST. The architecture should also be layered, meaning that 
// there can be intermediate servers between the client and the end server. 
// It should also be able to implement a well-managed caching mechanism.



// Advantages of RESTful web services: 
// Speed: As there is no strict specification, RESTful web services are 
// faster as compared to SOAP. It also consumes fewer resources and bandwidth.

// Compatible with SOAP: RESTful web services are compatible with SOAP, which 
// can be used as the implementation.

// Language and Platform Independency: RESTful web services can be written in 
// any programming language and can be used on any platform.

// Supports Various Data Formats: It permits the use of several data formats 
// like HTML, XML, Plain Text, JSON, etc.
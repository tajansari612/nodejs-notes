// What is HTTP?
// The Hypertext Transfer Protocol (HTTP) is designed to enable 
// communications between clients and servers.
// HTTP works as a request-response protocol between a client and server.

// HTTP Methods:
// GET
// POST
// PUT
// DELETE
// PATCH

// The two most common HTTP methods are: GET and POST.


//01) The GET Method
// GET is used to request data from a specified resource(server).
// Note that the query string (name/value pairs) is sent in the URL of a GET 
// request:
//example: /test/demo_form.php?name1=value1&name2=value2

// Some notes on GET requests:
// GET requests can be cached
// GET requests remain in the browser history
// GET requests can be bookmarked
// GET requests should never be used when dealing with sensitive data
// GET requests have length restrictions
// GET requests are only used to request data (not modify)


//02) The POST Method
// POST is used to send data to a server to create/update a resource.
// The data sent to the server with POST is stored in the request body of 
// the HTTP request:
// example: (for submiting form data)
// POST /test/demo_form.php HTTP/1.1
// Host: w3schools.com
// name1=value1&name2=value2

// Some notes on POST requests:
// POST requests are never cached
// POST requests do not remain in the browser history
// POST requests cannot be bookmarked
// POST requests have no restrictions on data length


//03) The PUT Method
// PUT is used to send data to a server to create/update a resource.
// The difference between POST and PUT is that PUT requests are idempotent. 
// That is, calling the same PUT request multiple times will always produce 
// the same result. In contrast, calling a POST request repeatedly have side 
// effects of creating the same resource multiple times.
//example: put images, pdf, audio files to the server


//04) The DELETE Method
// The DELETE method deletes the specified resource.

//05) The PATCH Method
// The PATCH method is used to apply partial modifications to a resource 
// (like database data).
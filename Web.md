- What are the common HTTP methods? When are they used, and what do they accomplish? 

GET

The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.

POST

A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

PUT(PATCH)

Replaces all current representations of the target resource with the uploaded content.


`HTTP.PUT` can be used when the client is sending data to the server and the client is determining the URI for the newly created resource.

`HTTP.PATCH` can be used when the client is sending one or more changes to be applied by the server. 

DELETE

Removes all current representations of the target resource given by a URI.


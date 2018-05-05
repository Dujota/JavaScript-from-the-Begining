// What is Ajax = Asyncronous Javascript And Xml

/*
not a framework or a library, or a lnguage, set of web technologies to send and receive data from a client to a server behind the scene without the need to reload the webpage

XML is not really used anymore, it has been redplace by JSON. almost all APIs return JSON

Request to server:
1.) client sends JS call to Ajax engine, 
2.) the engine sends an XmlHttpRequest to Server

Response from Server: 
3.) XML/JSON returned to Ajax Engine
4.) Ajax Engine returns HTML resoponse to client

The XmlHttpRequest (XHR) object :
- API in the form of an object
- Provided by the browsers JS environment
- Methods transfer data between client / server
- Can be used with other protocols than HTTP
- Can work with data other than XML (JSON, Plain Text, CSV etc...)


LIBRARIES AND OTHER METHODS
- Fetch API - part of the browser (core Javascript)
- Axios - external
- Superagent - external
- jQuery - not recommended just for Ajax
- Node HTTP - for Node.js, really good if using that for server side






*/
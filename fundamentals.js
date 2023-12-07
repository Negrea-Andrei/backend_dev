//!Introduction to Backend
/*The “frontend” denotes the interface that a web user interacts with - what they see (and hear) when using the web. 
The three languages of the frontend are fairly standardized: HTML for markup, CSS for presentation, and JavaScript for scripting.

The “backend”, meanwhile, denotes all that goes on “behind the scenes” on web servers to make the user experience possible. 
In contrast to front-end development, you can run pretty much any language you want to on your server since it doesn’t rely on your user’s browser 
understanding what’s going on. All the browser cares about is whether you’ve sent it properly formatted HTML, CSS and JavaScript 
files (and other assets like images). That’s led to a whole lot of different choices for back-end languages. 
As long as it can take in an HTTP request and spit out some HTML, you can probably put it on a server somehow.*/

//!Frameworks
/*There are often several different popular frameworks for a given language. They can have exciting names like Ember, Meteor, Django, Rails, Grok, etc.*/

//!Node.JS
/*it was impossible to use JavaScript to write any kind of program that was not a website. Node brings JavaScript out of browser-land. This allows developers to use JavaScript to accomplish pretty much anything that other popular server-side languages such as Ruby, PHP, C# and Python can do.*/
/*Node is an asynchronous event driven JavaScript runtime. In this context asynchronous means that when you write your code you do not try to predict the exact sequence in which every line will run.*/

//?Example
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
  }).listen(8080);
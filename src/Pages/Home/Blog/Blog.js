import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Q.What is cors? ANSWER: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.  </h2>
            <h3>Q.Why are you using firebase?What other options do you have to implement authentication? ANSWER: Using Firebase in your project allows you to focus on the frontend and not so much on the backend because Firebase does a lot of things under the hood for you. The Fundamentals Of Authentication Verification of you by a computer system comes in a few ways: Something you know, such as a password or PIN (personal identifying number); Something you carry, such as a flash drive or a proximity card; or The use of biometrics to authenticate you as an authorized user.</h3>
            <h4>Q.How does the private route works? ANSWER: Private Route. PrivateRoute component is the blueprint for all private routes in the application.  </h4>
            <h2>Q.What is node?How does node works? ANSWER:Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. </h2>
        </div>
    );
};

export default Blog;
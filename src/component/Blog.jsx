import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="border rounded my-5 p-5 italic text-2xl bg-indigo-400 text-white">
        <h3 className ="font-bold mb-3">
          Q. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <p>
          Ans: An access token is a short-lived credential that allows a client
          (web or mobile app) to access protected resources on behalf of an
          authenticated user. It is obtained during the authentication process
          and is included in API requests to authenticate the client. <br />
          A refresh token is a long-lived credential that is used to obtain a
          new access token when the current one expires. It is securely stored
          on the client side and helps avoid the need for the user to
          reauthenticate. <br />
          Access tokens can be stored in memory or browser storage, while
          refresh tokens require more secure storage mechanisms like HTTP-only
          cookies or secure local storage. The storage of tokens on the client
          side should prioritize security to prevent unauthorized access.
        </p>
      </div>
      <div className="border rounded my-5 p-5 italic text-2xl bg-indigo-400 text-white">
        <h3 className ="font-bold mb-3">Q. Compare SQL and NoSQL databases?</h3>
        <p>
          Ans: SQL and NoSQL databases are two types of database systems with
          distinct characteristics: <br />
          1. SQL databases use a structured data model with predefined schemas,
          making them suitable for structured data and complex relationships.{" "}
          <br />
          2. SQL databases scale vertically by adding resources to a single
          server, while NoSQL databases scale horizontally across multiple
          servers. <br />
          3. SQL databases use SQL as the query language, while NoSQL databases
          may have their own query languages or alternative mechanisms. <br />
          4. NoSQL databases use various data models, are schema-less, and offer
          flexibility for handling unstructured or semi-structured data.
        </p>
      </div>
      <div className="border rounded my-5 p-5 italic text-2xl bg-indigo-400 text-white">
        <h3 className ="font-bold mb-3">Q. What is express js? What is Nest JS?</h3>
        <p>Ans: Express Js is framework for node.js. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love. <br />
        Nest.js is also Node.js frameworks. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
         </p>
      </div>
      <div className="border rounded my-5 p-5 italic text-2xl bg-indigo-400 text-white">
        <h3 className ="font-bold mb-3">Q. What is MongoDB aggregate and how does it work</h3>
        <p>Ans: MongoDB is noSQL database server. Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
      </div>
    </div>
  );
};

export default Blog;

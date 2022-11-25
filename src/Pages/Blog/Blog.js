import React from "react";
import UseTitle from "../../Hooks/UseTitle";

const Blog = () => {
  UseTitle("Blog");
  return (
    <section>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          1. What are the different ways to manage a state in a React
          application?
        </div>
        <div className="collapse-content">
          <p>
            A state can be because of an unmanaged state in React. A state is a
            JavaScript object. It stores a component’s dynamic data and
            determines the component’s behavior. In other words, it is the
            interface between any data of changes (backend or local) and the
            representation of this data with UI elements in the frontend.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          2. How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          3. What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          4. React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;

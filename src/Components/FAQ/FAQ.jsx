import React from "react";
import "./FAQ.css";
import faq from "../Assets/FAQ .png";
const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq-text-and-image">
        <div className="faq-text">
          <h1>Frequently Asked Questions</h1>
          <div className="questions-and-answers">
            <div className="question-group question1-and-answer">
              <div className="question">
                <h3>How to order a Pizza?</h3>
                <p>&gt;</p>
              </div>
              <div className="answer">
                <h3>How to order a Pizza?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quia neque in perspiciatis possimus voluptatem
                  delectus veniam consequatur. Ducimus ullam omnis illo dolores
                  doloribus iste voluptates. Temporibus, libero. Quae aliquam
                  rem quos similique dolorum totam officia labore, pariatur, cum
                  sit suscipit id deserunt, molestias repellendus. Ad cum
                  repudiandae quo architecto!
                </p>
              </div>
            </div>
            <div className="question-group question2-and-answer">
              <div className="question">
                <h3>What does different deliveries mean?</h3>
                <p>&gt;</p>
              </div>
              <div className="answer">
                <h3>What does different deliveries mean?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quia neque in perspiciatis possimus voluptatem
                  delectus veniam consequatur. Ducimus ullam omnis illo dolores
                  doloribus iste voluptates. Temporibus, libero. Quae aliquam
                  rem quos similique dolorum totam officia labore, pariatur, cum
                  sit suscipit id deserunt, molestias repellendus. Ad cum
                  repudiandae quo architecto!
                </p>
              </div>
            </div>
            <div className="question-group question3-and-answer">
              <div className="question">
                <h3>When do you work?</h3>
                <p>&gt;</p>
              </div>
              <div className="answer">
                <h3>When do you work?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quia neque in perspiciatis possimus voluptatem
                  delectus veniam consequatur. Ducimus ullam omnis illo dolores
                  doloribus iste voluptates. Temporibus, libero. Quae aliquam
                  rem quos similique dolorum totam officia labore, pariatur, cum
                  sit suscipit id deserunt, molestias repellendus. Ad cum
                  repudiandae quo architecto!
                </p>
              </div>
            </div>
            <div className="question-group question4-and-answer">
              <div className="question">
                <h3>How many dishes do you have?</h3>
                <p>&gt;</p>
              </div>
              <div className="answer">
                <h3>How many dishes do you have?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quia neque in perspiciatis possimus voluptatem
                  delectus veniam consequatur. Ducimus ullam omnis illo dolores
                  doloribus iste voluptates. Temporibus, libero. Quae aliquam
                  rem quos similique dolorum totam officia labore, pariatur, cum
                  sit suscipit id deserunt, molestias repellendus. Ad cum
                  repudiandae quo architecto!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-image">
          <img src={faq} alt="" />
        </div>
      </div>
      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <div className="email-input">
          <input type="email" placeholder="Enter your email" />
          <p>&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

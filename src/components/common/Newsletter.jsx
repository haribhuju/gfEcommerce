import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="px-4 lg:px-8">
        <div>
          <div>
            <div>
              <h3>Join our newsletter</h3>
              <p>We’ll send you a nice letter once per week. No spam.</p>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;

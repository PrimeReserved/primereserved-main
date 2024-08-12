import Link from "next/link";
import React from "react";

const SubscribePage: React.FC = () => {
  return (
    <section className="p-4 pt-28 md:px-20">
      <div className="mx-auto max-w-xl rounded-lg border-t-4 border-[#AC04FF] p-8 shadow-lg">
        <Link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
        <form
          action="https://gmail.us13.list-manage.com/subscribe/post?u=d67769293660de30aa69b49a7&id=ac35800b0b&f_id=00b322e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Never Miss an Update—Be the First to Know When We Launch Something
            New!
          </h2>
          <div className="indicates-required mb-4 text-sm text-gray-600">
            <span className="text-red-500">*</span> indicates required
          </div>
          <div className="mb-4">
            <label
              htmlFor="mce-EMAIL"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-transparent sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mce-FNAME"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-transparent sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mce-LNAME"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="LNAME"
              id="mce-LNAME"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-transparent sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mce-MMERGE6"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              How Did You Hear About Us?
            </label>
            <input
              type="text"
              name="MMERGE6"
              id="mce-MMERGE6"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-transparent sm:text-sm"
            />
          </div>
          <div id="mce-responses" className="clear foot">
            <div
              className="response text-red-500"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response text-green-500"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-5000px" }}
          >
            <input
              type="text"
              name="b_d67769293660de30aa69b49a7_ac35800b0b"
              tabIndex={-1}
              value=""
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="hover:bg-primary-dark w-full cursor-pointer rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribePage;

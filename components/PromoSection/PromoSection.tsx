import React from "react";
import VideoButton from "../VideoButton/VideoButton";
import { Clock, Zap, CheckCircle } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Need Your Website{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Deployed Faster?
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Skip the long development wait times. We've already built
              high-converting websites for popular industries. Find yours and
              get online in days, not weeks.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Lightning Fast
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Get your website deployed in days instead of weeks with our
                pre-built solutions.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Proven Designs
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                All our pre-built websites are tested and optimized for maximum
                conversions.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Time Saver
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Focus on your business while we handle the technical setup and
                customization.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="rounded-2xl bg-white p-8 dark:bg-gray-800"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              See How It Works
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
              Watch our quick explainer video to understand how our Deploy
              Faster service can get your business online faster than
              traditional development approaches.
            </p>

            <VideoButton />

            <p className="mx-auto mt-6 max-w-xl text-sm text-gray-500 dark:text-gray-400">
              Already have something specific in mind? Our custom development
              service is always available for unique projects that require a
              completely tailored approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

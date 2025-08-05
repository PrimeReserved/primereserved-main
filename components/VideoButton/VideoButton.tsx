"use client";
import React, { useState } from "react";
import { X, Play } from "lucide-react";
import IconButton from "../Buttons/IconButton";
import BtnArrowIcon from "../Buttons/BtnArrowIcon";

const VideoButton = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      {/* Video Button */}
      <button
        onClick={openVideo}
        className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-white/30">
          <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
        </div>
        <span>Watch How It Works</span>
      </button>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-sm">
          <div className="flex min-h-screen flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeVideo}
                className="rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Video Container */}
            <div className="flex flex-1 flex-col justify-center px-4 pb-8">
              <div className="mx-auto w-full max-w-6xl">
                <div
                  className="relative mb-8"
                  style={{ padding: "56.25% 0 0 0" }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/1107290654?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                    }}
                    title="Deploy Faster - promo video 4"
                  />
                </div>

                {/* Content Below Video */}
                <div className="space-y-6 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-8">
                  <div className="text-center">
                    <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                      Ready to Get Started?
                    </h3>
                    <p className="mx-auto mb-6 max-w-3xl text-sm text-white/80 md:text-base">
                      Check out our pre-built websites to see if we've already
                      created something perfect for your industry. If you find a
                      match, you can get your website deployed much faster!
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    {/* Link to Deploy Faster */}
                    <a
                      href="https://deployfaster.primereserved.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
                    >
                      <span>Browse Pre-Built Websites</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>

                    <span className="hidden text-white/60 sm:block">or</span>

                    {/* Contact Form Button */}
                    <div>
                      <IconButton
                        text="Contact us now"
                        icon={<BtnArrowIcon />}
                      />
                    </div>
                  </div>

                  <p className="mx-auto max-w-2xl text-center text-xs text-white/60 md:text-sm">
                    Don't see something that fits your needs? No problem! Come
                    back here and use our contact form to tell us about your
                    specific project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoButton;

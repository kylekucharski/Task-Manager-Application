"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function GTMInitialiser() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-M8ZWKLJT",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
  return null;
}

export default GTMInitialiser;
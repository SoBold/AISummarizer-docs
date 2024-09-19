import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: <span>AI Summarizer</span>,
    useNextSeoProps() {
        return {
            titleTemplate: "%s - AI Summarizer",
        };
    },
    project: {
        link: "https://github.com/SoBold/AISummarizer",
    },
    docsRepositoryBase: "https://github.com/SoBold/AISummarizer-docs",
    footer: {
        text: "AISummarizer Docs | SoBold",
    },
};

export default config;

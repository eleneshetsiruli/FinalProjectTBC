import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

      // ESLint rules configuration
      rules: {
        "react/react-in-jsx-scope": "off", // Allow JSX without importing React
      },

      // Language options like global variables (browser globals in this case)
      languageOptions: {
        globals: globals.browser,
      },

      // Plugin configurations
      plugins: ["react", "@typescript-eslint"],
      extends: [
        pluginJs.configs.recommended,
        ...tseslint.configs.recommended,
        pluginReact.configs.flat.recommended,
      ],
    },
  ],
};

module.exports = {
  extends: ["airbnb", "prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "react/prop-types": 0,
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
  },
}

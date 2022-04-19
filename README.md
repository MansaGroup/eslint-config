# Mansa ESLint Configuration

This repository contains the ESLint configuration for projects at [Mansa](https://github.com/MansaGroup)

# Installation

`npm i -D @mansagroup/eslint-config`

# Usage 

Add some ESLint config to your `.eslintrc.json`, for example if you are working on backend services:
```js
{
  "extends": ["@mansagroup/eslint-config/backend"],
}
```
# Extensions

- In VSCode you can select `View > Extensions` to view the extensions sidebar and search in marketplace.

# Testing

1. git clone this project
2. Use `npm pack`
3. Run `npm i yourtargz.tgz` inside the project you wanna test

# Contributing

## Pull Request Process

If you want to submit a PR, please follow these simple steps:
  1. Add some informations in the PR description about the proposed changes listing.
  2. Following testing & approval, we will merge the PR, create a release and publish it to NPM.

## Helpful links
[Eslint shareable configuration](https://eslint.org/docs/developer-guide/shareable-configs)
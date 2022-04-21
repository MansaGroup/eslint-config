# Mansa's ESLint configuration

![License](https://img.shields.io/github/license/MansaGroup/eslint-config?style=flat-square) ![GitHub Stars](https://img.shields.io/github/stars/MansaGroup/eslint-config?style=flat-square)

This repository contains the ESLint configuration for projects at [Mansa](https://github.com/MansaGroup).

## Rulesets

| Ruleset name  | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| `recommanded` | Common rules for general JS/TS                              |
| `node`        | Rules specific to Node.js applications (mainly for backend) |
| `react`       | Rules specific to React/Next.js applications (for frontend) |
| `fp`          | Additional rules for the fellow functional programmers      |

## Usage

First, install our sharable configuration as an npm package:

```bash
npm i -D @mansagroup/eslint-config
```

Then, modify our ESLint configuration, saying `.eslintrc.js` to extends it
from one or more rulesets:

```js
{
  "extends": [
    "@mansagroup/eslint-config/recommanded",
    "@mansagroup/eslint-config/node"
  ]
}
```

## License

This project is [MIT licensed](LICENSE.txt).

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jeremylvln.fr/"><img src="https://avatars.githubusercontent.com/u/6763873?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jérémy Levilain</b></sub></a><br /><a href="https://github.com/MansaGroup/eslint-config/commits?author=IamBlueSlime" title="Code">💻</a> <a href="#ideas-IamBlueSlime" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

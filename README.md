![Proffy](./.github/proffy.png 'Proffy')

# Proffy :mortar_board:

> :books: Proffy is an online study platform to help students find new teachers :mortar_board:

[![Author](https://img.shields.io/badge/author-yuziem14-8257E5?style=flat-square)](https://github.com/yuziem14)
![Version](https://img.shields.io/badge/version-1.0.0-8257E5?style=flat-square)
![Trail](https://img.shields.io/badge/trail-discovery-8257E5?style=flat-square)
[![License](https://img.shields.io/badge/license-MIT-8257E5?style=flat-square)](LICENSE.md)
![Languages](https://img.shields.io/github/languages/count/yuziem14/proffy?style=flat-square&color=8257E5)
![Stars](https://img.shields.io/github/stars/yuziem14/proffy?style=social)
![Contributors](https://img.shields.io/github/contributors/yuziem14/proffy?style=social)

---

> This project was build during **Next Level Week #2** promoted by [Rocketseat](https://github.com/rocketseat).
>
> This branch is the **Discovery Trail** version, so it's a complete different structure from the code on the master branch.

# :pushpin: Table of Contents

- [Features](#bulb-features)
- [Requirements](#construction-requirements)
- [Installation](#white_check_mark-installation)
- [Quick Start](#rocket-quick-start)
- [Technologies](#fire-technologies)
- [Layouts](#art-layouts)
- [Contributing](#robot-contributing)
- [License](#pencil-license)

# :bulb: Features

- [x] :books: Create new classes
- [x] :mag: List classes filtering by subject, weekday and time
- [x] :coffee: Create connections getting in touch with teachers

# :construction: Requirements

- [x] Git
- [x] Node.js

# :white_check_mark: Installation

**First check if you have all the requirements above, then clone this repository:**

- Using HTTP protocol:

  - `git clone https://github.com/Yuziem14/proffy.git`

- Using SSH protocol:
  - `git clone git@github.com:Yuziem14/proffy.git`

**After clone the repository, go to the discovery branch runing:** `git checkout proffy/discovery`

_Obs: Only clone with SSH if you already have a safe SSH key configured._

# :rocket: Quick Start

Enter in the cloned repository folder running: `cd proffy`

1. In order to install dependencies, run: `npm install`

2. In order to create an .env file, run: `cp .env.example .env` and config the HOST and PORT variables.

3. In order to setup the database, run: `npm run db:migrate`

4. In order to seed the database with some data, run: `npm run db:seed`. **Obs: This is an optional step.**

5. Finally, run your server using: `npm run dev`

_Obs: If you want, use yarn instead of npm._

# :fire: Technologies

This project was build with:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Node.js](https://nodejs.org/en/) + [Express.js](http://expressjs.com/) + [Nunjucks](https://mozilla.github.io/nunjucks/)
- [SQLite](https://sqlite.org/index.html)

# :art: Layouts

> All project layouts is located in :file_folder: [.github/layouts](https://github.com/Yuziem14/proffy/tree/proffy/discovery/.github/layouts)

This project design and prototype was build with [Figma](https://www.figma.com/).

You can import this files to your Figma account and modify them as you want. :pray:

# :robot: Contributing

This project is under MIT license, so feel free to contribue with this project.

# :pencil: License

Read the [License](LICENSE.md) for this project.

---

> _Made with :purple_heart: by Yuri Ziemba._

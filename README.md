# Gatsby Dark Mode (minimal example)

This codebase creates an "MVP" version of rehydration-safe, flicker-free Dark Mode. It's described in more detail on my blog:

https://joshwcomeau.com/gatsby/dark-mode/

You can also play with it live (though, fair warning, it's not a terribly exciting application): https://trusting-bose-add650.netlify.app

---

Notable files:

• gatsby-ssr.js
• src/components/ThemeContext.js
• src/constants.js

# How to build

```
$ npm i -g n \
n 14.2.0 \
npm i -g npm@6.14.5 \
npm i -g yarn@1.22.4 \
yarn global add gatsby-cli@2.12.16 \
git clone https://github.com/notaduck/guldberg_lab.git fresh_download \
cd fresh_download \
npm i \
gatsby develop
```

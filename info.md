# INSTRUCTIONS
A. Create a branch for the docusaurus website(say website).

Run on terminal
1. `npm install --global docusaurus-init'`
2. `docusaurus-init`
3. rename docs-examples-from-docusaurus to docs.
4. Rename blog-examples-from-docusaurus to blog.
5. Add `.gitignore` (with /build /node-modules) for / and /website 
6. Modify /website/siteConfig.js, take current repo for reference
7. npm start.
8. push to the code

B. Publish website on GitHub
1. Create an empty branch gh-pages
2. From the branch website run below on terminal.
3. `cd /website`
4. `GIT_USER=\<username\> npm run publish-gh-pages`

THATS ALL REST CAN BE FOUND HERE:
https://docusaurus.io/
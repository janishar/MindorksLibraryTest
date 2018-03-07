# INSTRUCTIONS
A. Create a branch for the docusaurus website(say website).

1. Clone the repo in different folder and create website and gh-pages branch with orphan node and delete the existing contents. And add user if not global:
3. `git config user.name <user-name>`
4. `git config user.email <user-email>`

Git clone the repo
1. git clone \<repo-url>
2. `git checkout --orphan <branchname>`
3. `git rm --cached -r .`

OR 

Git init and add remote to the existing repo.
1. `git init`
2. `git fetch`
3. `git remote add origin <repo-url>`
4. `git checkout --orphan <branchname>`

Docusaurus:
1. `npm install --global docusaurus-init'`
2. `docusaurus-init`
3. rename docs-examples-from-docusaurus to docs.
4. Rename blog-examples-from-docusaurus to blog.
5. Copy `.gitignore` from /website to /
6. Modify /website/siteConfig.js, take current repo for reference
7. npm start.
8. push to the code

B. Publish website on GitHub
1. Create an empty branch gh-pages if not create
2. From the branch website run below on terminal.
3. `cd /website`
4. `GIT_USER=<username> npm run publish-gh-pages`

THATS ALL REST CAN BE FOUND HERE:
https://docusaurus.io/
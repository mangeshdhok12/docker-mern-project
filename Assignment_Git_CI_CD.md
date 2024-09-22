# TASK 13 : Git and CI/CD Assignment

## Basic Git Commands:

### Initialize a repository:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin master

# TASK 14: Branching Strategy
git checkout -b feature/new-feature

# TASK 15: Merging and Resolving Conflicts:

git merge feature/new-feature

# TASK 16: CI/CD Integration: Explain how to set up a basic CI/CD pipeline using GitHub Actions to automatically test and deploy a Node.js application when changes are pushed to the repository.

To set up a basic CI/CD pipeline using GitHub Actions for a Node.js application, follow these steps:

Create GitHub Repository: Ensure your Node.js project is on GitHub.

Set Up CI Workflow:

In your repository, create a folder .github/workflows/.
Create a file named ci.yml with the following content:

This is the below file
name: Node.js CI/CDon:  push:    branches:      - masterjobs:  build:    runs-on: ubuntu-latest    steps:      - uses: actions/checkout@v2      - name: Set up Node.js        uses: actions/setup-node@v2        with:          node-version: '14'      - run: npm install      - run: npm test


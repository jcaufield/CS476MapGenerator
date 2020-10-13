### To get access to the dev server
- Install Node.js, you get npm from that installation as well
- "git pull" main's most recent updates
- run "npm install" in the project's root folder
- run "npm start"


### Node.js Version
10.14.1; Downloadable @ https://nodejs.org/en/download/releases/

Once downloaded and installed, you should have access to the following npm commands:

### NPM commands (run from project's root folder)

- npm install \[package-name\] 
  - without specifiying a package name, installs the packages listed in the current folder's **package.json** file
  - specifying a package name installs the package and adds it to the current folder's **package.json** file
  
- npm start 
  - Run's the project on a development server with live reloading (behavior controlled by **package.json** file)

### Git commands
- **git pull** Updates local repo with the most recent version of the remote repo
- **git status** View the state of your local branch, (what files need to be added/commited, do you need to push the branch, etc.)  
- **git add** Stage files for your next commit
- **git commit** Add your current commit to the history of the branch, locally
- **git push** Update remote repo with the most recent version of your local commits, per branch
- **git checkout \<branch-name\>** Change your local working branch to branch-name. If branch-name does not exist, create it.
- **git merge \<other-branch-name\>** Combines two branches such that the branch you are currently in contains the new code from other-branch-name.

#### Typical Snapshotting process:

1. git status (to see what files need to be committed)
1. git add -A (adds all files to your commit)
1. git commit -m "\[Short message explaining status of branch\]"
1. git push (to update the remote version of the branch)

#### Typical Merging process: (assume you want to merge "feature" into "main")
1. Update main by running "git pull" in main
2. Check for merge conflicts
  - Either examine the diff report on the pull request for feature on github
  - OR run "git merge main" while in feature to see how the merge will go
  
3. If necessary, fix conflicts
  - if you haven't already, run "git merge main" while in feature
  - git BASH walks you through the process, but you'll have to manually select whether to accept the conflicting change in main, feature, or both
  - test to be sure that your branch still works the way you intended
  
4. Merge the changes into main with "git merge feature" while in main
5. Update the remote repo with "git push"

#### Full references available:
https://github.com/joshnh/Git-Commands
https://git-scm.com/docs

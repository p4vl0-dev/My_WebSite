Welcome to my repository and first web projects!
I am learn git and github repositorys work.
I am get more commits to up ur knowledge about my project.

Main commands in git: (command: exit - exiting from bash)

Using Bash UI for changes .gitignore:
   vi .gitignore
   commands:
      i - insert
      :w - write(save)
      :q - quit

Changing disk: 
   cd W:/Web.projects/web1 (example)

Creating repo:
   git init
   git add README.md
   git branch -m main
   git remote add name_repo https://github.com/p4vl0-dev/My_WebSite.git
   git commit -m "first commit"
   git push -u name_repo main

To make commites and updating repository:
   1. git status - status of files
   2. git add . - local update files
      (for example: git add README.txt - adding file to file directory)
   3. git commit -m "Your commit" - message what u see in git hub, about update
   4. git push -u name_repos main (or nothing tree line) - update files on git hub and sending updates to github repository
   4. a) git push name_repo main --force (Other way to send commits)

Another commands:
   1. git remote - showing list of repositories (them names).
   1(b). git remote -v - showing enternet adresses
   2. git remote rename name_old name_new - renaming repository
   3. git remote remove name_repos - deleting repository
   4. file_name .gitignore - adding file to gitignore file
   5. echo file_name .gitignore - adding file or type of file to ignore list 
   6. git switch name_repo - switching repos branch

Some errors: 
1. "fatal: unable to access 'https://github.com/p4vl0-dev/test.web.git/': Could not resolve host: github.com"
   is: disabled internet connection.
   solution: update enternet connection.
2. Everything up-to-date - dont pushing before get commit (plan: status -> add -> commit -> push)

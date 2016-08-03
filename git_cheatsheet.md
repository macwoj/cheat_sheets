# Git cheat sheet

### Shortcuts
```
git config --global alias.br branch
git config --global alias.bravv 'branch -avv'
git config --global alias.brvv 'branch -vv'
git config --global alias.ch checkout
git config --global alias.me merge
git config --global alias.puo push origin
git config --global alias.sta stash
git config --global alias.staa 'stash apply'
git config --global alias.st status
git config --global alias.su submodule
git config --global alias.suuir 'submodule update --init --recursive'
git config --global alias.lg 'log --oneline --decorate --graph'
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
git config merge.tool vimm -d
git config merge.conflictstyle diff3
git config mergetool.prompt false
```
### Commands
MISC|Description
----|-----------
`git apply yourcoworkers.diff`|apply patch from file
`git branch -avv`|view tracking branches
`git branch -f branch-name new-tip-commit`|move branch pointer to commit
`git branch -d branch_to_delete`|delete local branch
`git branch -m branch_to_rename`|rename local branch
`git branch -u origin/develop`|set current branch to track remote branch
`git checkout filename`|revert changes in file
`git checkout -b newbranch -t origin/develop`|create a new branch , setup remote tracking and switch to it, note that it will be at the origin/develop NOT current commit
`git checkout $(git rev-list -n 1 HEAD -- "$file")^ -- "$file"`|revert deleted file
`git checkout tags/<tag_name>`|
`git cherry-pick develop`|Apply the change introduced by the commit at the tip of the branch and create a new commit
`git cherry-pick sha`|Apply the commit with sha to the current branch 
`git cherry-pick ebe6942^..905e279`|Apply the range of commits to the current branch that is inclusive of both range endpoints 
`git commit --amend`|change last commit message
`git config --global credential.helper cache`|no git password retyping
`git diff HEAD HEAD~1`|compare HEAD to commit right before HEAD
`git fetch --all`|Download objects and refs from all remotes
`git fetch --all; git branch -vv`|update git cache
`git fetch local`|download objects from remote local
`git push origin mwojton:fmlrefactor`|push local mwojton branch to remote fmlrefactor
`git push origin develop`|push local develop branch to remote develop
`git push --force origin develop`|push the local branch ptr to remote CAREFUL !!!!!
`git remote show origin`|show info about remote, show repo URL
`git remote add local ../otherrepo`|add remote branch from local repo in different directory, call it local
`git remote remove local`|remove remote branch local
`get reset`|remove all files from index
`git reset --hard HEAD`|discard any changes
`git reset --hard HEAD~1`|discard last commit
`git rev-parse HEAD`|get sha of current commit

GUI|Description
---|-----------
`gitk&`|
`gitk --all`|open gitk with all branches
`gitk -- filename`|open gitk with only history for filename
`git gui&`|

STAGING|Description
-------|-----------
`git add -i`|interactive staging, enter ? to get description of each option

SUBMODULE|Description
---------|-----------
`git submodule foreach git pull`|update all submodules to latest
`git submodule update --init --recursive`|update to the checked in sha
`git submodule status`|show  sha's of all the submodules
`git pull origin develop`|update submodule to latest develop branch, do this from submodule folder
`git submodule sync`|Synchronizes submodules' remote URL configuration setting to the value specified in .gitmodules

STASH|Description
-----|-----------
`git stash apply stash@{2}`|unstash the specific stash from stack
`git stash list`|get list of stashed commits
`git stash show -p stash@{0}`|show the stash diff
`git stash clear`|clear all stashed
`git checkout stash@{0} -- <filename>`|checkout file from stash
`git stash --keep-index`|stash all files except files checked into index

REBASE|Description
------|-----------
git rebase develop|this will rebase ontop of develop the current branch
git rebase --abort|abort rebase

REBASE SQUASH|Description
-------------|-----------
git rebase -i HEAD~3|squash last 3 commits


MERGE|Description
-----|-----------
git merge feature|merges feature into current branch
git merge --abort|if you get conflicts you can cancel the merge
git mergetool|run for conflicts

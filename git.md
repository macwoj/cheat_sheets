Shortcuts|
---------|
git config --global alias.br branch|
git config --global alias.bravv 'branch -avv'|
git config --global alias.brvv 'branch -vv'|
git config --global alias.ch checkout|
git config --global alias.me merge|
git config --global alias.pu pull|
git config --global alias.sta stash|
git config --global alias.staa 'stash apply'|
git config --global alias.st status|
git config --global alias.su submodule|
git config --global alias.suuir 'submodule update --init --recursive'|
git config --global alias.lg 'log --oneline --decorate --graph'|
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"|

git apply yourcoworkers.diff                                 # applypatch file
git cherry-pick develop                                      # Apply the change introduced by the commit at the tip of the branch and create a new commit
git branch -avv                                              # view tracking branches
git branch -d branch_to_delete                               # delete local branch
git branch -m branch_to_rename                               # rename local branch
git branch -u origin/develop                                 # set current branch to track remote branch
git checkout filename                                        # revert changes in file
git checkout -b newbranch -t origin/develop                  # create a new branch , setup remote tracking and switch to it, note that it will be at the origin/develop NOT current commit
git checkout $(git rev-list -n 1 HEAD -- "$file")^ -- "$file"# revert deleted file
git checkout tags/<tag_name>
git config --global credential.helper cache                  # no git password retyping
git diff HEAD HEAD~1                                         # compare HEAD to commit right before HEAD
git fetch --all                                              # Download objects and refs from remote
git fetch --all; git branch -vv                              # update git cache
git log --oneline --decorate --graph --all
git push origin mwojton:fmlrefactor                          # push local mwojton branch to remote fmlrefactor
git push origin develop                                      # push local develop branch to remote develop
git push --force origin develop                              # push the local branch ptr to remote CAREFUL !!!!!

git remote show origin                                       # show info about remote, show repo URL
git remote add local ../otherrepo
git reset --hard HEAD                                        # discard any changes
git reset --hard HEAD~1                                      # discard last commit
git rev-parse HEAD                                           # get sha of current commit

gitk&
git gui&

STAGING
git add -i                                                   # interactive staging
  select 5 or p
  Stage this hunk [y,n,a,d,/,j,J,g,e,?]? ?
  y - stage this hunk
  n - do not stage this hunk
  a - stage this and all the remaining hunks in the file
  d - do not stage this hunk nor any of the remaining hunks in the file
  g - select a hunk to go to
  / - search for a hunk matching the given regex
  j - leave this hunk undecided, see next undecided hunk
  J - leave this hunk undecided, see next hunk
  k - leave this hunk undecided, see previous undecided hunk
  K - leave this hunk undecided, see previous hunk
  s - split the current hunk into smaller hunks
  e - manually edit the current hunk
  ? - print help

SUBMODULE
git submodule foreach git pull                               # update all submodules to latest
git submodule update --init --recursive                      # update to the checked in sha
git submodule status                                         # show  sha's of all the submodules
git pull origin develop                                      # update submodule to latest develop branch, do this from submodule folder
git submodule sync                                           # Synchronizes submodules' remote URL configuration setting to the value specified in .gitmodules

STASH
  git stash apply stash@{2}                                    # unstash the specific stash from stack
  git stash list                                               # get list of stashed commits
  git stash show -p stash@{0}									                 # show the stash diff
  git stash clear                                              # clear all stashed
  git checkout stash@{0} -- <filename>						             # checkout file from stash

REBASE
  git checkout feature
  git rebase develop                                           # this will rebase ontop of develop
  git checkout develop
  git merge feature                                            # fast forward develop to feature
  
  git rebase --abort                                           #abort rebase

REBASE SQUASH
  git rebase -i HEAD~3                                         # squash last 3 commits
  
  pick f7f3f6d changed my name a bit
  squash 310154e updated README formatting and added blame
  squash a5f4a0d added cat-file
  
  then you will be able to change the messages

MERGE
  git checkout develop                                         # get in the branch you want to merge INTO
  git merge feature                                            # merges feature into develop
  git merge --abort                                            # if you get conflicts you can cancel the merge
  git mergetool                                                # run for conflicts
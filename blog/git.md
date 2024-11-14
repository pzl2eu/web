# Git based dev workflow

## Get started

### Prerequisite

- Git, VS Code installed on Ubuntu OS
- Github account

### Config

```
git config --global user.name "NAME"
git config --global user.email "EMAIL(Github)"
git config --get user.name
git config --get user.email
git config --global init.defaultBranch main
git config --global pull.rebase false  # Merge not rebase
git config --global core.editor "code --wait"  # VS Code
```

### Git authentication via SSH between local Ubuntu machine and remote GitHub repository

```
ssh-keygen -t ed25519
cat ~/.ssh/id_ed25519.pub
```

ed25519: Edwards-curve Digital Signature Algorithm (EdDSA) based on SHA-512 and Curve25519  
Navigate to `GitHub Settings > Access > SSH and GPG Keys` to set up authentication between local machine and the GitHub remote.

`ssh -T git@github.com`

### Add GitHub as a remote using SSH

Create a new repository on the command line

```
cd ~
mkdir repos
cd repos
git clone git@github.com:username/repo.git
git remote -v
echo "# repo" >> README.md
touch LICENSE  # Populate it with a GPLv3, MIT, or other license
touch .gitignore  # Populate it based on tech stack
git add .
git commit
git push
```

Push an existing repository from the command line

```
cd  repodir
git init
git remote add origin git@github.com:username/repo.git
git remote -v  # --verbose
git branch -M main  # --move --force
git add .
git commit
git push -u origin main  # --set-upstream
```

## The most practical Git commands

```
git status
git log --oneline
git rebase -i --root # Organize local commit history
git add .
git commit --amend # Only for commits that have not been pushed to GitHub
git checkout branch # HEAD->branch->last commit->...->initial commit, populate Index with the snapshot of last commit, then copy the contents of Index into working directory
git reset HEAD~ # Undo the last commit, unstage files, but keep the changed workspace files
git pull
git push --force # overwrite remote repo
```

- HEAD  
  Last commit snapshot, next parent
- Index  
  Proposed next commit snapshot
- Working Directory  
  Sandbox

![Git workflow](https://git-scm.com/book/en/v2/images/reset-workflow.png)

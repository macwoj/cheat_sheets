Command|Description
-------|-----------
`du -h --max-depth=1 sort -h`|list sorted folder size
`find . -name '*.o' -delete`| delete all .o files recursively from current directory
`find . -name a -type d -exec rm -rf {} \;`|rm all dirs
`touch "foo.backup.$(date +%F_%R)"`|create file with the current datatime
`cat /etc/release`|
`tar -xzf <tar.gz>`|
`tar -xjf <tar.bz2>`|
`tar -xf <all>`|
`uname -a`|print all system information
`ls -lS`|sort by size
`ls -lSr`|sort by reverse size
`ln -s myfile.txt mylink`|create soft link, works for dir
`nm -C`|show demangled symbols in library
http://unix.stackexchange.com/questions/112023/how-can-i-replace-a-string-in-a-files|sed

```bash
if [[ -O /home/$USER/tmp && -d /home/$USER/tmp ]]; then
        TMPDIR=/home/$USER/tmp
else
        # You may wish to remove this line, it is there in case
        # a user has put a file 'tmp' in there directory or a
        rm -rf /home/$USER/tmp 2> /dev/null
        mkdir -p /home/$USER/tmp
        TMPDIR=$(mktemp -d /home/$USER/tmp/XXXX)
fi

TMP=$TMPDIR
TEMP=$TMPDIR

export TMPDIR TMP TEMP
```
# tmux
* https://github.com/tmux-plugins/tmux-pain-control
* https://github.com/tmux-plugins/tmux-yank
* renumber windows :move-window -r

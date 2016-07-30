Command|Description
----|-----------
`du -h --max-depth=1 | sort -h`|list sorted folder size
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

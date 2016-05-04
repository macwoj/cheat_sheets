Command|Description
----|-----------
`du -h --max-depth=1 | sort -h`|list sorted folder size
`find . -name '*.o' -delete`| delete all .o files recursively from current directory

cat /etc/release
tar -xzf <tar.gz>
tar -xjf <tar.bz2>
tar -xf <all>
uname -a
uname -s
dwarfdump -l <a.out/.so/.o> 
dumpstabs -s <a.out/.so/.o>
ls -lS # sort by size
ls -lSr # sort by reverse size
ln -s myfile.txt mylink # create soft link, works for dir


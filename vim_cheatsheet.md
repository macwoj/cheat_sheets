### Visual Mode
VIM|Description|Reference
---|-----------|---------
`v`|Enter Visual mode|
`rx`|replace all chars in selection with x, this works for visual block mode too|
`C-v <tab>`| in insert mode adds tab char
`:retab`|fix tabs to spaces
`~`|toggle case
`u`|to lower case
`U`|to uppder case

###
VIM|Description|Reference
---|-----------|---------
`C-w ghjk`|move to the left/bottom/top/right window, USE THIS WITH NERDTREE AND TAGBAR
`:so ~/.vimrc`|Reload vimrc
`:! wc %`|run external command on current file
`vim -d file1 file2`|diff 2 files
`:noh`|turn off search highlight
`:sp`|horizontal split
`:vsp`|vertical split

##buffer
VIM|Description|Reference
---|-----------|---------
`b <filename>`|open buffer with filename
`b <number>`|open buffer with number
`bd`|close current buffer
`bn`|next buffer
`bp`|prev buffer

### My remaps (note \<leader\> is set to \\)
VIM|Description|Reference
---|-----------|---------
`\n`|toggle relative **[n]**umber
`\t`|toggle nerd **[t]**ree
`F8`|toggle ctag bar
`\b`|CtrlP **[b]**uffer
`\m`|CtrlP **[m]**ixed
`\r`|CtrlP most **[r]**ecently used
`\a`|switches to the header file corresponding to the current file being edited (or vise versa)
`\as`|**[s]**plits and switches
`\av`|**[v]**ertical splits and switches
`\at`|new **[t]**ab and switches
`\an`|cycles through **[n]**ext match
`\d`|dispatch and make current file
`\w`|toggle word wrap
`\\w`|easy motion word forward
`\\b`|easy motion word back
`[count]\cc`|Comment out the current line or text selected in visual mode
`[count]\cu`|Uncomments the selected line(s)

### Plugins
VIM|Description|Reference
---|-----------|---------
`C-p`|CtrlP
`[q`|:cprevious|
`]q`|:cnext|
`[Q`|:cfirst|
`]Q`|:clast|
`:Dispatch make_script`|start build

Profiling
:profile start profile.log
:profile func *
:profile file *
" At this point do slow actions
:profile pause
:noautocmd qall!

[{
]}
[(
])
]m
[m
[M
]M
[[
]]
[]
][

[[ : sections backward or to the previous '{' in the first column.
]] : sections forward or to the next '{' in the first column.
[] : sections backward or to the previous '}' in the first column.

i insert at current location
a insert after current location (append)
I insert AT START of current line
A insert AFTER END of current line
o insert line below current line (open)
O insert line ABOVE current line
s delete character under cursor and start inserting in its place (substitute text)
S delete all text on line and start inserting in its place (substitute line)
cw delete to the end of current word and start inserting in its place (any movement command can be substituted for w)
cc same as S (change line)
C delete from the cursor to the end of line and start inserting at the cursor position

:{range}sort u
Yes, it's that simple.

You could create a range in advance, such as 'a,. (from mark 'a' to the current line) or you could create one on-the-fly using visual selection by pressing ':' in visual mode, after selecting the text you wish to sort, to get a range of '<,'> on the command line.
:%s/foo/bar/g Find each occurrence of 'foo' (in all lines), and replace it with 'bar'.
:s/foo/bar/g Find each occurrence of 'foo' (in the current line only), and replace it with 'bar'.
:%s/foo/bar/gc Change each 'foo' to 'bar', but ask for confirmation first.
:%s/foo/bar/gci Change each 'foo' (case insensitive due to the i flag) to 'bar'; ask for confirmation
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:5,12s/foo/bar/g Change each 'foo' to 'bar' for all lines from line 5 to line 12 (inclusive).
:'a,'bs/foo/bar/g Change each 'foo' to 'bar' for all lines from mark a to mark b inclusive
:'<,'>s/foo/bar/g  change each 'foo' to 'bar' for all lines within a visual selection
:.,$s/foo/bar/g Change each 'foo' to 'bar' for all lines from the current line (.) to the last line ($) inclusive.
:.,+2s/foo/bar/g	Change each 'foo' to 'bar' for the current line (.) and the two next lines (+2).
:g/^baz/s/foo/bar/g	Change each 'foo' to 'bar' in each line starting with 'baz'.

The g flag means global – each occurrence in the line is changed, rather than just the first.

:noh - remove highlighting of search matches
<< shift left
>> shift right
:{range}sort u
You could create a range in advance, such as 'a,. (from mark 'a' to the current line) or you could create one on-the-fly using visual selection by pressing ':' in visual mode, after selecting the text you wish to sort, to get a range of '<,'> on the command line.
:sort n numeric sort

:Ack
:AckAdd
:LAck use location list
:LAckAdd
?    a quick summary of these keys, repeat to close
o    to open (same as Enter)
O    to open and close the quickfix window
go   to preview file, open but maintain focus on ack.vim results
t    to open in new tab
T    to open in new tab without moving to it
h    to open in horizontal split
H    to open in horizontal split, keeping focus on the results
v    to open in vertical split
gv   to open in vertical split, keeping focus on the results
q    to close the quickfix window

gv select last selection and enter visual mode
Pasting in insert mode
    C-r " paste from unamed register -> last yanked/cut
    C-r * paste from system clipboard
    
    [operator] -> y,d,c,gU(make upper case),gu(make lower case),~(switch case),<(shift left),>(shift right),=(smart indent)
</html>

CTRL+r paste in insert mode

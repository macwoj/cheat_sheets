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


### My remaps (note \<leader\> is set to \\)
VIM|Description|Reference
---|-----------|---------
`\n`|toggle relative **[n]**umber
`\t`|toggle nerd **[t]**ree
`\c`|toggle **[c]**tag bar
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

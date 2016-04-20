### Visual Mode
VIM|Description|Reference
---|-----------|---------
`v`|Enter Visual mode|
`r[char]`|replace all chars in selection with *[char]*, this works for visual block mode too|

||||||
----|----|----|----|----|----|
|||**gg**`first line`|||
|**#**`find word cursor`|**n**`prev find`|**?text**`find`|**N**`next find`||
|||**C-b**`page`|**C-u**`1/2 page`||
|||**H**`top screen`|||
|||**{**`paragraph`|**(**`sentence`||
|||**G**`last line`|||
|||**k**`up`|||
||**h**`left`|**M**`screen`|**l**`right`
||**)**`sentence`|**}**`paragraph`|
|||**L**`screen`|
||**C-d**`1/2 page`|**C-f**`page`|
||**N**`prev find`|**/text**`find`|**n**`next find`|*****`find word cursor`|

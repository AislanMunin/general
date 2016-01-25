" === Pathogen ===
runtime .vim/autoload/pathogen.vim
execute pathogen#infect()

" === General Setup ===
set nocompatible                            " Use Vim settings, rather then Vi settings
syntax enable                               " Activate Syntax Highlight
filetype on                                 " Enable filetype detection
filetype indent on                          " Enable filetype-specific indenting
filetype plugin on                          " Enable filetype-specific plugins
set encoding=utf-8                          " Set default encoding to UTF-8
set hlsearch                                " Highlight search results
set nowrap                                  " Deactivate Wrapping
set nrformats=                              " Treat all numbers as decimal
set cursorcolumn                            " Highlight the current column
set cursorline                              " Highlight the current line
set noswapfile                              " I don't like Swapfiles
set shell=bash                              " This makes RVM work inside Vim. I have no idea why – Gary Bernhardt
set timeout timeoutlen=1000 ttimeoutlen=100 " Fix slow O inserts from Gary Bernhardt
set ai                                      " Automatically set the indent of a new line
set spell spelllang=en_us                   " Activate spell checking and set American as default
set list listchars=tab:›\ ,trail:‹          " Show invisible characters: Tabs & trailing whitespace
set expandtab                               " Use Soft-Tabs
set tabstop=2 softtabstop=2 shiftwidth=2    " Use two spaces for tabs, soft-tabs and when shifting
set nojoinspaces                            " Insert only one space when joining lines
match ErrorMsg '\%>100v.\+'                 " Highlight Characters that overstep 100 characters
runtime macros/matchit.vim                  " Jump between pairs of keywords via %

" =========== Bad Wolf ===========
" Currently using the dark version
set background=dark
colorscheme badwolf

" === Rainbow ===
let g:rainbow_active = 1

" ======= Syntastic =======
" First check JSHint, then JSCS
let g:syntastic_javascript_checkers = ['jshint', 'jscs']

" Also run a Syntax Check when the file is opened
let g:syntastic_check_on_open=1

" More cats
let g:syntastic_error_symbol='🙀'
let g:syntastic_warning_symbol='😿'

" ======= CtrlP =======
" Ignore files that are git ignored
let g:ctrlp_user_command = ['.git/', 'git --git-dir=%s/.git ls-files -oc --exclude-standard']

" Jump to the window when it is already open (only when in this tab)
let g:ctrlp_switch_buffer = 'e'

" Disable caching
let g:ctrlp_use_caching = 0

" ====== vim-rspec ======
let g:rspec_command = "Dispatch rspec {spec}"

" === Language Specific Setting ===

" ES6 is JavaScript
autocmd BufRead,BufNewFile *.es6 setfiletype javascript

" Makefiles require tabs
autocmd! FileType make setlocal noexpandtab

" Make sure all markdown files have the correct filetype
autocmd! BufRead,BufNewFile *.{md,mdpp,txt} set ft=markdown

" .rs is Rust, nothing else!
autocmd! BufRead,BufNewFile *.rs set ft=rust

" .mote is HTML (in most cases)
autocmd! BufRead,BufNewFile *.mote set ft=html

" Community Standard for Rust is indentation of 4
autocmd FileType rust set tabstop=4 softtabstop=4 shiftwidth=4

" Enable Syntax highlighting for fenced code blocks in Markdown
let g:markdown_fenced_languages = ['js=javascript', 'ruby']

" Autogroup for prose file types
augroup prose
  autocmd!

  " Use four spaces for tabs, soft-tabs and when shifting
  autocmd FileType markdown set tabstop=4 softtabstop=4 shiftwidth=4

  " Wrap text
  autocmd FileType tex,markdown set wrap linebreak nolist

  " No character limit per line
  autocmd FileType tex,markdown match ErrorMsg ''

  autocmd FileType tex,markdown set nocursorcolumn
augroup END

" === Custom Functions and Commands ===

" Switch spell checking language
command! British :set spelllang=en_gb
command! American :set spelllang=en_us
command! German :set spelllang=de

" === Mappings ===

" Clear the search buffer when hitting return
nnoremap <CR> :nohlsearch<cr>
" Directory of current file (`:e %%` for example) – Gary Bernhardt
cnoremap %% <C-R>=expand('%:h').'/'<cr>

" === Leader Key ===

" Execute dispatcher's Make
nnoremap <Leader>m :Make<CR>

" Edit my vimrc (from: Learn Vim Script the hard way)
nnoremap <leader>ev :vne $MYVIMRC<cr>

" Source my vimrc (from: Learn Vim Script the hard way)
nnoremap <leader>sv :source $MYVIMRC<cr>

" Mappings for vim-rspec
nnoremap <leader>t :call RunCurrentSpecFile()<CR>
nnoremap <leader>s :call RunNearestSpec()<CR>
nnoremap <leader>a :call RunAllSpecs()<CR>
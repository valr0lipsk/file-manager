# Important note №1

Please be aware with this bug when using powershell https://github.com/npm/cli/issues/7375

So first try to run `npm run start -- -- --username=UserName` instead of rating it as non-working functionality or use git bash.

# Important note №2

File manager commands use paths relative to the current directory (it's either the directory you're moved to using `cd`/`up` command or an initial working directory).

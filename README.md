# salty_screeps
Repository for screeps game scripts

********************************************************************
To run a server below servers/SERVER_NAME/

npx screeps start --password YOURPASSWORD  --host IP_ADDRESS

*Recommendend* for each user to create a folder below users/USERNAMA
and add bash scripts there to launch servers on their machines

********************************************************************
To link client script folder of a given server to the git repository

link_client.sh [IP] [port] [USERNAME(Windows)] windows [relative\path/to\game/folder\to/link]

NOTE: (WINDOWS)
script only supported on windows. Works with slashes,backslashes, relative paths

KNOWN BUG:
if GIT BASH doesn't support symlinks properly with your version link may not work.
use: 
    "link_client.ps1"

and substitute the script's hardcoded paths with yours
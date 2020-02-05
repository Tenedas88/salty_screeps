# salty_screeps
Repository for screeps game scripts

************************ START SERVER ************************************************************

To run a server below servers/SERVER_NAME/

npx screeps start --password YOURPASSWORD  --host IP_ADDRESS

*Recommendend* for each user to create a folder below users/USERNAMA
and add bash scripts there to launch servers on their machines


************************ LINK CLIENT CODE FOLDER TO GIT ******************************************

To link client script folder of a given server to the git repository

link_client.sh [IP] [port] [USERNAME(Windows)] windows [relative\path/to\game/folder\to/link]

NOTE: (WINDOWS)
script only supported on windows. Works with slashes,backslashes, relative paths

KNOWN BUG:
if your GIT BASH doesn't support symlinks properly the link process may not work correctly.
instead use: 

link_client.ps1 [IP] [port] [USERNAME(Windows)] [relative\path/to\game/folder\to/link]

NOTE:
script need to run in powershell with admin rights


************************ AUTOCOMLPETION SUPPORT FOR VSCODE SERVER ********************************

to support autocompletion run:
    git submodule init,
    git submodule update

to download the autocomlpetion-screeps repository

# Your script here
param(
    [Parameter(Mandatory=$True)]
    [string]$serveraddress,

    [Parameter(Mandatory=$True)]
    [string]$serverport,

    [Parameter(Mandatory=$True)]
    [string]$username,

    [Parameter(Mandatory=$True)]
    [string]$targetfolder
)

$clientfolder=("C:\Users\"+$username+"\AppData\Local\Screeps\scripts\"+$serveraddress.replace('.','_')+"___"+$serverport+"\default")

$currentfolder=Get-Location
$targetabsolutefolder=("$currentfolder"+$targetfolder.replace('.\','\'))

New-Item -ItemType SymbolicLink -Path $clientfolder -Target $targetabsolutefolder
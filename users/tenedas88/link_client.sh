#!/bin/bash

currdir="$PWD/"

serveraddress=$1
serverport=$2
username=$3 
targetfolder=$5

if [ ${4}=="windows" ]
then
    serveraddress=${serveraddress//'.'/'_'}
    targetfolder=${targetfolder//'\'/'/'}

    gamefolder="/c/Users/${username}/AppData/Local/Screeps/scripts/${serveraddress}___${serverport}/default"
else
#TODO: linux folder PATH
    gamefolder=""
fi 

targetfolderabsolute="${currdir}${targetfolder}"

ln -s ${targetfolderabsolute} ${gamefolder}
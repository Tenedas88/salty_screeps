var harvest = 
{
    /** @param {Creep} creep **/
    do: function(creep,sources,targets)
    {
        //retrieve energy from source
        if(creep.store.getFreeCapacity() > 0) 
        {
            console.log(creep.name +'gathering resources from ' + sources);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        //deliver energy to target
        else
        {
            console.log(creep.name + 'evaluating distance');
            console.log(creep.name + 'evaluating target storage');
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
            {
                console.log(creep.name + 'delivering resource to'+targets[0])
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
};

module.exports = harvest;
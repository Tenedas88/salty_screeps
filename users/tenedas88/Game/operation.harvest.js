var harvest = 
{
    /** @param {Creep} creep **/
    do: function(creep,sources,targets)
    {
        //retrieve energy from source
        if(creep.store.getFreeCapacity() > 0) 
        {
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        //deliver energy to target
        else
        {
            if(targets.length > 0) 
            {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = harvest;
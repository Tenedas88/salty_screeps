var searchService = 
{
    findStructure: function(creep,types,minAvailableCapacity)
    {
        return creep.room.find(FIND_STRUCTURES, {
            filter: (structures) =>
            {
                var availableStructures = [];
                for(structure in structures)
                {
                    for(type in types)
                    {
                        if(structure.structureType == type 
                            && structure.store.getFreeCapacity(RESOURCE_ENERGY) > minAvailableCapacity)
                        {
                            availableStructures.push(structure);
                        }
                    }
                }
                return availableStructures;
            }
        });
    },

    findSource: function(creep,types)
    {
        return creep.room.find(FIND_SOURCES,{
            filter: (sources) =>
            {
                var availableResources = [];
                for(source in sources)
                {
                    for(type in types)
                    {
                        if(source.resourceType == type)
                        {
                            availableResources.push(source);
                        }
                    }
                }
                return availableResources;
            }
        });
    }
}

module.exports = searchService;
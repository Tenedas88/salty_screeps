var searchService = 
{
    findStructure: function(creep,type)
    {
        return creep.room.find(FIND_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == type) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });
    },

    findSource: function(creep,type)
    {
        return creep.room.find(FIND_SOURCES,{
            filter: (source) =>
            {
                return (source.resourceType == type);
            }
        });
    }
}

module.export = searchService;
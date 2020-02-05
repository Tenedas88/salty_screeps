var search  = require('service.search');
var harvest = require('operation.harvest');

var worker =
{
    run: function(creep)
    {
        if(creep.store.getFreeCapacity() > 0) 
        {
            harvest.do( creep,
                        search.findSource(creep,[RESOURCE_ENERGY]),
                        search.findStructure(creep,
                                            [STRUCTURE_SPAWN,STRUCTURE_EXTENSION,STRUCTURE_TOWER],
                                            0)
                        );
        }
    }
}

module.exports = worker;
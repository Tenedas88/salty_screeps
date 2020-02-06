var search  = require('service.search');
var harvest = require('operation.harvest');

var worker =
{
    run: function(creep)
    {
        console.log(creep.name + 'going to harvest');
        harvest.do( creep,
                    search.findSource(creep,[RESOURCE_ENERGY]),
                    search.findStructure(creep,
                                        [STRUCTURE_SPAWN,STRUCTURE_EXTENSION,STRUCTURE_TOWER],
                                        0)
                    );
    }
}

module.exports = worker;
var worker = require('creep.worker');

module.exports.loop = function () {
    for(name in Game.creeps)
    {
        worker.run(Game.creeps[name]);
    }
    
}
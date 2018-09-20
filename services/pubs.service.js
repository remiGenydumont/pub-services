const _ = require('lodash');
var list = require("../mocks/mocks.json")

function listAllPub(){
    return list ;

}
function listOpenPub(day){
    var listOpen ;
    list.forEach(function (p){
        if(p.openDays.contains(day)){
            listOpen.add(p);
        }
    })
    return listOpen;
}


module.exports = {
    listAllPub:listAllPub,
    listOpenPub:listOpenPub
}
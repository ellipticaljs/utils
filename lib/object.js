

let object={};

/**
 * returns the value of an object prop by index
 * @param obj {object}
 * @param index {number}
 * @returns {object}
 */
object.propertyByIndex=(obj,index)=>obj[Object.keys(obj)[index]];


/**
 * returns the index of an element with idProp==id in an array
 * @param obj {Object}
 * @param id {String}
 * @param idProp {String}
 * @returns {Number}
 */
object.indexById=(obj,id,idProp="id")=>{
    let arr=object.propertyByIndex(obj,0);
    if(arr.length && arr.length > 0){
        let len=arr.length;
        let index;
        for(var i=0;i<len;i++){
            if(arr[i][idProp]===id){
                index=i;
                break;
            }
        }
        return index;
    }else{
        return null;
    }
};


object.isEmpty=(obj)=>{
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    if (obj == null) return true;

    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;

};



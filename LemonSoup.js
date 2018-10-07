const ls = (function(window){

    function LemonSoup(){
        this.pick = function(d,f){
            var data = [];
            for(var i=0;i<d.length;i++){
                if(d[i][f]){
                    
                    data.push(d[i][f]);
                }
            }
            return data;
        }
        this.for = function(i,f){
            if(Array.isArray(i)){
                for(var _j=0;_j<i.length;i++){
                    f(_j,i);
                }
            }
            else if(f == undefined || f==null){
                var data = [];
                if(i<0){
                    for(var _j=0;_j>i;_j--){
                        data.push(_j);
                    }
                    return data;
                }
                else{
                    for(var _j=0;_j<i;_j++){
                        data.push(_j);
                    }
                    return data;
                }
            }else{
                if(i<0){
                    for(var _j=0;_j>i;_j--){
                        f(_j);
                    }      
                }
                else{
                    for(var _j=0;_j<i;_j++){
                        f(_j);
                    }
                }
            }
        }
        this.sort = function(arr,type){
            if(type==1||type==undefined){
                arr.sort(function(a,b){
                    return a-b;
                });
            }else{
                arr.sort(function(a,b){
                    return a+b;
                })
            }
            return arr;
        }
        this.deepcopy = function(o){
            var c = {};
            if(Array.isArray(o)){
                c = o.slice();
            }
            else if(typeof o === 'function' && o!==null){
                c = o.bind(this);
            }
            else if(typeof o === 'object' && o!==null){
                var keys = Object.keys(o);
                for(var i=0;i<keys.length;i++){
                    if (o.hasOwnProperty(keys[i])) {
                        c[keys[i]] = this.deepcopy(o[keys[i]]);
                    }
                }
            }else{
                c = o;
            }
            return c;
        }
        this.in = function(o,){
            
        }
    }
    Array.prototype.matchFront = function(val){
        for(var i=0;i<this.length;i++){
            if(this[i]==val){
                return i;
            }
        }
    }
    Array.prototype.matchBack = function(val){
        for(var i=this.length;i>=0;i--){
            if(this[i]==val){
                return i;
            }
        }
    }
    const ls = new LemonSoup;
    return ls;
})(window);

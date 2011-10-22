(function(R) {
    
    /**
     * Returns the index of the given item within the set.
     * Returns -1 if not found in set.
     */
    R.st.indexOf = function(item) {
        return Array.prototype.indexOf.call(this, item);
    };
    
    /**
     * Returns the closest element to the given point.
     * The coordinates passed to the function are relative
     * to the upper left corner of the container SVG element.
     * If you pass in a Raphaël element as the first element
     * instead of coordinates, it will take the object's bounding
     * box center as its point.
     */
    R.st.closestTo = function(x, y) {
        var el = null, dist = Infinity, refBox = null;
        
        function toFloat(val) {
            val = parseFloat(val, 10);
            return isNaN(val)? 0 : val;
        }
        
        if (typeof y == 'undefined') {
            // assume we've been passed an object
            refBox = x.getBBox();
            x = refBox.x + refBox.width / 2;
            y = refBox.y + refBox.height / 2;
        } else {
            x = toFloat(x);
            y = toFloat(y);
        }
        
        this.forEach(function(elm) {
            var box = elm.getBBox(),
                delta = { x: box.x + box.width / 2 - x, y: box.y + box.height / 2 - y },
                d = delta.x * delta.x + delta.y * delta.y;
            if (dist > d) {
                el = elm;
                dist = d;
            }
        });
        
        return el;
    };
    
    /**
     * Slices the set like it was an array.
     */
    R.st.slice = function() {
        if (this.length == 0) return this;
        var set = this[0].paper.set();
        set.push.apply(set, Array.prototype.slice.apply(this, arguments));
        return set;
    };
    
    /**
     * Filters the set according to the filtering function
     * and returns a new set containing the items that
     * passed the filter.
     */
    R.st.filter = function(callback, thisObj) {
        if (this.length == 0) return this;
        var set = this[0].paper.set();
        thisObj = thisObj || null;
        this.forEach(function(item) {
            if (callback.call((thisObj == null)? item : thisObj, item))
                set.push(item);
        });
        return set;
    };
    
    /**
     * Maps the set to a new array of values, as converted
     * by the callback.
     */
    R.st.map = function(callback, thisObj) {
        var set = [];
        thisObj = thisObj || null;
        this.forEach(function(item) {
            set.push(callback.call((thisObj == null)? item : thisObj, item));
        });
        return set;
    };
    
})(Raphael);

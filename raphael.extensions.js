(function(R) {
    
    /**
     * Returns the index of the given item within the set.
     * Returns -1 if not found in set.
     */
    R.st.indexOf = function(item) {
        return Array.prototype.indexOf.call(this, el);
    };
    
    /**
     * Returns the closest element to the given point.
     * The coordinates passed to the function are relative
     * to the upper left corner of the container SVG element.
     */
    R.st.closestTo = function(x, y) {
        var el = null, dist = Infinity;
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
    
})(Raphael);
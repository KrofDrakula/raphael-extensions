Extensions for Raphaël
======================

![Extensions for Raphaël](https://github.com/KrofDrakula/raphael-extensions/raw/master/raphael-plus.png)

Adds some handy methods to the Raphaël set:

  * `closestTo(x[, y])`:
     
    Returns the element of the set whose bounding box center is closest
    to the given coordinates or passed in object.
    
    You can pass in a pair of coordinates relative to the top left corner
    of the SVG container or a Raphaël element as the first argument.
    
    Example:
    
    ```js
    var set, rect, closest;
    
    paper.setStart();
    paper.rect(0, 0, 10, 10);
    paper.circle(100, 100, 10, 10);
    set = paper.setFinish();
    
    rect = paper.rect(30, 30, 10, 10);
    
    closest = set.closestTo(0, 0); // closest === set[0] (rectangle)
    closest = set.closestTo(rect); // closest === set[1] (circle)
    ```
      
  * `indexOf(item)`:
  
    Proxy method for [`Array.indexOf()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf).
    
    Returns the index number of the Raphaël object in the set or `-1` if the
    element isn't within the set.
    
  * `slice(from[, to])`:
  
    Proxy method for [`Array.slice()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice).
    
    Returns a copy of the original set, does not modify the existing set.
    
    Example:
    
    ```js
    var set, i, last10circles;
    
    paper.setStart();
    for (i = 0; i < 100; i++) {
        paper.circle(Math.random() * paper.width, Math.random() * paper.height, 10);
    }
    set = paper.setFinish();
    
    last10circles = set.slice(-10); // a new set of the last 10 circles added
    ```
    
  * `filter(callback[, thisObject])`:
    
    Proxy method for [`Array.filter()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter)
    
    Returns a filtered copy of the original set according to the filtering
    function.
    
    Example:
    
    ```js
    var set, circles;
    
    paper.setStart();
    for (i = 0; i < 100; i++) {
        if (Math.random() > 0.5) {
            paper.rect(
                Math.random() * paper.width, Math.random() * paper.height
                Math.random() * paper.width, Math.random() * paper.height,
            );
        } else {
            paper.cirle(
                Math.random() * paper.width, Math.random() * paper.height,
                Math.random() * 50
            );
        }
    }
    set = paper.setFinish();
    
    // filter
    circles = set.filter(function(el) {
        return el.type == 'circle';
    });
    ```

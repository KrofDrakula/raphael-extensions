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
     
        var set, rect, closest;
        
        paper.setStart();
        paper.rect(0, 0, 10, 10);
        paper.circle(100, 100, 10, 10);
        set = paper.setFinish();
        
        rect = paper.rect(30, 30, 10, 10);
        
        closest = set.closestTo(0, 0); // closest === set[0] (rectangle)
        closest = set.closestTo(rect); // closest === set[1] (circle)
      
  * `indexOf(item)`:
  
    Proxy method for [`Array.indexOf()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf).
    
  * `slice(from[, to])`:
  
    Proxy method for [`Array.slice()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice).
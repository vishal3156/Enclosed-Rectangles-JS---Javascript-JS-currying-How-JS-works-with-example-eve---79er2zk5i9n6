//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	function intValue(str) {
  return parseInt(str.substring(0, str.length - 2));
}
function transform(obj) {
  var t = Object.keys(obj);
  var retOb = { children: [] }
  retOb[t[0]] = intValue(obj[t[0]]);
  retOb[t[1]] = intValue(obj[t[1]]);
  retOb[t[2]] = intValue(obj[t[2]]);
  retOb[t[3]] = intValue(obj[t[3]]);
  return retOb;
}
function check(rec1, rec2) {
  var retRec1 = rec1;
  var retRec2 = rec2;
  rec1 = transform(rec1);
  rec2 = transform(rec2);
  console.log(rec1, rec2);
  var keysRec1 = Object.keys(rec1);
  if (keysRec1.indexOf('top') !== -1) {
    if (keysRec1.indexOf('left') !== -1) {
      if (keysRec1.indexOf('bottom') !== -1) {
        // case when rec1 is inside rec2
        if (rec1.top >= rec2.top) {
          if (rec1.bottom >= rec2.bottom) {
            if (rec1.left >= rec2.left) {
              if (rec1.right >= rec2.right) {
                let a = retRec2;
                a.children.push(
                  {
                    top: (rec1.top - rec2.top) + "px",
                    left: ((rec1.left) - (rec2.left)) + "px",
                    bottom: ((rec1.bottom) - (rec2.bottom)) + "px",
                    right: ((rec1.right) - (rec2.right)) + "px",
                    children: []
                  }
                );
                return a;
              }
            }
          }
        }
        // case when rec2 is inside rec1
        if (rec1.top <= rec2.top) {
          if (rec1.bottom <= rec2.bottom) {
            if (rec1.left <= rec2.left) {
              if (rec1.right <= rec2.right) {
                let a = retRec1;
                a.children.push(
                  {
                    top: (rec2.top - rec1.top) + "px",
                    left: ((rec2.left) - (rec1.left)) + "px",
                    bottom: ((rec2.bottom) - (rec1.bottom)) + "px",
                    right: ((rec2.right) - (rec1.right)) + "px",
                    children: []
                  }
                );
                return a;
              }
            }
          }
        }
        return retRec1;
      }
      else {
        // when rec1 is inside rec2
        if (rec1.top >= rec2.top) {
          if (rec1.left >= rec2.left) {
            if ((rec1.top + rec1.height) <= (rec2.top + rec2.height)) {
              if ((rec1.left + rec1.width) <= (rec2.left + rec2.width)) {
                var a = retRec2;
                a.children.push(
                  {
                    top: (rec1.top - rec2.top) + "px",
                    left: (rec1.left - rec2.left) + "px",
                    height: rec1.height + "px",
                    width: rec1.width + "px",
                    children: []
                  }
                )
                return a;
              }
            }
          }
        }
        // when rec2 is inside rec1
        if (rec2.top >= rec1.top) {
          if (rec2.left >= rec1.left) {
            if ((rec2.top + rec2.height) <= (rec1.top + rec1.height)) {
              if ((rec2.left + rec2.width) <= (rec1.left + rec1.width)) {
                var a = retRec1;
                a.children.push(
                  {
                    top: (rec2.top - rec1.top) + "px",
                    left: (rec2.left - rec1.left) + "px",
                    height: rec2.height + "px",
                    width: rec2.width + "px",
                    children: []
                  }
                )
                return a;
              }
            }
          }
        }
        
      return retRec1;
      }

    }
    if (keysRec1.indexOf('right') !== -1) {
      // when rec1 is inside rec2
      if (rec1.top >= rec2.top) {
        if (rec1.right >= rec2.right) {
          if ((rec1.top + rec1.height) <= (rec2.top + rec2.height)) {
            if ((rec1.right + rec1.width) <= (rec2.right + rec2.width)) {
              var a = retRec2;

              a.children.push(
                {
                  top: (rec1.top - rec2.top) + "px",
                  right: (rec1.right - rec2.right) + "px",
                  height: rec1.height + "px",
                  width: rec1.width + "px",
                  children: []
                }
              )
              return a;
            }
          }
        }
      }
      // when rec2 is inside rec1
      if (rec2.top >= rec1.top) {
        if (rec2.right >= rec1.right) {
          if ((rec2.top + rec2.height) <= (rec1.top + rec1.height)) {
            if ((rec2.right + rec2.width) <= (rec1.right + rec1.width)) {
              var a = retRec1;

              a.children.push(
                {
                  top: (rec2.top - rec1.top) + "px",
                  right: (rec2.right - rec1.right) + "px",
                  height: rec2.height + "px",
                  width: rec2.width + "px",
                  children: []
                }
              )
              return a;
            }
          }
        }
      }
      
    return retRec1;
    }

  }
  if (keysRec1.indexOf('bottom') !== -1) {
    if (keysRec1.indexOf('left') !== -1) {
      // when rec1 is inside rec2
      if (rec1.bottom >= rec2.bottom) {
        if (rec1.left >= rec2.left) {
          if ((rec1.bottom + rec1.height) <= (rec2.bottom + rec2.height)) {
            if ((rec1.left + rec1.width) <= (rec2.left + rec2.width)) {
              var a = retRec2;
              a.children.push(
                {
                  bottom: (rec1.bottom - rec2.bottom) + "px",
                  left: (rec1.left - rec2.left) + "px",
                  height: rec1.height + "px",
                  width: rec1.width + "px",
                  children: []
                }
              )
              return a;
            }
          }
        }
      }
      // when rec2 is inside rec1
      if (rec2.bottom >= rec1.bottom) {
        if (rec2.left >= rec1.left) {
          if ((rec2.bottom + rec2.height) <= (rec1.bottom + rec1.height)) {
            if ((rec2.left + rec2.width) <= (rec1.left + rec1.width)) {
              var a = retRec1;
              a.children.push(
                {
                  bottom: (rec2.bottom - rec1.bottom) + "px",
                  left: (rec2.left - rec1.left) + "px",
                  height: rec2.height + "px",
                  width: rec2.width + "px",
                  children: []
                }
              )
              return a;
            }
          }
        }
        return retRec1;
      }

      return retRec1;
    }
    if (keysRec1.indexOf('right')) {
      // when rec1 is inside rec2
      if (rec1.bottom >= rec2.bottom) {
        if (rec1.right >= rec2.right) {
          if ((rec1.bottom + rec1.height) <= (rec2.bottom + rec2.height)) {
            if ((rec1.right + rec1.width) <= (rec2.right + rec2.width)) {
              var a = retRec2;
              a.children.push(
                {
                  bottom: (rec1.bottom - rec2.bottom) + "px",
                  right: (rec1.right - rec2.right) + "px",
                  height: rec1.height + "px",
                  width: rec1.width + "px",
                  children: []
                }
              )
              return a;
            }
          }
        }
      }
      // when rec2 is inside rec1
      if (rec2.bottom >= rec1.bottom) {
        if (rec2.right >= rec1.right) {
          if ((rec2.bottom + rec2.height) <= (rec1.bottom + rec1.height)) {
            if ((rec2.right + rec2.width) <= (rec1.right + rec1.width)) {
              var a = retRec1;
              a.children.push(
                {
                  bottom: (rec2.bottom - rec1.bottom) + "px",
                  right: (rec2.right - rec1.right) + "px",
                  height: rec2.height + "px",
                  width: rec2.width + "px",
                  children: []
                }
              )
              return a;
            }
          }
        }
      }
      return retRec1;
    }
  }
}
module.exports = check
// console.log(check(rec1, rec2))
}

module.exports = updateStructure;

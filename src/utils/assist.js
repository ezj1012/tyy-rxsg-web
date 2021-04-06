// import Vue from 'vue';

// 判断参数是否是其中之一
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

// Find components upward
function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

function getImageData(url, fun) {
  let canvas = document.createElement('CANVAS');
  let ctx = canvas.getContext('2d');
  let img = null;
  if (url instanceof String || (typeof url) == 'string') {
    img = new Image();
    img.src = url;
  } else if (url instanceof Image) {
    img = url;
  }
  img.onload = () => {
    img.crossOrigin = 'Anonymous';
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    fun(ctx.getImageData(0, 0, canvas.width, canvas.height));
    canvas = null;
  }
}
export { findComponentUpward, getImageData };
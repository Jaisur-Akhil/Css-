/** @format */

// The box-sizing property allows us to include the padding and border in an element's total width and height.

// If you set box-sizing: border-box; on an element, padding and border are included in the width and height:

let navigation = document.querySelector('.navigation');
navigation.onclick = function () {
  navigation.classList.toggle('active');
};

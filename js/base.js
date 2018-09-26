var Length = document.documentElement.clientWidth;
var baseWidth = Length <= 1024 ? Length : 1024 < Length ? 750 : '';
document.documentElement.style.fontSize = baseWidth / 750 * 100 + 'px';
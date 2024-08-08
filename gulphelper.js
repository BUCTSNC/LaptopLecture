
/**
 * 将十六进制颜色转换为RGB格式
 * @param {string} hex - 十六进制颜色（例如：#FF0000）
 * @return {Object} - 含有r, g, b属性的对象
 */
function hexToRgb(hex) {
  // 删除起始的#字符
  hex = hex.replace(/^#/, '');
  // 分别解析红色、绿色和蓝色
  const bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return { r, g, b };
}

/** 
* 将RGB颜色转换为十六进制格式
* @param {Object} rgb - 含有r, g, b属性的对象
* @return {string} - 十六进制颜色（例如：#FF0000）
*/
function rgbToHex(rgb) {
  let hex = (rgb.r << 16) | (rgb.g << 8) | rgb.b;
  return '#' + hex.toString(16).padStart(6, '0').toUpperCase();
}

/**
* 生成n个从颜色a到颜色b的平均色阶
* @param {string} colorA - 起始颜色（十六进制格式，例如：#FF0000）
* @param {string} colorB - 结束颜色（十六进制格式，例如：#0000FF）
* @param {number} n - 需要生成的颜色数
* @return {Array} - 包含n个颜色的数组（十六进制格式）
*/
export function generateColorGradient(colorA, colorB, n) {
  const startColor = hexToRgb(colorA);
  const endColor = hexToRgb(colorB);
  let colors = [];
  for (let i = 0; i < n; i++) {
      // 计算当前步进
      let r = Math.round(startColor.r + ((endColor.r - startColor.r) * i) / (n - 1));
      let g = Math.round(startColor.g + ((endColor.g - startColor.g) * i) / (n - 1));
      let b = Math.round(startColor.b + ((endColor.b - startColor.b) * i) / (n - 1));
      colors.push(rgbToHex({ r, g, b }));
  }
  return colors;
}

import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
 
// title:pdf文件名称，target：截取的内容
export function printPdf(title, target) {
  var element = target
  setTimeout(() => {
    html2Canvas(element, {
      scale: 2
    }).then(function(canvas) {
      var contentWidth = canvas.width
      var contentHeight = canvas.height
      // 一页pdf显示html页面生成的canvas高度;
      var pageHeight = contentWidth / 592.28 * 841.89
      // 未生成pdf的html页面高度
      var leftHeight = contentHeight
      // 页面偏移
      var position = 0
      // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      var imgWidth = 595.28
      var imgHeight = 592.28 / contentWidth * contentHeight
      var pageData = canvas.toDataURL('image/jpeg', 1.0)
      var pdf = new JsPDF('', 'pt', 'a4')
      // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      // 当内容未超过pdf一页显示的范围，无需进行分页
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
      } else {
        // 当内容超过pdf一页显示的高度范围时，进行分页
        while (leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
          leftHeight -= pageHeight
          position -= 841.89
          // 避免添加空白页
          if (leftHeight > 0) {
            pdf.addPage()
          }
        }
      }
      pdf.save(title + '.pdf')  //此处命名可由自己对应项目而写 || 根据自己简单配置那当前页面标题传过来进行命名
    })
  }, 1000)
}
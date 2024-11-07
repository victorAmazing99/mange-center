package com.victor.common.core.utils;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.event.AnalysisEventListener;
import com.alibaba.excel.write.style.column.LongestMatchColumnWidthStyleStrategy;
import com.victor.common.core.exception.ServiceException;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.HttpServletResponse;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

/**
 * @author victorl
 * @date 2022/3/14
 */
@Slf4j
public class EasyExcelUtil {


    public class ExcelDataListener<T> extends AnalysisEventListener<T> {

        private List<T> data = new ArrayList<T>();

        @Override
        public void invoke(T t, AnalysisContext analysisContext) {
            data.add(t);
        }

        @Override
        public void doAfterAllAnalysed(AnalysisContext analysisContext) {

        }

        public List<T> getData() {
            return data;
        }

    }

    /**
     * 导出excel
     *
     * @param response  响应
     * @param data      数据
     * @param fileName  文件名
     * @param sheetName sheet 名
     * @param clazz     模板表头
     * @param <T>
     */
    public static <T> void writeExcel(HttpServletResponse response, List<T> data, String fileName, String sheetName, Class<T> clazz) {
        // 这里注意 有同学反应使用swagger 会导致各种问题，请直接用浏览器或者用postman
        response.setContentType("application/vnd.ms-excel");
        response.setCharacterEncoding("utf-8");
        // 这里URLEncoder.encode可以防止中文乱码 当然和easyexcel没有关系
        try {
            String fileNameEncode = URLEncoder.encode(fileName, "UTF-8").replaceAll("\\+", "%20");
            response.setHeader("Content-disposition", "attachment;filename*=utf-8''" + fileNameEncode + ".xlsx");
            response.setHeader("Access-Control-Expose-Headers","Content-Disposition");
            EasyExcel.write(response.getOutputStream(), clazz)
                    .registerWriteHandler(new LongestMatchColumnWidthStyleStrategy())
                    .sheet(StringUtils.isBlank(sheetName) ? "Sheet1" : sheetName)
                    .doWrite(data);
        } catch (Exception e) {
            try {
                throw new ServiceException("下载" + fileName + "文件失败");
            } catch (Exception exception) {
                log.error("",e);
            }
        }
    }


}

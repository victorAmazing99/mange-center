/**
 * 版权所有(C)，上海路人王信息科技有限公司，2021，所有权利保留。
 */
package com.victor.common.core.web.domain;

import com.victor.common.core.enums.ErrorMsgEnum;
import com.victor.common.core.enums.InfoMsgEnum;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author zhangtao - 2021/6/21 - 创建
 * @Describe: 自定义数据格式
 */
@Data
public class PageResult<T> extends Result<PageResult.PageData<T>> {
    @Data
    public static class PageData<T> implements Serializable {

        /**
         * total
         */
        private int total;

        /**
         * 响应结果
         */
        private List<T> data;

    }

    /**
     * 成功
     *
     * @param data
     * @return
     */
    public static <T> PageResult success(List<T> data, int total) {
        return success(InfoMsgEnum.OK.desc, data, total);
    }

    /**
     * 成功
     *
     * @param data
     * @return
     */
    public static <T> PageResult success(List<T> data, long total) {
        return success(InfoMsgEnum.OK.desc, data, new Long(total).intValue());
    }

    /**
     * 操作成功
     *
     * @param message
     * @param data
     * @return
     */
    private static <T> PageResult success(String message, List<T> data, long total) {
        return success(message, data, new Long(total).intValue());
    }

    /**
     * 操作成功
     *
     * @param message
     * @param data
     * @return
     */
    private static <T> PageResult success(String message, List<T> data, int total) {
        PageData<T> pageData = new PageData<T>();
        pageData.setTotal(total);
        pageData.setData(data);

        PageResult pageResult = new PageResult();
        pageResult.setCode(InfoMsgEnum.OK.code);
        pageResult.setMessage(message);
        pageResult.setData(pageData);
        return pageResult;
    }

    /**
     * 失败
     */
    public static PageResult error(ErrorMsgEnum errorInfo) {
        return error(errorInfo.code, errorInfo.desc);
    }

    /**
     * 失败
     */
    public static PageResult error(int code, String message) {
        PageResult rb = new PageResult();
        rb.setCode(code);
        rb.setMessage(message);
        return rb;
    }
}
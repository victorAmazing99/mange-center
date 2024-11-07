/**
 * 版权所有(C)，上海路人王信息科技有限公司，2021，所有权利保留。
 */
package com.victor.common.core.web.domain;


import com.victor.common.core.enums.ErrorMsgEnum;
import com.victor.common.core.enums.InfoMsgEnum;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;

import java.io.Serializable;

/**
 * @author zhangtao - 2021/6/21 - 创建
 * @Describe: 自定义数据格式
 */
@Data
public class Result<T> implements Serializable {
    /**
     * 响应代码
     */
    private int code;

    /**
     * 响应消息
     */
    private String message;

    /**
     * 响应结果
     */
    private T data;

    public Result() {
    }

    public Result(ErrorMsgEnum errorInfo) {
        this.code = errorInfo.code;
        this.message = errorInfo.desc;
    }

    /**
     * 成功
     *
     * @return
     */
    public static Result success() {
        return success(null);
    }

    /**
     * 成功
     *
     * @return
     */
    public static Result success(int code, String message) {
        Result rb = new Result();
        rb.setCode(code);
        rb.setMessage(message);
        rb.setData(null);
        return rb;
    }

    /**
     * 成功
     *
     * @param data
     * @return
     */
    public static <T> Result success(T data) {
        return success(InfoMsgEnum.OK.desc, data);
    }

    /**
     * 操作成功
     *
     * @param message
     * @param data
     * @return
     */
    public static <T> Result success(String message, T data) {
        Result rb = new Result();
        rb.setCode(InfoMsgEnum.OK.code);
        rb.setMessage(StringUtils.isEmpty(message) ?InfoMsgEnum.OK.desc : message);
        rb.setData(data);
        return rb;
    }

    /**
     * 失败
     */
    public static Result error(ErrorMsgEnum errorInfo) {
        return error(errorInfo.code, errorInfo.desc);
    }

    /**
     * 失败
     */
    public static Result error(int code, String message) {
        Result rb = new Result();
        rb.setCode(code);
        rb.setMessage(message);
        rb.setData(null);
        return rb;
    }

    /**
     * 失败
     */
    public static <T> Result error(int code, String message, T result) {
        Result rb = new Result();
        rb.setCode(code);
        rb.setMessage(message);
        rb.setData(result);
        return rb;
    }

    /**
     * 失败
     */
    public static Result error(String message) {
        Result rb = new Result();
        rb.setCode(-1);
        rb.setMessage(message);
        rb.setData(null);
        return rb;
    }

}
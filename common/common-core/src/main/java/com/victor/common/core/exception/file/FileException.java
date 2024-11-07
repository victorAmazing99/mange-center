package com.victor.common.core.exception.file;

import com.victor.common.core.exception.base.BaseException;

/**
 * @author victor
 * @ClassName FileException.java
 * @company
 * @Description
 * @createTime 2022年11月09日 11:59:00
 */
public class FileException extends BaseException {
    private static final long serialVersionUID = 1L;

    public FileException(String code, Object[] args)
    {
        super("file", code, args, null);
    }
}

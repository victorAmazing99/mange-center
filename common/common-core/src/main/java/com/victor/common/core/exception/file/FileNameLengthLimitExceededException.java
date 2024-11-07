package com.victor.common.core.exception.file;

/**
 * @author victor
 * @ClassName FileNameLengthLimitExceededException.java
 * @company
 * @Description 文件名称超长限制异常类
 * @createTime 2022年11月09日 13:11:00
 */
public class FileNameLengthLimitExceededException extends FileException{

    private static final long serialVersionUID = 1L;

    public FileNameLengthLimitExceededException(int defaultFileNameLength)
    {
        super("upload.filename.exceed.length", new Object[] { defaultFileNameLength });
    }
}

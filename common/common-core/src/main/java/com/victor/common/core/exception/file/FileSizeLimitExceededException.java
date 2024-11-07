package com.victor.common.core.exception.file;

/**
 * @author victor
 * @ClassName FileSizeLimitExceededException.java
 * @company
 * @Description
 * @createTime 2022年11月09日 13:11:00
 */
public class FileSizeLimitExceededException extends FileException{
    private static final long serialVersionUID = 1L;

    public FileSizeLimitExceededException(long defaultMaxSize)
    {
        super("upload.exceed.maxSize", new Object[] { defaultMaxSize });
    }
}

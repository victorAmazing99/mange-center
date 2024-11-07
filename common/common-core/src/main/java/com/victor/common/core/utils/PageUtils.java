package com.victor.common.core.utils;

import com.victor.common.core.utils.sql.SqlUtil;
import com.victor.common.core.web.page.PageDomain;
import com.victor.common.core.web.page.TableSupport;
import com.github.pagehelper.PageHelper;

/**
 * @author victor
 * @ClassName PageUtils.java
 * @company
 * @Description
 * @createTime 2022年11月09日 11:14:00
 */
public class PageUtils extends PageHelper {
    /**
     * 设置请求分页数据
     */
    public static void startPage()
    {
        PageDomain pageDomain = TableSupport.buildPageRequest();
        Integer pageNum = pageDomain.getPageNum();
        Integer pageSize = pageDomain.getPageSize();
        String orderBy = SqlUtil.escapeOrderBySql(pageDomain.getOrderBy());
        Boolean reasonable = pageDomain.getReasonable();
        PageHelper.startPage(pageNum, pageSize, orderBy).setReasonable(reasonable);
    }

    /**
     * 清理分页的线程变量
     */
    public static void clearPage()
    {
        PageHelper.clearPage();
    }
}

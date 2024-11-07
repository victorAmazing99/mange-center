package com.victor.common.security.filter;


import com.alibaba.fastjson2.JSONObject;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Map;

public class DecryptRequestWrapper extends HttpServletRequestWrapper {

    private final String decryptedParam;

    private final Map<String, String[]> map;

    public DecryptRequestWrapper(HttpServletRequest request, String decryptedParam, Map<String, String[]> map) {
        super(request);
        this.decryptedParam = decryptedParam;
        this.map = map;

    }

    @Override
    public BufferedReader getReader() throws IOException {
        return new BufferedReader(new InputStreamReader(getInputStream()));
    }


    @Override
    public ServletInputStream getInputStream() throws IOException {
        final byte[] bytes = decryptedParam.getBytes();
        return new ServletInputStream() {
            private int lastIndexRetrieved = -1;
            private ReadListener readListener = null;

            @Override
            public boolean isFinished() {
                return (lastIndexRetrieved == bytes.length - 1);
            }

            @Override
            public boolean isReady() {
                return isFinished();
            }

            @Override
            public void setReadListener(ReadListener readListener) {
                this.readListener = readListener;
                if (!isFinished()) {
                    try {
                        readListener.onDataAvailable();
                    } catch (IOException e) {
                        readListener.onError(e);
                    }
                } else {
                    try {
                        readListener.onAllDataRead();
                    } catch (IOException e) {
                        readListener.onError(e);
                    }
                }
            }

            @Override
            public int read() throws IOException {
                if (isFinished()) {
                    return -1;
                }
                int i = bytes[lastIndexRetrieved + 1];
                lastIndexRetrieved++;
                if (isFinished() && (readListener != null)) {
                    try {
                        readListener.onAllDataRead();
                    } catch (IOException ex) {
                        readListener.onError(ex);
                        throw ex;
                    }
                }
                return i;
            }
        };
    }

    @Override
    public Enumeration<String> getParameterNames()
    {
        return Collections.enumeration(map.keySet());
    }

    @Override
    public Map<String, String[]> getParameterMap() {
        return map;
    }

    @Override
    public String getParameter(String name) {
        if (map == null) {
            return null;
        } else {
            if( map.get(name)==null) {
                return null;

            }else {
                return map.get(name)+"";
            }
        }
    }

    /**
     * 重写getParameterValues方法获得参数，对特殊字符进行过滤
     */
    @Override
    public String[] getParameterValues(String name) {

        if(name.equals("0")){
            return new String[]{JSONObject.toJSONString(map)};
        }
        if (map == null) {
            return null;
        } else {
            String[] stringArray = {map.get(name) + ""};
            return stringArray;
        }

    }


}
package com.victor.common.core.enums;

public enum PwVisitTypeEnum {
    fist(1,"第1次产前检查服务"),
    two(2,"第2次产前检查服务"),
    three(3,"第3次产前检查服务"),
    four(4,"第4次产前检查服务"),
    five(5,"第5次产前检查服务"),
    six(6,"产后访视"),
    seven(7,"产后42天健康检查");

    public Integer typeCode;

    public String typeName;

     PwVisitTypeEnum(Integer typeCode,String typeName){
      this.typeCode =typeCode;
      this.typeName =typeName;
    }


    public static String getTypeName(Integer typeCode){

         for(PwVisitTypeEnum pwVisitTypeEnum : PwVisitTypeEnum.values()){

             if(typeCode.equals(pwVisitTypeEnum.typeCode)){
                 return pwVisitTypeEnum.typeName;
             }
         }

         return "";
    }

}

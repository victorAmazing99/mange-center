CREATE TABLE "MANAGE_SYSTEM"."SYS_AGENCY"
(
"ID" INT IDENTITY(1, 1) NOT NULL,
"ORG_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"ORG_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"REGISTER_NUM" VARCHAR(50) DEFAULT '' NOT NULL,
"PRINCIPAL" VARCHAR(100) DEFAULT '' NOT NULL,
"ADDRESS" VARCHAR(400) DEFAULT '' NOT NULL,
"PHONE" VARCHAR(50) DEFAULT '' NOT NULL,
"LEVEL_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"LEVEL_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"TYPE" SMALLINT DEFAULT 0 NOT NULL,
"INTRODUCE" VARCHAR(1000) DEFAULT '' NOT NULL,
"ABBREVIATION" VARCHAR(50) DEFAULT '' NOT NULL,
"ORG_CATEGORY_CODE" VARCHAR(10) DEFAULT '' NOT NULL,
"ORG_CATEGORY_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"CLOSE_STATUS" SMALLINT DEFAULT 0 NOT NULL,
"OFFICIAL_NAME" VARCHAR(12) DEFAULT '' NOT NULL,
"ORG_PIC" TEXT DEFAULT '' NOT NULL,
"QR_CODE_PIC" TEXT DEFAULT '' NOT NULL,
"RULE_SYSTEM_TYPE" INT DEFAULT 1 NOT NULL,
"LOGO_PIC" TEXT DEFAULT '' NOT NULL,
"IS_COMMUNITY" SMALLINT DEFAULT 0 NOT NULL,
CONSTRAINT "PK_SYS_HOSPITAL_ID" NOT CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_AGENCY" IS '机构信息表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."ABBREVIATION" IS '简称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."ADDRESS" IS '详细地址';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."CLOSE_STATUS" IS '停用(0-启用，1-停用)';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."INTRODUCE" IS '介绍';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."IS_COMMUNITY" IS '是否所属社区医院（0-否，1-是）';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."LEVEL_CODE" IS '等级编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."LEVEL_NAME" IS '等级';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."LOGO_PIC" IS 'logo图片';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."OFFICIAL_NAME" IS '公众号名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."ORG_CATEGORY_CODE" IS '机构类别代码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."ORG_CATEGORY_NAME" IS '机构类别';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."ORG_CODE" IS '所属机构编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."ORG_NAME" IS '医院名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."ORG_PIC" IS '机构图片';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."PHONE" IS '电话';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."PRINCIPAL" IS '负责人';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."QR_CODE_PIC" IS '二维码图片';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."REGISTER_NUM" IS '登记号';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."RULE_SYSTEM_TYPE" IS '规则系统类型（1-本系统，2-第三方）';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_AGENCY"."TYPE" IS '类型(0-父级 1-子级)';


CREATE TABLE "MANAGE_SYSTEM"."SYS_DICTIONARY"
(
"ID" INT IDENTITY(1, 1) NOT NULL,
"FIELD_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"SYSTEM_TYPE" VARCHAR(50) DEFAULT '' NOT NULL,
"CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"VALUE" VARCHAR(100) DEFAULT '' NOT NULL,
"REMARK" VARCHAR(100) DEFAULT '' NOT NULL,
CONSTRAINT "PK_SYS_DICTIONARY_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_DICTIONARY" IS '字典表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_DICTIONARY"."CODE" IS '编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_DICTIONARY"."FIELD_NAME" IS '字段名';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_DICTIONARY"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_DICTIONARY"."REMARK" IS '注释';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_DICTIONARY"."SYSTEM_TYPE" IS '字典国标码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_DICTIONARY"."VALUE" IS '值';


CREATE TABLE "MANAGE_SYSTEM"."SYS_LOGIN_LOG"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"USER_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"MSG" VARCHAR(50) DEFAULT '' NOT NULL,
"STATUS" SMALLINT DEFAULT 1 NOT NULL,
"IPADDR" VARCHAR(50) DEFAULT '' NOT NULL,
"ACCESS_TIME" TIMESTAMP(3) DEFAULT GETDATE() NOT NULL,
CONSTRAINT "PK_SYS_LOGIN_LOG_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_LOGIN_LOG" IS '访问日志表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_LOGIN_LOG"."ACCESS_TIME" IS '访问时间';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_LOGIN_LOG"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_LOGIN_LOG"."IPADDR" IS 'IP地址';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_LOGIN_LOG"."MSG" IS '描述';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_LOGIN_LOG"."STATUS" IS '状态';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_LOGIN_LOG"."USER_NAME" IS '登录名';


CREATE TABLE "MANAGE_SYSTEM"."SYS_MENU"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"SYSTEM_ID" BIGINT DEFAULT 0 NOT NULL,
"NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"PARENT_ID" BIGINT DEFAULT 0 NOT NULL,
"URL" VARCHAR(50) DEFAULT '' NOT NULL,
"COMPONENT" VARCHAR(50) DEFAULT '' NOT NULL,
"ICON" VARCHAR(50) DEFAULT '' NOT NULL,
"HIDDEN" BIT DEFAULT 0 NOT NULL,
"AFFIX" BIT DEFAULT 0 NOT NULL,
"ABI_ID" INT DEFAULT (-1) NOT NULL,
"IS_SCREEN" BIT DEFAULT 0 NOT NULL,
CONSTRAINT "PK_SYS_MENU_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_MENU" IS '菜单表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."ABI_ID" IS 'ABI主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."AFFIX" IS '附加（0-否，1-是）';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."COMPONENT" IS '组件';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."HIDDEN" IS '隐藏（0-否，1-是）';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."ICON" IS '图标';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."IS_SCREEN" IS '是否大屏（0-否，1-是）';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."NAME" IS '菜单名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."PARENT_ID" IS '父级Id';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."SYSTEM_ID" IS '所属系统Id';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_MENU"."URL" IS '路径';


CREATE TABLE "MANAGE_SYSTEM"."SYS_OPER_LOG"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"TITLE" VARCHAR(1000) DEFAULT '' NOT NULL,
"BUSINESS_TYPE" INT DEFAULT 0 NOT NULL,
"METHOD" VARCHAR(1000) DEFAULT '' NOT NULL,
"REQUEST_METHOD" VARCHAR(1000) DEFAULT '' NOT NULL,
"OPERATOR_TYPE" INT DEFAULT 0 NOT NULL,
"OPER_NAME" VARCHAR(100) DEFAULT '' NOT NULL,
"DEPT_NAME" VARCHAR(100) DEFAULT '' NOT NULL,
"OPER_URL" VARCHAR(100) DEFAULT '' NOT NULL,
"OPER_IP" VARCHAR(128) DEFAULT '' NOT NULL,
"OPER_LOATION" VARCHAR(500) DEFAULT '' NOT NULL,
"OPER_PARAM" VARCHAR(3900) DEFAULT '' NOT NULL,
"JSON_RESULT" VARCHAR(3900) DEFAULT '' NOT NULL,
"STSTUS" INT DEFAULT 0 NOT NULL,
"ERROR_MSG" VARCHAR(2000) DEFAULT '' NOT NULL,
"OPER_TIME" TIMESTAMP(3) DEFAULT GETDATE() NOT NULL,
CONSTRAINT "PK_SYS_OPER_LOG_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_OPER_LOG" IS '操作日志表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."BUSINESS_TYPE" IS '业务类型（0其它 1新增 2修改 3删除）';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."DEPT_NAME" IS '部门名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."ERROR_MSG" IS '错误消息';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."JSON_RESULT" IS '返回参数';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."METHOD" IS '请求方法';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."OPERATOR_TYPE" IS '操作类别（0其它 1后台用户 2手机端用户）';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."OPER_IP" IS '请求IP';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."OPER_LOATION" IS '操作地址';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."OPER_NAME" IS '操作人员';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."OPER_PARAM" IS '请求参数';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."OPER_TIME" IS '操作时间';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."OPER_URL" IS '请求URL';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."REQUEST_METHOD" IS '请求方式';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."STSTUS" IS '操作状态(0正常1异常)';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_OPER_LOG"."TITLE" IS '操作模块';


CREATE TABLE "MANAGE_SYSTEM"."SYS_ROLE"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"SYSTEM_ID" BIGINT DEFAULT 0 NOT NULL,
"SYSTEM_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"ROLE_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"DESCRIBE" VARCHAR(200) DEFAULT '' NOT NULL,
CONSTRAINT "PK_SYS_ROLE_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_ROLE" IS '角色表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE"."DESCRIBE" IS '描述';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE"."NAME" IS '角色名';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE"."ROLE_CODE" IS '角色编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE"."SYSTEM_ID" IS '所属系统';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE"."SYSTEM_NAME" IS '所属系统名称';


CREATE TABLE "MANAGE_SYSTEM"."SYS_ROLE_MENU"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"SYSTEM_ID" BIGINT DEFAULT 0 NOT NULL,
"ROLE_ID" BIGINT DEFAULT 0 NOT NULL,
"MENU_ID" BIGINT DEFAULT 0 NOT NULL,
CONSTRAINT "PK_SYS_ROLE_MENU_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_ROLE_MENU" IS '角色菜单表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE_MENU"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE_MENU"."MENU_ID" IS '菜单ID';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE_MENU"."ROLE_ID" IS '角色Id';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_ROLE_MENU"."SYSTEM_ID" IS '所属系统';


CREATE TABLE "MANAGE_SYSTEM"."SYS_SECURITY_QUESTION"
(
"ID" INT IDENTITY(1, 1) NOT NULL,
"QUESTION" VARCHAR(150) DEFAULT '' NOT NULL,
CONSTRAINT "PK_SYS_SECURITY_QUESTION_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_SECURITY_QUESTION" IS '密保问题表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SECURITY_QUESTION"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SECURITY_QUESTION"."QUESTION" IS '密保问题';


CREATE TABLE "MANAGE_SYSTEM"."SYS_SUB_AGENCY"
(
"ID" INT IDENTITY(1, 1) NOT NULL,
"ORG_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"ORG_SUB_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"ORG_SUB_NAME" VARCHAR(100) DEFAULT '' NOT NULL,
"REGISTER_NUM" VARCHAR(50) DEFAULT '' NOT NULL,
"PRINCIPAL" VARCHAR(100) DEFAULT '' NOT NULL,
"ADDRESS" VARCHAR(400) DEFAULT '' NOT NULL,
"PHONE" VARCHAR(50) DEFAULT '' NOT NULL,
"LEVEL_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"LEVEL_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"TYPE" SMALLINT DEFAULT 1 NOT NULL,
"INTRODUCE" VARCHAR(1000) DEFAULT '' NOT NULL,
CONSTRAINT "PK_SYS_SUB_HOSPITAL_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_SUB_AGENCY" IS '子机构信息表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."ADDRESS" IS '详细地址';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."INTRODUCE" IS '介绍';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."LEVEL_CODE" IS '等级编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."LEVEL_NAME" IS '等级';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."ORG_CODE" IS '所属父机构编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."ORG_SUB_CODE" IS '子机构编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."ORG_SUB_NAME" IS '子机构名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."PHONE" IS '电话';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."PRINCIPAL" IS '负责人';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."REGISTER_NUM" IS '登记号';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SUB_AGENCY"."TYPE" IS '类型(0-父级 1-子级)';


CREATE UNIQUE  INDEX "UQ_SYS_SUB_HOSPITAL_OSC" ON "MANAGE_SYSTEM"."SYS_SUB_AGENCY"("ORG_SUB_CODE" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;

CREATE TABLE "MANAGE_SYSTEM"."SYS_SYSTEM"
(
"ID" INT IDENTITY(1, 1) NOT NULL,
"NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"IMAGE" VARCHAR(50) DEFAULT '' NOT NULL,
"PATH" VARCHAR(50) DEFAULT '' NOT NULL,
"READ_ONLY_IMAGE" VARCHAR(50) DEFAULT '' NOT NULL,
CONSTRAINT "PK_SYS_SYSTEM_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_SYSTEM" IS '系统信息表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SYSTEM"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SYSTEM"."IMAGE" IS 'ICON图标';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SYSTEM"."NAME" IS '系统名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SYSTEM"."PATH" IS '请求路径';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_SYSTEM"."READ_ONLY_IMAGE" IS '只读图片';


CREATE TABLE "MANAGE_SYSTEM"."SYS_USER"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"USER_NAME" VARCHAR(50) NOT NULL,
"PASSWORD" VARCHAR(150) DEFAULT '' NOT NULL,
"NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"SEX" VARCHAR(50) DEFAULT '' NOT NULL,
"PHONE" VARCHAR(50) DEFAULT '' NOT NULL,
"IMAGE" VARCHAR(50) DEFAULT '' NOT NULL,
"DEPT_ID" BIGINT DEFAULT (-1) NOT NULL,
"ORG_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"ORG_SUB_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"ENABLED" SMALLINT DEFAULT 0 NOT NULL,
"IS_DELETE" SMALLINT DEFAULT 0 NOT NULL,
"SALT" VARCHAR(50) DEFAULT '' NOT NULL,
"PAS_UPDATE_DATE" DATE DEFAULT '' NOT NULL,
"PASSWORD_EXPIRED_DAYS" INT DEFAULT 180 NOT NULL,
"LOGIN_EXPIRED_DURATION" INT DEFAULT 30 NOT NULL,
"PASSWORD_ERROR_COUNT" INT DEFAULT 5 NOT NULL,
"LOGIN_LOCK_DURATION" INT DEFAULT 10 NOT NULL,
"ORG_NAME" VARCHAR(100) DEFAULT '' NOT NULL,
"ORG_SUB_NAME" VARCHAR(100) DEFAULT '' NOT NULL,
"CATEGORY_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"CATEGORY_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"PROFESSION_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"PROFESSION_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"DUTY_CODE" VARCHAR(50) DEFAULT '' NOT NULL,
"DUTY_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"IDCARD" VARCHAR(18) DEFAULT '' NOT NULL,
"DEPT_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"SEX_NAME" VARCHAR(50) DEFAULT '' NOT NULL,
"THIRD_NO" VARCHAR(100) DEFAULT '' NOT NULL,
"SIGN_PIC" TEXT DEFAULT '' NOT NULL,
"QR_CODE_PIC" TEXT DEFAULT '' NOT NULL,
"PUBLIC_ACCOUNT" VARCHAR(100),
CONSTRAINT "PK_SYS_USER_ID" NOT CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_USER" IS '用户信息表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."CATEGORY_CODE" IS '人员类别编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."CATEGORY_NAME" IS '人员类别';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."DEPT_ID" IS '部门';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."DEPT_NAME" IS '部门名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."DUTY_CODE" IS '职务编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."DUTY_NAME" IS '职务';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."ENABLED" IS '是否停用';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."IDCARD" IS '身份证号';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."IMAGE" IS '头像';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."IS_DELETE" IS '是否删除';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."LOGIN_EXPIRED_DURATION" IS '登录有效时长(分钟)';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."LOGIN_LOCK_DURATION" IS '登录锁定时长(分钟)';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."NAME" IS '姓名';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."ORG_CODE" IS '所属机构编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."ORG_NAME" IS '机构名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."ORG_SUB_CODE" IS '附属机构编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."ORG_SUB_NAME" IS '子机构名称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."PASSWORD" IS '密码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."PASSWORD_ERROR_COUNT" IS '密码输入次数限制';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."PASSWORD_EXPIRED_DAYS" IS '密码有效天数';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."PAS_UPDATE_DATE" IS '修改日期';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."PHONE" IS '电话';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."PROFESSION_CODE" IS '职称编码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."PROFESSION_NAME" IS '职称';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."PUBLIC_ACCOUNT" IS 'saa平台账号';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."QR_CODE_PIC" IS '二维码图片';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."SALT" IS '加盐key';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."SEX" IS '性别代码';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."SEX_NAME" IS '性别';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."SIGN_PIC" IS '签名图片';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."THIRD_NO" IS '第三方工号';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER"."USER_NAME" IS '用户名';


CREATE UNIQUE  INDEX "UQ_USER_NAME" ON "MANAGE_SYSTEM"."SYS_USER"("USER_NAME" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;

CREATE TABLE "MANAGE_SYSTEM"."SYS_USER_ROLE"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"USER_ID" BIGINT DEFAULT 0 NOT NULL,
"SYSTEM_ID" BIGINT DEFAULT 0 NOT NULL,
"ROLE_ID" BIGINT DEFAULT 0 NOT NULL,
CONSTRAINT "PK_SYS_USER_ROLE_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_USER_ROLE" IS '用户角色表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_ROLE"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_ROLE"."ROLE_ID" IS '角色id';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_ROLE"."SYSTEM_ID" IS '系统id';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_ROLE"."USER_ID" IS '用户Id';


CREATE TABLE "MANAGE_SYSTEM"."SYS_USER_SECURITY"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"QUESTION_ID1" INT DEFAULT 0 NOT NULL,
"ANSWER1" VARCHAR(100) DEFAULT '' NOT NULL,
"QUESTION_ID2" INT DEFAULT 0 NOT NULL,
"ANSWER2" VARCHAR(100) DEFAULT '' NOT NULL,
"QUESTION_ID3" INT DEFAULT 0 NOT NULL,
"ANSWER3" VARCHAR(100) DEFAULT '' NOT NULL,
"USER_ID" BIGINT DEFAULT 0 NOT NULL,
CONSTRAINT "PK_SYS_USER_SECURITY_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_USER_SECURITY" IS '用户密保问题信息';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SECURITY"."ANSWER1" IS '答案1';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SECURITY"."ANSWER2" IS '答案2';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SECURITY"."ANSWER3" IS '答案3';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SECURITY"."QUESTION_ID1" IS '问题1ID';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SECURITY"."QUESTION_ID2" IS '问题2ID';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SECURITY"."QUESTION_ID3" IS '问题3ID';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SECURITY"."USER_ID" IS '用户ID';


CREATE TABLE "MANAGE_SYSTEM"."SYS_USER_SYSTEM"
(
"ID" BIGINT IDENTITY(1, 1) NOT NULL,
"USER_ID" BIGINT DEFAULT 0 NOT NULL,
"SYSTEM_ID" BIGINT DEFAULT 0 NOT NULL,
CONSTRAINT "PK_SYS_USER_SYSTEM_ID" CLUSTER PRIMARY KEY("ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_SYSTEM"."SYS_USER_SYSTEM" IS '用户系统信息表';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SYSTEM"."ID" IS '主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SYSTEM"."SYSTEM_ID" IS '系统表主键';
COMMENT ON COLUMN "MANAGE_SYSTEM"."SYS_USER_SYSTEM"."USER_ID" IS '用户表主键';



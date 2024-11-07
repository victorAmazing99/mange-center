CREATE TABLE "MANAGE_JOB"."QRTZ_BLOB_TRIGGERS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"TRIGGER_NAME" VARCHAR(150) NOT NULL,
"TRIGGER_GROUP" VARCHAR(150) NOT NULL,
"BLOB_DATA" IMAGE,
CONSTRAINT "PK_QRTZ_BLOB_TRIGGERS" NOT CLUSTER PRIMARY KEY("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_BLOB_TRIGGERS" IS 'Blob类型的触发器表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_BLOB_TRIGGERS"."BLOB_DATA" IS '存放持久化Trigger对象';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_BLOB_TRIGGERS"."SCHED_NAME" IS '调度名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_BLOB_TRIGGERS"."TRIGGER_GROUP" IS 'qrtz_triggers表trigger_group的外键';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_BLOB_TRIGGERS"."TRIGGER_NAME" IS 'qrtz_triggers表trigger_name的外键';


CREATE TABLE "MANAGE_JOB"."QRTZ_CALENDARS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"CALENDAR_NAME" VARCHAR(200) NOT NULL,
"CALENDAR" IMAGE NOT NULL,
CONSTRAINT "PK_QRTZ_CALENDARS" NOT CLUSTER PRIMARY KEY("SCHED_NAME", "CALENDAR_NAME")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_CALENDARS" IS '日历信息表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_CALENDARS"."CALENDAR" IS '存放持久化calendar对象';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_CALENDARS"."CALENDAR_NAME" IS '日历名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_CALENDARS"."SCHED_NAME" IS '调度名称';


CREATE TABLE "MANAGE_JOB"."QRTZ_CRON_TRIGGERS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"TRIGGER_NAME" VARCHAR(150) NOT NULL,
"TRIGGER_GROUP" VARCHAR(150) NOT NULL,
"CRON_EXPRESSION" VARCHAR(120) NOT NULL,
"TIME_ZONE_ID" VARCHAR(80),
CONSTRAINT "PK_QRTZ_CRON_TRIGGERS" CLUSTER PRIMARY KEY("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP"),
CONSTRAINT "FK_QRTZ_CRON_TRIGGERS_QRTZ_TRIGGERS" FOREIGN KEY("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP") REFERENCES "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP") ON DELETE CASCADE ) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_CRON_TRIGGERS" IS 'Cron类型的触发器表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_CRON_TRIGGERS"."CRON_EXPRESSION" IS 'cron表达式';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_CRON_TRIGGERS"."SCHED_NAME" IS '调度名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_CRON_TRIGGERS"."TIME_ZONE_ID" IS '时区';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_CRON_TRIGGERS"."TRIGGER_GROUP" IS 'qrtz_triggers表trigger_group的外键';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_CRON_TRIGGERS"."TRIGGER_NAME" IS 'qrtz_triggers表trigger_name的外键';


CREATE TABLE "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"ENTRY_ID" VARCHAR(140) NOT NULL,
"TRIGGER_NAME" VARCHAR(150) NOT NULL,
"TRIGGER_GROUP" VARCHAR(150) NOT NULL,
"INSTANCE_NAME" VARCHAR(200) NOT NULL,
"FIRED_TIME" BIGINT NOT NULL,
"SCHED_TIME" BIGINT NOT NULL,
"PRIORITY" INT NOT NULL,
"STATE" VARCHAR(16) NOT NULL,
"JOB_NAME" VARCHAR(150),
"JOB_GROUP" VARCHAR(150),
"IS_NONCONCURRENT" BIT,
"REQUESTS_RECOVERY" BIT,
CONSTRAINT "PK_QRTZ_FIRED_TRIGGERS" CLUSTER PRIMARY KEY("SCHED_NAME", "ENTRY_ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS" IS '已触发的触发器表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."ENTRY_ID" IS '调度器实例id';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."FIRED_TIME" IS '触发的时间';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."INSTANCE_NAME" IS '调度器实例名';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."IS_NONCONCURRENT" IS '是否并发';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."JOB_GROUP" IS '任务组名';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."JOB_NAME" IS '任务名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."PRIORITY" IS '优先级';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."REQUESTS_RECOVERY" IS '是否接受恢复执行';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."SCHED_NAME" IS '调度名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."SCHED_TIME" IS '定时器制定的时间';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."STATE" IS '状态';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."TRIGGER_GROUP" IS 'qrtz_triggers表trigger_group的外键';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"."TRIGGER_NAME" IS 'qrtz_triggers表trigger_name的外键';


CREATE  INDEX "IDX_QRTZ_FT_INST_JOB_REQ_RCVRY" ON "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"("SCHED_NAME" ASC,"INSTANCE_NAME" ASC,"REQUESTS_RECOVERY" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_FT_G_T" ON "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"("SCHED_NAME" ASC,"TRIGGER_GROUP" ASC,"TRIGGER_NAME" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_FT_G_J" ON "MANAGE_JOB"."QRTZ_FIRED_TRIGGERS"("SCHED_NAME" ASC,"JOB_GROUP" ASC,"JOB_NAME" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;

CREATE TABLE "MANAGE_JOB"."QRTZ_JOB_DETAILS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"JOB_NAME" VARCHAR(150) NOT NULL,
"JOB_GROUP" VARCHAR(150) NOT NULL,
"DESCRIPTION" VARCHAR(250),
"JOB_CLASS_NAME" VARCHAR(250) NOT NULL,
"IS_DURABLE" BIT NOT NULL,
"IS_NONCONCURRENT" BIT NOT NULL,
"IS_UPDATE_DATA" BIT NOT NULL,
"REQUESTS_RECOVERY" BIT NOT NULL,
"JOB_DATA" IMAGE,
CONSTRAINT "PK_QRTZ_JOB_DETAILS" NOT CLUSTER PRIMARY KEY("SCHED_NAME", "JOB_NAME", "JOB_GROUP")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_JOB_DETAILS" IS '任务详细信息表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."DESCRIPTION" IS '相关介绍';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."IS_DURABLE" IS '是否持久化';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."IS_NONCONCURRENT" IS '是否并发';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."IS_UPDATE_DATA" IS '是否更新数据';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."JOB_CLASS_NAME" IS '执行任务类名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."JOB_DATA" IS '存放持久化job对象';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."JOB_GROUP" IS '任务组名';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."JOB_NAME" IS '任务名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."REQUESTS_RECOVERY" IS '是否接受恢复执行';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_JOB_DETAILS"."SCHED_NAME" IS '调度名称';


CREATE TABLE "MANAGE_JOB"."QRTZ_LOCKS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"LOCK_NAME" VARCHAR(40) NOT NULL,
CONSTRAINT "PK_QRTZ_LOCKS" CLUSTER PRIMARY KEY("SCHED_NAME", "LOCK_NAME")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_LOCKS" IS '存储的悲观锁信息表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_LOCKS"."LOCK_NAME" IS '悲观锁名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_LOCKS"."SCHED_NAME" IS '调度名称';


CREATE TABLE "MANAGE_JOB"."QRTZ_PAUSED_TRIGGER_GRPS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"TRIGGER_GROUP" VARCHAR(150) NOT NULL,
CONSTRAINT "PK_QRTZ_PAUSED_TRIGGER_GRPS" CLUSTER PRIMARY KEY("SCHED_NAME", "TRIGGER_GROUP")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_PAUSED_TRIGGER_GRPS" IS '暂停的触发器表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_PAUSED_TRIGGER_GRPS"."SCHED_NAME" IS '调度名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_PAUSED_TRIGGER_GRPS"."TRIGGER_GROUP" IS 'qrtz_triggers表trigger_group的外键';


CREATE TABLE "MANAGE_JOB"."QRTZ_SCHEDULER_STATE"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"INSTANCE_NAME" VARCHAR(200) NOT NULL,
"LAST_CHECKIN_TIME" BIGINT NOT NULL,
"CHECKIN_INTERVAL" BIGINT NOT NULL,
CONSTRAINT "PK_QRTZ_SCHEDULER_STATE" CLUSTER PRIMARY KEY("SCHED_NAME", "INSTANCE_NAME")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_SCHEDULER_STATE" IS '调度器状态表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SCHEDULER_STATE"."CHECKIN_INTERVAL" IS '检查间隔时间';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SCHEDULER_STATE"."INSTANCE_NAME" IS '实例名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SCHEDULER_STATE"."LAST_CHECKIN_TIME" IS '上次检查时间';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SCHEDULER_STATE"."SCHED_NAME" IS '调度名称';


CREATE TABLE "MANAGE_JOB"."QRTZ_SIMPLE_TRIGGERS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"TRIGGER_NAME" VARCHAR(150) NOT NULL,
"TRIGGER_GROUP" VARCHAR(150) NOT NULL,
"REPEAT_COUNT" INT NOT NULL,
"REPEAT_INTERVAL" BIGINT NOT NULL,
"TIMES_TRIGGERED" INT NOT NULL,
CONSTRAINT "PK_QRTZ_SIMPLE_TRIGGERS" CLUSTER PRIMARY KEY("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP"),
CONSTRAINT "FK_QRTZ_SIMPLE_TRIGGERS_QRTZ_TRIGGERS" FOREIGN KEY("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP") REFERENCES "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP") ON DELETE CASCADE ) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_SIMPLE_TRIGGERS" IS '简单触发器的信息表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPLE_TRIGGERS"."REPEAT_COUNT" IS '重复的次数统计';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPLE_TRIGGERS"."REPEAT_INTERVAL" IS '重复的间隔时间';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPLE_TRIGGERS"."SCHED_NAME" IS '调度名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPLE_TRIGGERS"."TIMES_TRIGGERED" IS '已经触发的次数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPLE_TRIGGERS"."TRIGGER_GROUP" IS 'qrtz_triggers表trigger_group的外键';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPLE_TRIGGERS"."TRIGGER_NAME" IS 'qrtz_triggers表trigger_name的外键';


CREATE TABLE "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"TRIGGER_NAME" VARCHAR(150) NOT NULL,
"TRIGGER_GROUP" VARCHAR(150) NOT NULL,
"STR_PROP_1" VARCHAR(512),
"STR_PROP_2" VARCHAR(512),
"STR_PROP_3" VARCHAR(512),
"INT_PROP_1" INT,
"INT_PROP_2" INT,
"LONG_PROP_1" BIGINT,
"LONG_PROP_2" BIGINT,
"DEC_PROP_1" NUMERIC,
"DEC_PROP_2" NUMERIC,
"BOOL_PROP_1" BIT,
"BOOL_PROP_2" BIT,
"TIME_ZONE_ID" VARCHAR(80),
CONSTRAINT "PK_QRTZ_SIMPROP_TRIGGERS" CLUSTER PRIMARY KEY("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP"),
CONSTRAINT "FK_QRTZ_SIMPROP_TRIGGERS_QRTZ_TRIGGERS" FOREIGN KEY("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP") REFERENCES "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP") ON DELETE CASCADE ) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS" IS '同步机制的行锁表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."BOOL_PROP_1" IS 'Boolean类型的trigger的第一个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."BOOL_PROP_2" IS 'Boolean类型的trigger的第二个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."DEC_PROP_1" IS 'decimal类型的trigger的第一个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."DEC_PROP_2" IS 'decimal类型的trigger的第二个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."INT_PROP_1" IS 'int类型的trigger的第一个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."INT_PROP_2" IS 'int类型的trigger的第二个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."LONG_PROP_1" IS 'long类型的trigger的第一个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."LONG_PROP_2" IS 'long类型的trigger的第二个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."SCHED_NAME" IS '调度名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."STR_PROP_1" IS 'String类型的trigger的第一个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."STR_PROP_2" IS 'String类型的trigger的第二个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."STR_PROP_3" IS 'String类型的trigger的第三个参数';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."TIME_ZONE_ID" IS '时区ID';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."TRIGGER_GROUP" IS 'qrtz_triggers表trigger_group的外键';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_SIMPROP_TRIGGERS"."TRIGGER_NAME" IS 'qrtz_triggers表trigger_name的外键';


CREATE TABLE "MANAGE_JOB"."QRTZ_TRIGGERS"
(
"SCHED_NAME" VARCHAR(120) NOT NULL,
"TRIGGER_NAME" VARCHAR(150) NOT NULL,
"TRIGGER_GROUP" VARCHAR(150) NOT NULL,
"JOB_NAME" VARCHAR(150) NOT NULL,
"JOB_GROUP" VARCHAR(150) NOT NULL,
"DESCRIPTION" VARCHAR(250),
"NEXT_FIRE_TIME" BIGINT,
"PREV_FIRE_TIME" BIGINT,
"PRIORITY" INT,
"TRIGGER_STATE" VARCHAR(16) NOT NULL,
"TRIGGER_TYPE" VARCHAR(8) NOT NULL,
"START_TIME" BIGINT NOT NULL,
"END_TIME" BIGINT,
"CALENDAR_NAME" VARCHAR(200),
"MISFIRE_INSTR" INT,
"JOB_DATA" IMAGE,
CONSTRAINT "PK_QRTZ_TRIGGERS" NOT CLUSTER PRIMARY KEY("SCHED_NAME", "TRIGGER_NAME", "TRIGGER_GROUP"),
CONSTRAINT "FK_QRTZ_TRIGGERS_QRTZ_JOB_DETAILS" FOREIGN KEY("SCHED_NAME", "JOB_NAME", "JOB_GROUP") REFERENCES "MANAGE_JOB"."QRTZ_JOB_DETAILS"("SCHED_NAME", "JOB_NAME", "JOB_GROUP")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."QRTZ_TRIGGERS" IS '触发器详细信息表';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."CALENDAR_NAME" IS '日程表名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."DESCRIPTION" IS '相关介绍';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."END_TIME" IS '结束时间';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."JOB_DATA" IS '存放持久化job对象';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."JOB_GROUP" IS 'qrtz_job_details表job_group的外键';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."JOB_NAME" IS 'qrtz_job_details表job_name的外键';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."MISFIRE_INSTR" IS '补偿执行的策略';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."NEXT_FIRE_TIME" IS '上一次触发时间（毫秒）';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."PREV_FIRE_TIME" IS '下一次触发时间（默认为-1表示不触发）';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."PRIORITY" IS '优先级';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."SCHED_NAME" IS '调度名称';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."START_TIME" IS '开始时间';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."TRIGGER_GROUP" IS '触发器所属组的名字';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."TRIGGER_NAME" IS '触发器的名字';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."TRIGGER_STATE" IS '触发器状态';
COMMENT ON COLUMN "MANAGE_JOB"."QRTZ_TRIGGERS"."TRIGGER_TYPE" IS '触发器的类型';


CREATE  INDEX "IDX_QRTZ_T_N_G_STATE" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"TRIGGER_GROUP" ASC,"TRIGGER_STATE" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_T_STATE" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"TRIGGER_STATE" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_T_NFT_ST_MISFIRE" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"MISFIRE_INSTR" ASC,"NEXT_FIRE_TIME" ASC,"TRIGGER_STATE" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_T_NEXT_FIRE_TIME" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"NEXT_FIRE_TIME" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_T_NFT_ST" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"TRIGGER_STATE" ASC,"NEXT_FIRE_TIME" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_T_G_J" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"JOB_GROUP" ASC,"JOB_NAME" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_T_N_STATE" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"TRIGGER_NAME" ASC,"TRIGGER_GROUP" ASC,"TRIGGER_STATE" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_T_C" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"CALENDAR_NAME" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;
CREATE  INDEX "IDX_QRTZ_T_NFT_ST_MISFIRE_GRP" ON "MANAGE_JOB"."QRTZ_TRIGGERS"("SCHED_NAME" ASC,"MISFIRE_INSTR" ASC,"NEXT_FIRE_TIME" ASC,"TRIGGER_GROUP" ASC,"TRIGGER_STATE" ASC) STORAGE(ON "MAIN", CLUSTERBTR) ;

CREATE TABLE "MANAGE_JOB"."SYS_JOB"
(
"JOB_ID" BIGINT IDENTITY(1, 1) NOT NULL,
"JOB_NAME" VARCHAR(64) DEFAULT '' NOT NULL,
"JOB_GROUP" VARCHAR(64) DEFAULT 'DEFAULT' NOT NULL,
"INVOKE_TARGET" VARCHAR(500) NOT NULL,
"CRON_EXPRESSION" VARCHAR(255) DEFAULT '',
"MISFIRE_POLICY" VARCHAR(20) DEFAULT '3',
"CONCURRENT" CHAR(1) DEFAULT '1',
"STATUS" CHAR(1) DEFAULT '0',
"CREATE_BY" VARCHAR(64) DEFAULT '',
"CREATE_TIME" TIMESTAMP(3) DEFAULT NULL,
"UPDATE_BY" VARCHAR(64) DEFAULT '',
"UPDATE_TIME" TIMESTAMP(3) DEFAULT NULL,
"REMARK" VARCHAR(500) DEFAULT '',
CONSTRAINT "PK__SYS_JOB__AE15A0E6F8FE056A" CLUSTER PRIMARY KEY("JOB_ID", "JOB_NAME", "JOB_GROUP")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."SYS_JOB" IS '定时任务调度表';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."CONCURRENT" IS '是否并发执行（0允许 1禁止）';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."CREATE_BY" IS '创建者';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."CREATE_TIME" IS '创建时间';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."CRON_EXPRESSION" IS 'cron执行表达式';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."INVOKE_TARGET" IS '调用目标字符串';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."JOB_GROUP" IS '任务组名';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."JOB_NAME" IS '任务名称';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."MISFIRE_POLICY" IS '计划执行错误策略（1立即执行 2执行一次 3放弃执行）';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."REMARK" IS '备注信息';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."STATUS" IS '状态（0正常 1暂停）';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."UPDATE_BY" IS '更新者';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB"."UPDATE_TIME" IS '更新时间';


CREATE TABLE "MANAGE_JOB"."SYS_JOB_LOG"
(
"JOB_LOG_ID" BIGINT IDENTITY(1, 1) NOT NULL,
"JOB_NAME" VARCHAR(64) NOT NULL,
"JOB_GROUP" VARCHAR(64),
"INVOKE_TARGET" VARCHAR(500) NOT NULL,
"JOB_MESSAGE" VARCHAR(500) DEFAULT NULL,
"STATUS" CHAR(1) DEFAULT '0',
"EXCEPTION_INFO" VARCHAR(2000) DEFAULT '',
"CREATE_TIME" TIMESTAMP(3) DEFAULT NULL,
CONSTRAINT "PK__SYS_JOB___C43235C0B98841B0" CLUSTER PRIMARY KEY("JOB_LOG_ID")) STORAGE(ON "MAIN", CLUSTERBTR) ;

COMMENT ON TABLE "MANAGE_JOB"."SYS_JOB_LOG" IS '定时任务调度日志表';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB_LOG"."CREATE_TIME" IS '创建时间';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB_LOG"."EXCEPTION_INFO" IS '异常信息';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB_LOG"."INVOKE_TARGET" IS '调用目标字符串';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB_LOG"."JOB_GROUP" IS '任务组名';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB_LOG"."JOB_LOG_ID" IS '任务日志ID';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB_LOG"."JOB_MESSAGE" IS '日志信息';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB_LOG"."JOB_NAME" IS '任务名称';
COMMENT ON COLUMN "MANAGE_JOB"."SYS_JOB_LOG"."STATUS" IS '执行状态（0正常 1失败）';



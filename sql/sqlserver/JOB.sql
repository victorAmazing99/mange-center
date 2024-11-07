/*
 Navicat Premium Data Transfer

 Source Server         : 开发环境
 Source Server Type    : SQL Server
 Source Server Version : 11007001
 Source Host           : 192.168.0.235:1433
 Source Catalog        : MANAGE_JOB_DEMO
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 11007001
 File Encoding         : 65001

 Date: 08/01/2024 15:08:03
*/


-- ----------------------------
-- Table structure for QRTZ_BLOB_TRIGGERS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_BLOB_TRIGGERS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_BLOB_TRIGGERS]
GO

CREATE TABLE [dbo].[QRTZ_BLOB_TRIGGERS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [BLOB_DATA] varbinary(max)  NULL
)
GO

ALTER TABLE [dbo].[QRTZ_BLOB_TRIGGERS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_BLOB_TRIGGERS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_name的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_BLOB_TRIGGERS',
'COLUMN', N'TRIGGER_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_group的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_BLOB_TRIGGERS',
'COLUMN', N'TRIGGER_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'存放持久化Trigger对象',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_BLOB_TRIGGERS',
'COLUMN', N'BLOB_DATA'
GO

EXEC sp_addextendedproperty
'MS_Description', N'Blob类型的触发器表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_BLOB_TRIGGERS'
GO


-- ----------------------------
-- Records of QRTZ_BLOB_TRIGGERS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_CALENDARS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_CALENDARS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_CALENDARS]
GO

CREATE TABLE [dbo].[QRTZ_CALENDARS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [CALENDAR_NAME] nvarchar(200) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [CALENDAR] varbinary(max)  NOT NULL
)
GO

ALTER TABLE [dbo].[QRTZ_CALENDARS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CALENDARS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'日历名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CALENDARS',
'COLUMN', N'CALENDAR_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'存放持久化calendar对象',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CALENDARS',
'COLUMN', N'CALENDAR'
GO

EXEC sp_addextendedproperty
'MS_Description', N'日历信息表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CALENDARS'
GO


-- ----------------------------
-- Records of QRTZ_CALENDARS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_CRON_TRIGGERS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_CRON_TRIGGERS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_CRON_TRIGGERS]
GO

CREATE TABLE [dbo].[QRTZ_CRON_TRIGGERS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [CRON_EXPRESSION] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TIME_ZONE_ID] nvarchar(80) COLLATE Chinese_PRC_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[QRTZ_CRON_TRIGGERS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CRON_TRIGGERS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_name的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CRON_TRIGGERS',
'COLUMN', N'TRIGGER_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_group的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CRON_TRIGGERS',
'COLUMN', N'TRIGGER_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'cron表达式',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CRON_TRIGGERS',
'COLUMN', N'CRON_EXPRESSION'
GO

EXEC sp_addextendedproperty
'MS_Description', N'时区',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CRON_TRIGGERS',
'COLUMN', N'TIME_ZONE_ID'
GO

EXEC sp_addextendedproperty
'MS_Description', N'Cron类型的触发器表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_CRON_TRIGGERS'
GO


-- ----------------------------
-- Records of QRTZ_CRON_TRIGGERS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_FIRED_TRIGGERS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_FIRED_TRIGGERS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_FIRED_TRIGGERS]
GO

CREATE TABLE [dbo].[QRTZ_FIRED_TRIGGERS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [ENTRY_ID] nvarchar(140) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [INSTANCE_NAME] nvarchar(200) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [FIRED_TIME] bigint  NOT NULL,
  [SCHED_TIME] bigint  NOT NULL,
  [PRIORITY] int  NOT NULL,
  [STATE] nvarchar(16) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [JOB_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NULL,
  [JOB_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NULL,
  [IS_NONCONCURRENT] bit  NULL,
  [REQUESTS_RECOVERY] bit  NULL
)
GO

ALTER TABLE [dbo].[QRTZ_FIRED_TRIGGERS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度器实例id',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'ENTRY_ID'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_name的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'TRIGGER_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_group的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'TRIGGER_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度器实例名',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'INSTANCE_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'触发的时间',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'FIRED_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'定时器制定的时间',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'SCHED_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'优先级',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'PRIORITY'
GO

EXEC sp_addextendedproperty
'MS_Description', N'状态',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'STATE'
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'JOB_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务组名',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'JOB_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'是否并发',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'IS_NONCONCURRENT'
GO

EXEC sp_addextendedproperty
'MS_Description', N'是否接受恢复执行',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS',
'COLUMN', N'REQUESTS_RECOVERY'
GO

EXEC sp_addextendedproperty
'MS_Description', N'已触发的触发器表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_FIRED_TRIGGERS'
GO


-- ----------------------------
-- Records of QRTZ_FIRED_TRIGGERS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_JOB_DETAILS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_JOB_DETAILS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_JOB_DETAILS]
GO

CREATE TABLE [dbo].[QRTZ_JOB_DETAILS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [JOB_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [JOB_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [DESCRIPTION] nvarchar(250) COLLATE Chinese_PRC_CI_AS  NULL,
  [JOB_CLASS_NAME] nvarchar(250) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [IS_DURABLE] bit  NOT NULL,
  [IS_NONCONCURRENT] bit  NOT NULL,
  [IS_UPDATE_DATA] bit  NOT NULL,
  [REQUESTS_RECOVERY] bit  NOT NULL,
  [JOB_DATA] varbinary(max)  NULL
)
GO

ALTER TABLE [dbo].[QRTZ_JOB_DETAILS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'JOB_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务组名',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'JOB_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'相关介绍',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'DESCRIPTION'
GO

EXEC sp_addextendedproperty
'MS_Description', N'执行任务类名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'JOB_CLASS_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'是否持久化',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'IS_DURABLE'
GO

EXEC sp_addextendedproperty
'MS_Description', N'是否并发',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'IS_NONCONCURRENT'
GO

EXEC sp_addextendedproperty
'MS_Description', N'是否更新数据',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'IS_UPDATE_DATA'
GO

EXEC sp_addextendedproperty
'MS_Description', N'是否接受恢复执行',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'REQUESTS_RECOVERY'
GO

EXEC sp_addextendedproperty
'MS_Description', N'存放持久化job对象',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS',
'COLUMN', N'JOB_DATA'
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务详细信息表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_JOB_DETAILS'
GO


-- ----------------------------
-- Records of QRTZ_JOB_DETAILS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_LOCKS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_LOCKS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_LOCKS]
GO

CREATE TABLE [dbo].[QRTZ_LOCKS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [LOCK_NAME] nvarchar(40) COLLATE Chinese_PRC_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[QRTZ_LOCKS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_LOCKS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'悲观锁名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_LOCKS',
'COLUMN', N'LOCK_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'存储的悲观锁信息表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_LOCKS'
GO


-- ----------------------------
-- Records of QRTZ_LOCKS
-- ----------------------------
BEGIN TRANSACTION
GO

INSERT INTO [dbo].[QRTZ_LOCKS] VALUES (N'phsScheduler', N'STATE_ACCESS')
GO

INSERT INTO [dbo].[QRTZ_LOCKS] VALUES (N'phsScheduler', N'TRIGGER_ACCESS')
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_PAUSED_TRIGGER_GRPS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_PAUSED_TRIGGER_GRPS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_PAUSED_TRIGGER_GRPS]
GO

CREATE TABLE [dbo].[QRTZ_PAUSED_TRIGGER_GRPS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[QRTZ_PAUSED_TRIGGER_GRPS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_PAUSED_TRIGGER_GRPS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_group的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_PAUSED_TRIGGER_GRPS',
'COLUMN', N'TRIGGER_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'暂停的触发器表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_PAUSED_TRIGGER_GRPS'
GO


-- ----------------------------
-- Records of QRTZ_PAUSED_TRIGGER_GRPS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_SCHEDULER_STATE
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_SCHEDULER_STATE]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_SCHEDULER_STATE]
GO

CREATE TABLE [dbo].[QRTZ_SCHEDULER_STATE] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [INSTANCE_NAME] nvarchar(200) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [LAST_CHECKIN_TIME] bigint  NOT NULL,
  [CHECKIN_INTERVAL] bigint  NOT NULL
)
GO

ALTER TABLE [dbo].[QRTZ_SCHEDULER_STATE] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SCHEDULER_STATE',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'实例名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SCHEDULER_STATE',
'COLUMN', N'INSTANCE_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'上次检查时间',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SCHEDULER_STATE',
'COLUMN', N'LAST_CHECKIN_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'检查间隔时间',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SCHEDULER_STATE',
'COLUMN', N'CHECKIN_INTERVAL'
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度器状态表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SCHEDULER_STATE'
GO


-- ----------------------------
-- Records of QRTZ_SCHEDULER_STATE
-- ----------------------------
BEGIN TRANSACTION
GO

INSERT INTO [dbo].[QRTZ_SCHEDULER_STATE] VALUES (N'phsScheduler', N'caoyangdeMacBook-Pro.local1704694551009', N'1704697679266', N'15000')
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_SIMPLE_TRIGGERS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_SIMPLE_TRIGGERS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_SIMPLE_TRIGGERS]
GO

CREATE TABLE [dbo].[QRTZ_SIMPLE_TRIGGERS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [REPEAT_COUNT] int  NOT NULL,
  [REPEAT_INTERVAL] bigint  NOT NULL,
  [TIMES_TRIGGERED] int  NOT NULL
)
GO

ALTER TABLE [dbo].[QRTZ_SIMPLE_TRIGGERS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPLE_TRIGGERS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_name的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPLE_TRIGGERS',
'COLUMN', N'TRIGGER_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_group的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPLE_TRIGGERS',
'COLUMN', N'TRIGGER_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'重复的次数统计',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPLE_TRIGGERS',
'COLUMN', N'REPEAT_COUNT'
GO

EXEC sp_addextendedproperty
'MS_Description', N'重复的间隔时间',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPLE_TRIGGERS',
'COLUMN', N'REPEAT_INTERVAL'
GO

EXEC sp_addextendedproperty
'MS_Description', N'已经触发的次数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPLE_TRIGGERS',
'COLUMN', N'TIMES_TRIGGERED'
GO

EXEC sp_addextendedproperty
'MS_Description', N'简单触发器的信息表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPLE_TRIGGERS'
GO


-- ----------------------------
-- Records of QRTZ_SIMPLE_TRIGGERS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_SIMPROP_TRIGGERS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_SIMPROP_TRIGGERS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_SIMPROP_TRIGGERS]
GO

CREATE TABLE [dbo].[QRTZ_SIMPROP_TRIGGERS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [STR_PROP_1] nvarchar(512) COLLATE Chinese_PRC_CI_AS  NULL,
  [STR_PROP_2] nvarchar(512) COLLATE Chinese_PRC_CI_AS  NULL,
  [STR_PROP_3] nvarchar(512) COLLATE Chinese_PRC_CI_AS  NULL,
  [INT_PROP_1] int  NULL,
  [INT_PROP_2] int  NULL,
  [LONG_PROP_1] bigint  NULL,
  [LONG_PROP_2] bigint  NULL,
  [DEC_PROP_1] numeric(13,4)  NULL,
  [DEC_PROP_2] numeric(13,4)  NULL,
  [BOOL_PROP_1] bit  NULL,
  [BOOL_PROP_2] bit  NULL,
  [TIME_ZONE_ID] nvarchar(80) COLLATE Chinese_PRC_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[QRTZ_SIMPROP_TRIGGERS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_name的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'TRIGGER_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_triggers表trigger_group的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'TRIGGER_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'String类型的trigger的第一个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'STR_PROP_1'
GO

EXEC sp_addextendedproperty
'MS_Description', N'String类型的trigger的第二个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'STR_PROP_2'
GO

EXEC sp_addextendedproperty
'MS_Description', N'String类型的trigger的第三个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'STR_PROP_3'
GO

EXEC sp_addextendedproperty
'MS_Description', N'int类型的trigger的第一个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'INT_PROP_1'
GO

EXEC sp_addextendedproperty
'MS_Description', N'int类型的trigger的第二个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'INT_PROP_2'
GO

EXEC sp_addextendedproperty
'MS_Description', N'long类型的trigger的第一个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'LONG_PROP_1'
GO

EXEC sp_addextendedproperty
'MS_Description', N'long类型的trigger的第二个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'LONG_PROP_2'
GO

EXEC sp_addextendedproperty
'MS_Description', N'decimal类型的trigger的第一个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'DEC_PROP_1'
GO

EXEC sp_addextendedproperty
'MS_Description', N'decimal类型的trigger的第二个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'DEC_PROP_2'
GO

EXEC sp_addextendedproperty
'MS_Description', N'Boolean类型的trigger的第一个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'BOOL_PROP_1'
GO

EXEC sp_addextendedproperty
'MS_Description', N'Boolean类型的trigger的第二个参数',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'BOOL_PROP_2'
GO

EXEC sp_addextendedproperty
'MS_Description', N'时区ID',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS',
'COLUMN', N'TIME_ZONE_ID'
GO

EXEC sp_addextendedproperty
'MS_Description', N'同步机制的行锁表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_SIMPROP_TRIGGERS'
GO


-- ----------------------------
-- Records of QRTZ_SIMPROP_TRIGGERS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for QRTZ_TRIGGERS
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[QRTZ_TRIGGERS]') AND type IN ('U'))
	DROP TABLE [dbo].[QRTZ_TRIGGERS]
GO

CREATE TABLE [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] nvarchar(120) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [JOB_NAME] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [JOB_GROUP] nvarchar(150) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [DESCRIPTION] nvarchar(250) COLLATE Chinese_PRC_CI_AS  NULL,
  [NEXT_FIRE_TIME] bigint  NULL,
  [PREV_FIRE_TIME] bigint  NULL,
  [PRIORITY] int  NULL,
  [TRIGGER_STATE] nvarchar(16) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [TRIGGER_TYPE] nvarchar(8) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [START_TIME] bigint  NOT NULL,
  [END_TIME] bigint  NULL,
  [CALENDAR_NAME] nvarchar(200) COLLATE Chinese_PRC_CI_AS  NULL,
  [MISFIRE_INSTR] int  NULL,
  [JOB_DATA] varbinary(max)  NULL
)
GO

ALTER TABLE [dbo].[QRTZ_TRIGGERS] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'调度名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'SCHED_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'触发器的名字',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'TRIGGER_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'触发器所属组的名字',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'TRIGGER_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_job_details表job_name的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'JOB_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'qrtz_job_details表job_group的外键',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'JOB_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'相关介绍',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'DESCRIPTION'
GO

EXEC sp_addextendedproperty
'MS_Description', N'上一次触发时间（毫秒）',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'NEXT_FIRE_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'下一次触发时间（默认为-1表示不触发）',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'PREV_FIRE_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'优先级',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'PRIORITY'
GO

EXEC sp_addextendedproperty
'MS_Description', N'触发器状态',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'TRIGGER_STATE'
GO

EXEC sp_addextendedproperty
'MS_Description', N'触发器的类型',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'TRIGGER_TYPE'
GO

EXEC sp_addextendedproperty
'MS_Description', N'开始时间',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'START_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'结束时间',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'END_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'日程表名称',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'CALENDAR_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'补偿执行的策略',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'MISFIRE_INSTR'
GO

EXEC sp_addextendedproperty
'MS_Description', N'存放持久化job对象',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS',
'COLUMN', N'JOB_DATA'
GO

EXEC sp_addextendedproperty
'MS_Description', N'触发器详细信息表',
'SCHEMA', N'dbo',
'TABLE', N'QRTZ_TRIGGERS'
GO


-- ----------------------------
-- Records of QRTZ_TRIGGERS
-- ----------------------------
BEGIN TRANSACTION
GO

COMMIT
GO


-- ----------------------------
-- Table structure for SYS_JOB
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[SYS_JOB]') AND type IN ('U'))
	DROP TABLE [dbo].[SYS_JOB]
GO

CREATE TABLE [dbo].[SYS_JOB] (
  [JOB_ID] bigint  IDENTITY(1,1) NOT NULL,
  [JOB_NAME] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT '' NOT NULL,
  [JOB_GROUP] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT ('DEFAULT') NOT NULL,
  [INVOKE_TARGET] varchar(500) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [CRON_EXPRESSION] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT '' NULL,
  [MISFIRE_POLICY] varchar(20) COLLATE Chinese_PRC_CI_AS DEFAULT ('3') NULL,
  [CONCURRENT] char(1) COLLATE Chinese_PRC_CI_AS DEFAULT ('1') NULL,
  [STATUS] char(1) COLLATE Chinese_PRC_CI_AS DEFAULT ('0') NULL,
  [CREATE_BY] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT '' NULL,
  [CREATE_TIME] datetime DEFAULT NULL NULL,
  [UPDATE_BY] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT '' NULL,
  [UPDATE_TIME] datetime DEFAULT NULL NULL,
  [REMARK] varchar(500) COLLATE Chinese_PRC_CI_AS DEFAULT '' NULL
)
GO

ALTER TABLE [dbo].[SYS_JOB] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务名称',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'JOB_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务组名',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'JOB_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'调用目标字符串',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'INVOKE_TARGET'
GO

EXEC sp_addextendedproperty
'MS_Description', N'cron执行表达式',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'CRON_EXPRESSION'
GO

EXEC sp_addextendedproperty
'MS_Description', N'计划执行错误策略（1立即执行 2执行一次 3放弃执行）',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'MISFIRE_POLICY'
GO

EXEC sp_addextendedproperty
'MS_Description', N'是否并发执行（0允许 1禁止）',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'CONCURRENT'
GO

EXEC sp_addextendedproperty
'MS_Description', N'状态（0正常 1暂停）',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'STATUS'
GO

EXEC sp_addextendedproperty
'MS_Description', N'创建者',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'CREATE_BY'
GO

EXEC sp_addextendedproperty
'MS_Description', N'创建时间',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'CREATE_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'更新者',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'UPDATE_BY'
GO

EXEC sp_addextendedproperty
'MS_Description', N'更新时间',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'UPDATE_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'备注信息',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB',
'COLUMN', N'REMARK'
GO

EXEC sp_addextendedproperty
'MS_Description', N'定时任务调度表',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB'
GO


-- ----------------------------
-- Records of SYS_JOB
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[SYS_JOB] ON
GO

SET IDENTITY_INSERT [dbo].[SYS_JOB] OFF
GO

COMMIT
GO


-- ----------------------------
-- Table structure for SYS_JOB_LOG
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[SYS_JOB_LOG]') AND type IN ('U'))
	DROP TABLE [dbo].[SYS_JOB_LOG]
GO

CREATE TABLE [dbo].[SYS_JOB_LOG] (
  [JOB_LOG_ID] bigint  IDENTITY(1,1) NOT NULL,
  [JOB_NAME] varchar(64) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [JOB_GROUP] varchar(64) COLLATE Chinese_PRC_CI_AS  NULL,
  [INVOKE_TARGET] varchar(500) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [JOB_MESSAGE] varchar(500) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [STATUS] char(1) COLLATE Chinese_PRC_CI_AS DEFAULT ('0') NULL,
  [EXCEPTION_INFO] varchar(2000) COLLATE Chinese_PRC_CI_AS DEFAULT '' NULL,
  [CREATE_TIME] datetime DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[SYS_JOB_LOG] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务日志ID',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG',
'COLUMN', N'JOB_LOG_ID'
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务名称',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG',
'COLUMN', N'JOB_NAME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'任务组名',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG',
'COLUMN', N'JOB_GROUP'
GO

EXEC sp_addextendedproperty
'MS_Description', N'调用目标字符串',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG',
'COLUMN', N'INVOKE_TARGET'
GO

EXEC sp_addextendedproperty
'MS_Description', N'日志信息',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG',
'COLUMN', N'JOB_MESSAGE'
GO

EXEC sp_addextendedproperty
'MS_Description', N'执行状态（0正常 1失败）',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG',
'COLUMN', N'STATUS'
GO

EXEC sp_addextendedproperty
'MS_Description', N'异常信息',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG',
'COLUMN', N'EXCEPTION_INFO'
GO

EXEC sp_addextendedproperty
'MS_Description', N'创建时间',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG',
'COLUMN', N'CREATE_TIME'
GO

EXEC sp_addextendedproperty
'MS_Description', N'定时任务调度日志表',
'SCHEMA', N'dbo',
'TABLE', N'SYS_JOB_LOG'
GO


-- ----------------------------
-- Records of SYS_JOB_LOG
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[SYS_JOB_LOG] ON
GO

SET IDENTITY_INSERT [dbo].[SYS_JOB_LOG] OFF
GO

COMMIT
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_BLOB_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_BLOB_TRIGGERS] ADD CONSTRAINT [PK_QRTZ_BLOB_TRIGGERS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_CALENDARS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_CALENDARS] ADD CONSTRAINT [PK_QRTZ_CALENDARS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [CALENDAR_NAME])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_CRON_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_CRON_TRIGGERS] ADD CONSTRAINT [PK_QRTZ_CRON_TRIGGERS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Indexes structure for table QRTZ_FIRED_TRIGGERS
-- ----------------------------
CREATE NONCLUSTERED INDEX [IDX_QRTZ_FT_INST_JOB_REQ_RCVRY]
ON [dbo].[QRTZ_FIRED_TRIGGERS] (
  [SCHED_NAME] ASC,
  [INSTANCE_NAME] ASC,
  [REQUESTS_RECOVERY] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_FT_G_J]
ON [dbo].[QRTZ_FIRED_TRIGGERS] (
  [SCHED_NAME] ASC,
  [JOB_GROUP] ASC,
  [JOB_NAME] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_FT_G_T]
ON [dbo].[QRTZ_FIRED_TRIGGERS] (
  [SCHED_NAME] ASC,
  [TRIGGER_GROUP] ASC,
  [TRIGGER_NAME] ASC
)
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_FIRED_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_FIRED_TRIGGERS] ADD CONSTRAINT [PK_QRTZ_FIRED_TRIGGERS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [ENTRY_ID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_JOB_DETAILS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_JOB_DETAILS] ADD CONSTRAINT [PK_QRTZ_JOB_DETAILS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [JOB_NAME], [JOB_GROUP])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_LOCKS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_LOCKS] ADD CONSTRAINT [PK_QRTZ_LOCKS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [LOCK_NAME])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_PAUSED_TRIGGER_GRPS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_PAUSED_TRIGGER_GRPS] ADD CONSTRAINT [PK_QRTZ_PAUSED_TRIGGER_GRPS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [TRIGGER_GROUP])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_SCHEDULER_STATE
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_SCHEDULER_STATE] ADD CONSTRAINT [PK_QRTZ_SCHEDULER_STATE] PRIMARY KEY CLUSTERED ([SCHED_NAME], [INSTANCE_NAME])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_SIMPLE_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_SIMPLE_TRIGGERS] ADD CONSTRAINT [PK_QRTZ_SIMPLE_TRIGGERS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_SIMPROP_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_SIMPROP_TRIGGERS] ADD CONSTRAINT [PK_QRTZ_SIMPROP_TRIGGERS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Indexes structure for table QRTZ_TRIGGERS
-- ----------------------------
CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_G_J]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [JOB_GROUP] ASC,
  [JOB_NAME] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_C]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [CALENDAR_NAME] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_N_G_STATE]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [TRIGGER_GROUP] ASC,
  [TRIGGER_STATE] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_STATE]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [TRIGGER_STATE] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_N_STATE]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [TRIGGER_NAME] ASC,
  [TRIGGER_GROUP] ASC,
  [TRIGGER_STATE] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_NEXT_FIRE_TIME]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [NEXT_FIRE_TIME] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_NFT_ST]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [TRIGGER_STATE] ASC,
  [NEXT_FIRE_TIME] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_NFT_ST_MISFIRE]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [MISFIRE_INSTR] ASC,
  [NEXT_FIRE_TIME] ASC,
  [TRIGGER_STATE] ASC
)
GO

CREATE NONCLUSTERED INDEX [IDX_QRTZ_T_NFT_ST_MISFIRE_GRP]
ON [dbo].[QRTZ_TRIGGERS] (
  [SCHED_NAME] ASC,
  [MISFIRE_INSTR] ASC,
  [NEXT_FIRE_TIME] ASC,
  [TRIGGER_GROUP] ASC,
  [TRIGGER_STATE] ASC
)
GO


-- ----------------------------
-- Primary Key structure for table QRTZ_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_TRIGGERS] ADD CONSTRAINT [PK_QRTZ_TRIGGERS] PRIMARY KEY CLUSTERED ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for SYS_JOB
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[SYS_JOB]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table SYS_JOB
-- ----------------------------
ALTER TABLE [dbo].[SYS_JOB] ADD CONSTRAINT [PK__SYS_JOB__AE15A0E6F8FE056A] PRIMARY KEY CLUSTERED ([JOB_ID], [JOB_NAME], [JOB_GROUP])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for SYS_JOB_LOG
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[SYS_JOB_LOG]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table SYS_JOB_LOG
-- ----------------------------
ALTER TABLE [dbo].[SYS_JOB_LOG] ADD CONSTRAINT [PK__SYS_JOB___C43235C0B98841B0] PRIMARY KEY CLUSTERED ([JOB_LOG_ID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Foreign Keys structure for table QRTZ_CRON_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_CRON_TRIGGERS] ADD CONSTRAINT [FK_QRTZ_CRON_TRIGGERS_QRTZ_TRIGGERS] FOREIGN KEY ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP]) REFERENCES [dbo].[QRTZ_TRIGGERS] ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP]) ON DELETE CASCADE ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table QRTZ_SIMPLE_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_SIMPLE_TRIGGERS] ADD CONSTRAINT [FK_QRTZ_SIMPLE_TRIGGERS_QRTZ_TRIGGERS] FOREIGN KEY ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP]) REFERENCES [dbo].[QRTZ_TRIGGERS] ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP]) ON DELETE CASCADE ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table QRTZ_SIMPROP_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_SIMPROP_TRIGGERS] ADD CONSTRAINT [FK_QRTZ_SIMPROP_TRIGGERS_QRTZ_TRIGGERS] FOREIGN KEY ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP]) REFERENCES [dbo].[QRTZ_TRIGGERS] ([SCHED_NAME], [TRIGGER_NAME], [TRIGGER_GROUP]) ON DELETE CASCADE ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table QRTZ_TRIGGERS
-- ----------------------------
ALTER TABLE [dbo].[QRTZ_TRIGGERS] ADD CONSTRAINT [FK_QRTZ_TRIGGERS_QRTZ_JOB_DETAILS] FOREIGN KEY ([SCHED_NAME], [JOB_NAME], [JOB_GROUP]) REFERENCES [dbo].[QRTZ_JOB_DETAILS] ([SCHED_NAME], [JOB_NAME], [JOB_GROUP]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


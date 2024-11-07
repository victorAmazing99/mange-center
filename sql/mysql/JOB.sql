/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.0.237
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : 192.168.0.237:3306
 Source Schema         : manageJob

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 12/01/2024 13:24:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for QRTZ_BLOB_TRIGGERS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_BLOB_TRIGGERS`;
CREATE TABLE `QRTZ_BLOB_TRIGGERS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `TRIGGER_NAME` varchar(150) DEFAULT NULL,
  `TRIGGER_GROUP` varchar(150) DEFAULT NULL,
  `BLOB_DATA` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_BLOB_TRIGGERS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_CALENDARS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_CALENDARS`;
CREATE TABLE `QRTZ_CALENDARS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `CALENDAR_NAME` varchar(200) DEFAULT NULL,
  `CALENDAR` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_CALENDARS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_CRON_TRIGGERS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_CRON_TRIGGERS`;
CREATE TABLE `QRTZ_CRON_TRIGGERS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `TRIGGER_NAME` varchar(150) DEFAULT NULL,
  `TRIGGER_GROUP` varchar(150) DEFAULT NULL,
  `CRON_EXPRESSION` varchar(120) DEFAULT NULL,
  `TIME_ZONE_ID` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_CRON_TRIGGERS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_FIRED_TRIGGERS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_FIRED_TRIGGERS`;
CREATE TABLE `QRTZ_FIRED_TRIGGERS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `ENTRY_ID` varchar(140) DEFAULT NULL,
  `TRIGGER_NAME` varchar(150) DEFAULT NULL,
  `TRIGGER_GROUP` varchar(150) DEFAULT NULL,
  `INSTANCE_NAME` varchar(200) DEFAULT NULL,
  `FIRED_TIME` bigint DEFAULT NULL,
  `SCHED_TIME` bigint DEFAULT NULL,
  `PRIORITY` int DEFAULT NULL,
  `STATE` varchar(16) DEFAULT NULL,
  `JOB_NAME` varchar(150) DEFAULT NULL,
  `JOB_GROUP` varchar(150) DEFAULT NULL,
  `IS_NONCONCURRENT` tinyint(1) DEFAULT NULL,
  `REQUESTS_RECOVERY` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_FIRED_TRIGGERS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_JOB_DETAILS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_JOB_DETAILS`;
CREATE TABLE `QRTZ_JOB_DETAILS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `JOB_NAME` varchar(150) DEFAULT NULL,
  `JOB_GROUP` varchar(150) DEFAULT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  `JOB_CLASS_NAME` varchar(250) DEFAULT NULL,
  `IS_DURABLE` tinyint(1) DEFAULT NULL,
  `IS_NONCONCURRENT` tinyint(1) DEFAULT NULL,
  `IS_UPDATE_DATA` tinyint(1) DEFAULT NULL,
  `REQUESTS_RECOVERY` tinyint(1) DEFAULT NULL,
  `JOB_DATA` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_JOB_DETAILS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_LOCKS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_LOCKS`;
CREATE TABLE `QRTZ_LOCKS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `LOCK_NAME` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_LOCKS
-- ----------------------------
BEGIN;
INSERT INTO `QRTZ_LOCKS` VALUES ('phsScheduler', 'STATE_ACCESS');
INSERT INTO `QRTZ_LOCKS` VALUES ('phsScheduler', 'TRIGGER_ACCESS');
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_PAUSED_TRIGGER_GRPS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_PAUSED_TRIGGER_GRPS`;
CREATE TABLE `QRTZ_PAUSED_TRIGGER_GRPS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `TRIGGER_GROUP` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_PAUSED_TRIGGER_GRPS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_SCHEDULER_STATE
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_SCHEDULER_STATE`;
CREATE TABLE `QRTZ_SCHEDULER_STATE` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `INSTANCE_NAME` varchar(200) DEFAULT NULL,
  `LAST_CHECKIN_TIME` bigint DEFAULT NULL,
  `CHECKIN_INTERVAL` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_SCHEDULER_STATE
-- ----------------------------
BEGIN;
INSERT INTO `QRTZ_SCHEDULER_STATE` VALUES ('phsScheduler', 'caoyangdeMacBook-Pro.local1704762637577', 1704764791508, 15000);
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_SIMPLE_TRIGGERS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_SIMPLE_TRIGGERS`;
CREATE TABLE `QRTZ_SIMPLE_TRIGGERS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `TRIGGER_NAME` varchar(150) DEFAULT NULL,
  `TRIGGER_GROUP` varchar(150) DEFAULT NULL,
  `REPEAT_COUNT` int DEFAULT NULL,
  `REPEAT_INTERVAL` bigint DEFAULT NULL,
  `TIMES_TRIGGERED` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_SIMPLE_TRIGGERS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_SIMPROP_TRIGGERS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_SIMPROP_TRIGGERS`;
CREATE TABLE `QRTZ_SIMPROP_TRIGGERS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `TRIGGER_NAME` varchar(150) DEFAULT NULL,
  `TRIGGER_GROUP` varchar(150) DEFAULT NULL,
  `STR_PROP_1` varchar(512) DEFAULT NULL,
  `STR_PROP_2` varchar(512) DEFAULT NULL,
  `STR_PROP_3` varchar(512) DEFAULT NULL,
  `INT_PROP_1` int DEFAULT NULL,
  `INT_PROP_2` int DEFAULT NULL,
  `LONG_PROP_1` bigint DEFAULT NULL,
  `LONG_PROP_2` bigint DEFAULT NULL,
  `DEC_PROP_1` double DEFAULT NULL,
  `DEC_PROP_2` double DEFAULT NULL,
  `BOOL_PROP_1` tinyint(1) DEFAULT NULL,
  `BOOL_PROP_2` tinyint(1) DEFAULT NULL,
  `TIME_ZONE_ID` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_SIMPROP_TRIGGERS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for QRTZ_TRIGGERS
-- ----------------------------
DROP TABLE IF EXISTS `QRTZ_TRIGGERS`;
CREATE TABLE `QRTZ_TRIGGERS` (
  `SCHED_NAME` varchar(120) DEFAULT NULL,
  `TRIGGER_NAME` varchar(150) DEFAULT NULL,
  `TRIGGER_GROUP` varchar(150) DEFAULT NULL,
  `JOB_NAME` varchar(150) DEFAULT NULL,
  `JOB_GROUP` varchar(150) DEFAULT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  `NEXT_FIRE_TIME` bigint DEFAULT NULL,
  `PREV_FIRE_TIME` bigint DEFAULT NULL,
  `PRIORITY` int DEFAULT NULL,
  `TRIGGER_STATE` varchar(16) DEFAULT NULL,
  `TRIGGER_TYPE` varchar(8) DEFAULT NULL,
  `START_TIME` bigint DEFAULT NULL,
  `END_TIME` bigint DEFAULT NULL,
  `CALENDAR_NAME` varchar(200) DEFAULT NULL,
  `MISFIRE_INSTR` int DEFAULT NULL,
  `JOB_DATA` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of QRTZ_TRIGGERS
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for SYS_JOB
-- ----------------------------
DROP TABLE IF EXISTS `SYS_JOB`;
CREATE TABLE `SYS_JOB` (
  `JOB_ID` bigint DEFAULT NULL,
  `JOB_NAME` varchar(64) DEFAULT NULL,
  `JOB_GROUP` varchar(64) DEFAULT NULL,
  `INVOKE_TARGET` varchar(500) DEFAULT NULL,
  `CRON_EXPRESSION` varchar(255) DEFAULT NULL,
  `MISFIRE_POLICY` varchar(20) DEFAULT NULL,
  `CONCURRENT` char(1) DEFAULT NULL,
  `STATUS` char(1) DEFAULT NULL,
  `CREATE_BY` varchar(64) DEFAULT NULL,
  `CREATE_TIME` timestamp NULL DEFAULT NULL,
  `UPDATE_BY` varchar(64) DEFAULT NULL,
  `UPDATE_TIME` timestamp NULL DEFAULT NULL,
  `REMARK` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of SYS_JOB
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for SYS_JOB_LOG
-- ----------------------------
DROP TABLE IF EXISTS `SYS_JOB_LOG`;
CREATE TABLE `SYS_JOB_LOG` (
  `JOB_LOG_ID` bigint DEFAULT NULL,
  `JOB_NAME` varchar(64) DEFAULT NULL,
  `JOB_GROUP` varchar(64) DEFAULT NULL,
  `INVOKE_TARGET` varchar(500) DEFAULT NULL,
  `JOB_MESSAGE` varchar(500) DEFAULT NULL,
  `STATUS` char(1) DEFAULT NULL,
  `EXCEPTION_INFO` varchar(2000) DEFAULT NULL,
  `CREATE_TIME` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of SYS_JOB_LOG
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

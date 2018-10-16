-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-10-22 07:36:34
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hx160417`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin_info`
--

CREATE TABLE `admin_info` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(255) DEFAULT NULL,
  `admin_password` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin_info`
--

INSERT INTO `admin_info` (`admin_id`, `admin_name`, `admin_password`, `role_id`) VALUES
(1, 'admin', '123456', 1),
(2, 'admin1', '123456', 2),
(3, 'admin2', '123456', 3),
(4, 'admin3', '123456', 3),
(5, 'admin4', '123456', 2),
(6, 'admin5', '123456', 2),
(7, 'admin6', '123456', 1),
(8, 'admin7', '123456', 1);

-- --------------------------------------------------------

--
-- 表的结构 `admin_role`
--

CREATE TABLE `admin_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin_role`
--

INSERT INTO `admin_role` (`role_id`, `role_name`) VALUES
(1, '运营管理'),
(2, '管理员'),
(3, '游戏运维');

-- --------------------------------------------------------

--
-- 表的结构 `carport`
--

CREATE TABLE `carport` (
  `carport_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `goods_id` int(11) DEFAULT NULL,
  `buy_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `carport`
--

INSERT INTO `carport` (`carport_id`, `user_id`, `goods_id`, `buy_time`) VALUES
(1, 1, 1, '2016-08-30 19:19:56'),
(2, 1, 9, '2016-08-30 19:19:56'),
(3, 1, 13, '2016-08-30 19:19:56'),
(4, 1, 2, '2016-09-04 13:12:15'),
(5, 1, 8, '2016-09-04 13:12:40'),
(6, 2, 1, '2016-09-04 13:13:45'),
(7, 2, 9, '2016-09-04 13:13:45'),
(8, 2, 13, '2016-09-04 13:13:45'),
(9, 2, 2, '2016-09-04 13:36:41'),
(10, 2, 3, '2016-09-04 13:36:47'),
(11, 3, 1, '2016-09-18 09:58:29'),
(12, 3, 9, '2016-09-18 09:58:29'),
(13, 3, 13, '2016-09-18 09:58:29'),
(14, 3, 3, '2016-09-18 10:04:31'),
(15, 3, 14, '2016-09-18 10:31:57'),
(16, 4, 1, '2016-09-18 10:38:30'),
(17, 4, 9, '2016-09-18 10:38:30'),
(18, 4, 13, '2016-09-18 10:38:30'),
(19, 3, 6, '2016-09-18 10:43:57'),
(20, 3, 16, '2016-09-18 10:44:57');

-- --------------------------------------------------------

--
-- 表的结构 `charge_record`
--

CREATE TABLE `charge_record` (
  `charge_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `charge_money` int(11) DEFAULT NULL,
  `charge_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `charge_record`
--

INSERT INTO `charge_record` (`charge_id`, `user_id`, `charge_money`, `charge_time`) VALUES
(35, 1, 1000, '2016-08-30 19:53:50'),
(36, 1, 1000, '2016-08-30 19:54:27'),
(37, 1, 1000, '2016-08-30 20:05:46'),
(38, 1, 2000, '2016-08-30 20:06:10'),
(39, 1, 1000, '2016-08-30 20:07:34'),
(40, 1, 1000, '2016-08-30 20:09:36'),
(41, 1, 1000, '2016-08-30 20:11:11'),
(42, 1, 1000, '2016-08-30 20:14:20'),
(43, 1, 1000, '2016-08-30 20:14:38'),
(44, 1, 1000, '2016-08-30 20:15:40'),
(45, 1, 1000, '2016-08-31 00:49:49'),
(46, 2, 5000, '2016-09-04 13:36:23'),
(47, 2, 2147483647, '2016-09-18 09:50:52'),
(48, 3, 100, '2016-09-18 10:03:13'),
(49, 3, 200, '2016-09-18 10:03:43'),
(50, 3, 100, '2016-09-18 10:03:57'),
(51, 3, 3000, '2016-09-18 10:04:29'),
(52, 3, 0, '2016-09-18 10:43:26'),
(53, 3, 20000, '2016-09-18 10:43:41'),
(54, 3, 1000, '2016-09-18 10:43:50'),
(55, 2, 0, '2016-09-18 11:44:10'),
(56, 2, 0, '2016-09-18 11:45:37'),
(57, 2, 0, '2016-09-18 11:47:41'),
(58, 2, 1000, '2016-09-18 11:47:47');

-- --------------------------------------------------------

--
-- 表的结构 `event`
--

CREATE TABLE `event` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(255) DEFAULT NULL,
  `event_src` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `event`
--

INSERT INTO `event` (`event_id`, `event_name`, `event_src`) VALUES
(1, '秋明山', 'application/view/public/images/CheckPoint/checkpoint12.png'),
(2, '富士山', 'application/view/public/images/CheckPoint/checkpoint2.png'),
(3, '武夷山', 'application/view/public/images/CheckPoint/checkpoint3.png'),
(4, 'nighao', 'application/view/public/images/CheckPoint/checkpoint8.png'),
(5, 'WASAI', 'application/view/public/images/CheckPoint/checkpoint1.png'),
(6, 'wasai1', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `experience`
--

CREATE TABLE `experience` (
  `experience_id` int(11) NOT NULL,
  `event_id` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `ranking` int(11) DEFAULT NULL,
  `get_experience` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `experience`
--

INSERT INTO `experience` (`experience_id`, `event_id`, `ranking`, `get_experience`) VALUES
(1, '1', 1, 300),
(2, '1', 2, 200),
(3, '1', 3, 100),
(4, '2', 1, NULL),
(5, '2', 2, NULL),
(6, '2', 3, NULL),
(7, '3', 1, NULL),
(8, '3', 2, NULL),
(9, '3', 3, NULL),
(10, '1', 1, NULL),
(11, '1', 2, NULL),
(12, '1', 3, NULL),
(13, '2', 1, NULL),
(14, '2', 2, NULL),
(15, '2', 3, NULL),
(16, '3', 1, NULL),
(17, '3', 2, NULL),
(18, '3', 3, NULL),
(19, '1', 1, NULL),
(20, '1', 2, NULL),
(21, '1', 3, NULL),
(22, '2', 1, NULL),
(23, '2', 2, NULL),
(24, '2', 3, NULL),
(25, '3', 1, NULL),
(26, '3', 2, NULL),
(27, '3', 3, NULL),
(28, '4', 1, NULL),
(29, '4', 2, NULL),
(30, '4', 3, NULL),
(31, '5', 1, 1000),
(32, '5', 2, 2000),
(33, '5', 3, 3000),
(34, '6', 1, NULL),
(35, '6', 2, NULL),
(36, '6', 3, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `experience_level`
--

CREATE TABLE `experience_level` (
  `experience_level_id` int(11) NOT NULL,
  `experience_level` int(11) DEFAULT NULL,
  `experience_count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `goods_id` int(11) NOT NULL,
  `goods_type_id` int(11) DEFAULT NULL,
  `goods_name` varchar(255) DEFAULT NULL,
  `goods_attr` varchar(255) DEFAULT NULL,
  `shop_src` varchar(255) DEFAULT NULL,
  `game_src` varchar(255) DEFAULT NULL,
  `state_src` varchar(255) DEFAULT NULL,
  `goods_price` int(11) DEFAULT NULL,
  `need_vip_level` int(11) DEFAULT NULL,
  `goods_level` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`goods_id`, `goods_type_id`, `goods_name`, `goods_attr`, `shop_src`, `game_src`, `state_src`, `goods_price`, `need_vip_level`, `goods_level`) VALUES
(1, 1, 'bicker1', 'C-', './Public/Uploads/video/2016-10-21/5808fbfeab920.mp4', 'application/view/public/images/shop/c1.png', 'application/view/public/images/end/cha1.png', 1000, 1, 1),
(2, 1, 'bicker2', 'C', 'application/view/public/images/shop/c2s.png', 'application/view/public/images/shop/c2.png', 'application/view/public/images/end/cha2.png', 2800, 2, 4),
(3, 1, 'bicker3', 'C+', 'application/view/public/images/shop/c3s.png', 'application/view/public/images/shop/c3.png', 'application/view/public/images/end/cha3.png', 3200, 3, 6),
(4, 1, 'bicker4', 'B-', 'application/view/public/images/shop/c4s.png', 'application/view/public/images/shop/c4.png', 'application/view/public/images/end/cha4.png', 3600, 4, 8),
(5, 1, 'bicker5', 'B', 'application/view/public/images/shop/c5s.png', 'application/view/public/images/shop/c5.png', 'application/view/public/images/end/cha5.png', 4000, 5, 10),
(6, 1, 'bicker6', 'B+', 'application/view/public/images/shop/c6s.png', 'application/view/public/images/shop/c6.png', 'application/view/public/images/end/cha6.png', 4400, 6, 12),
(7, 1, 'bicker7', 'A-', 'application/view/public/images/shop/c7s.png', 'application/view/public/images/shop/c7.png', 'application/view/public/images/end/cha7.png', 4800, 7, 14),
(8, 1, 'bicker8', 'A', 'application/view/public/images/shop/c8s.png', 'application/view/public/images/shop/c8.png', 'application/view/public/images/end/cha8.png', 123456, 5, 15),
(9, 2, 'motor1', '150km/h', 'application/view/public/images/shop/m4s.png', 'application/view/public/images/shop/m4.png', '', 45678, 1, 1),
(10, 2, 'motor2', '160km/h', 'application/view/public/images/shop/m2s.png', 'application/view/public/images/shop/m2.png', NULL, 4500, 2, 5),
(11, 2, 'motor3', '170km/h', 'application/view/public/images/shop/m3s.png', 'application/view/public/images/shop/m3.png', NULL, 5000, 4, 10),
(12, 2, 'motor4', '180km/h', 'application/view/public/images/shop/m4s.png', 'application/view/public/images/shop/m4.png', NULL, 5500, 6, 15),
(13, 3, 'wheel1', '15s', 'application/view/public/images/shop/w1s.png', 'application/view/public/images/shop/w1.png', NULL, 600, 1, 1),
(14, 3, 'wheel2', '14s', 'application/view/public/images/shop/w2s.png', 'application/view/public/images/shop/w2.png', NULL, 800, 2, 5),
(15, 3, 'wheel3', '13s', 'application/view/public/images/shop/w3s.png', 'application/view/public/images/shop/w3.png', NULL, 1200, 4, 10),
(16, 3, 'wheel4', '12s', 'application/view/public/images/shop/w4s.png', 'application/view/public/images/shop/w4.png', NULL, 1800, 6, 15),
(17, 1, 'bicker9', '999', 'application/view/public/images/shop/c7s.png', 'application/view/public/images/shop/c1.png', 'application/view/public/images/shop/c2.png', 12345678, 5, NULL),
(18, 2, 'motor5', '1212', 'application/view/public/images/shop/m4s.png', 'application/view/public/images/shop/m4.png', '', 1222222221, 5, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `goods_type`
--

CREATE TABLE `goods_type` (
  `goods_type_id` int(11) NOT NULL,
  `type_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods_type`
--

INSERT INTO `goods_type` (`goods_type_id`, `type_name`) VALUES
(1, '人物'),
(2, '车身'),
(3, '轮胎');

-- --------------------------------------------------------

--
-- 表的结构 `menu`
--

CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL,
  `menu_name` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `menu`
--

INSERT INTO `menu` (`menu_id`, `menu_name`, `parent_id`) VALUES
(1, '游戏设定', 0),
(2, '运营统计', 0),
(3, '用户管理', 0),
(4, '玩家管理', 0),
(5, '公告管理', 1),
(6, 'VIP规则设定', 1),
(7, '赛事管理', 1),
(8, '商品管理', 1),
(9, '显示玩家信息', 4),
(10, '添加玩家', 4),
(11, '显示用户信息', 3),
(12, '添加用户', 3);

-- --------------------------------------------------------

--
-- 表的结构 `notice`
--

CREATE TABLE `notice` (
  `notice_id` int(11) NOT NULL,
  `notice_title` varchar(255) DEFAULT NULL,
  `notice_content` varchar(255) DEFAULT NULL,
  `notice_time` datetime DEFAULT NULL,
  `editor` varchar(255) DEFAULT NULL,
  `valid_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `notice`
--

INSERT INTO `notice` (`notice_id`, `notice_title`, `notice_content`, `notice_time`, `editor`, `valid_time`) VALUES
(9, '倒计时的尽快回复到数据库', '按时到达时', '0000-00-00 00:00:00', 'admin2', '0000-00-00 00:00:00'),
(11, '电风扇', '第三方', '2016-08-30 08:55:51', 'admin2', '0000-00-00 00:00:00'),
(15, 'saddas', 'dassad11', '2016-08-30 21:20:15', 'admin2', '2016-08-15 00:00:00'),
(19, 'hello', '狂风暴雨', '2016-09-18 10:05:52', 'admin2', '2016-09-18 00:00:00'),
(20, '林善飞', '111111', '2016-09-18 11:39:32', 'admin', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `play_record`
--

CREATE TABLE `play_record` (
  `play_record_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  `section_id` int(11) DEFAULT NULL,
  `play_time` datetime DEFAULT NULL,
  `ranking` int(11) DEFAULT NULL,
  `get_experience` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `play_record`
--

INSERT INTO `play_record` (`play_record_id`, `user_id`, `event_id`, `section_id`, `play_time`, `ranking`, `get_experience`) VALUES
(1, 1, 1, 1, NULL, 1, NULL),
(2, 1, 1, 2, NULL, 2, NULL),
(3, 1, 2, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `role_menu`
--

CREATE TABLE `role_menu` (
  `role_menu_id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `role_menu`
--

INSERT INTO `role_menu` (`role_menu_id`, `role_id`, `menu_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 3, 1),
(5, 3, 4);

-- --------------------------------------------------------

--
-- 表的结构 `section`
--

CREATE TABLE `section` (
  `section_id` int(11) NOT NULL,
  `section_name` int(11) DEFAULT NULL,
  `section_src` varchar(255) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  `map_src` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `section`
--

INSERT INTO `section` (`section_id`, `section_name`, `section_src`, `event_id`, `map_src`) VALUES
(1, 1, 'application/view/public/images/Track/cup.png', 1, NULL),
(2, 1, 'application/view/public/images/Track/track1_02.gif', 2, NULL),
(3, 1, 'application/view/public/images/Track/track1_03.gif', 3, NULL),
(4, 2, NULL, 1, NULL),
(5, 3, NULL, 1, NULL),
(6, 2, NULL, 2, NULL),
(7, 3, NULL, 2, NULL),
(8, 1, NULL, 4, NULL),
(9, 1, 'application/view/public/images/Track/track1_10.jpg', 5, NULL),
(10, 1, NULL, 6, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `user_info`
--

CREATE TABLE `user_info` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `game_name` varchar(255) DEFAULT NULL,
  `bicker_goods_id` int(11) DEFAULT '1',
  `car_goods_id` int(11) DEFAULT '9',
  `wheel_goods_id` int(11) DEFAULT '13',
  `reg_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `login_time` datetime DEFAULT NULL,
  `balance` int(11) DEFAULT '5000',
  `vip_level` int(11) DEFAULT '0',
  `lock_state` varchar(11) DEFAULT '锁定',
  `user_level` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_info`
--

INSERT INTO `user_info` (`user_id`, `user_name`, `user_password`, `game_name`, `bicker_goods_id`, `car_goods_id`, `wheel_goods_id`, `reg_time`, `login_time`, `balance`, `vip_level`, `lock_state`, `user_level`) VALUES
(1, 'admin1', 'e10adc3949ba59abbe56e057f20f883e', 'admin1', 1, 9, 13, '2016-08-30 11:19:56', '2016-09-04 13:11:51', 10700, 3, '锁定', 1),
(2, 'admin2', 'e10adc3949ba59abbe56e057f20f883e', 'admin2', 1, 9, 13, '2016-09-04 05:13:45', '2016-09-18 11:41:07', 2147483647, 3, '锁定', 1),
(3, '123123', '4297f44b13955235245b2497399d7a93', '123123', 1, 9, 13, '2016-09-18 01:58:29', '2016-09-18 10:39:24', 4900, 3, '锁定', 1),
(4, '123321', '4297f44b13955235245b2497399d7a93', '321123', 1, 9, 13, '2016-09-18 02:38:30', '2016-09-18 10:45:12', 5000, 0, '锁定', 1);

-- --------------------------------------------------------

--
-- 表的结构 `vip_level`
--

CREATE TABLE `vip_level` (
  `vipLevelId` int(11) NOT NULL,
  `chargeCount` int(11) DEFAULT NULL,
  `vipLevel` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `vip_level`
--

INSERT INTO `vip_level` (`vipLevelId`, `chargeCount`, `vipLevel`) VALUES
(14, 3000, 3),
(15, 2000, 2),
(16, 1000, 1),
(17, 5000, 4),
(18, 6000, 5),
(19, 7000, 6),
(20, 9000, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_info`
--
ALTER TABLE `admin_info`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `admin_role`
--
ALTER TABLE `admin_role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `carport`
--
ALTER TABLE `carport`
  ADD PRIMARY KEY (`carport_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `charge_record`
--
ALTER TABLE `charge_record`
  ADD PRIMARY KEY (`charge_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`experience_id`);

--
-- Indexes for table `experience_level`
--
ALTER TABLE `experience_level`
  ADD PRIMARY KEY (`experience_level_id`);

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`goods_id`);

--
-- Indexes for table `goods_type`
--
ALTER TABLE `goods_type`
  ADD PRIMARY KEY (`goods_type_id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`notice_id`);

--
-- Indexes for table `play_record`
--
ALTER TABLE `play_record`
  ADD PRIMARY KEY (`play_record_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `role_menu`
--
ALTER TABLE `role_menu`
  ADD PRIMARY KEY (`role_menu_id`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`section_id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vip_level`
--
ALTER TABLE `vip_level`
  ADD PRIMARY KEY (`vipLevelId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin_info`
--
ALTER TABLE `admin_info`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `admin_role`
--
ALTER TABLE `admin_role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `carport`
--
ALTER TABLE `carport`
  MODIFY `carport_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- 使用表AUTO_INCREMENT `charge_record`
--
ALTER TABLE `charge_record`
  MODIFY `charge_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- 使用表AUTO_INCREMENT `event`
--
ALTER TABLE `event`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `experience`
--
ALTER TABLE `experience`
  MODIFY `experience_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- 使用表AUTO_INCREMENT `experience_level`
--
ALTER TABLE `experience_level`
  MODIFY `experience_level_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `goods_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- 使用表AUTO_INCREMENT `goods_type`
--
ALTER TABLE `goods_type`
  MODIFY `goods_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `menu`
--
ALTER TABLE `menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `notice`
--
ALTER TABLE `notice`
  MODIFY `notice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- 使用表AUTO_INCREMENT `play_record`
--
ALTER TABLE `play_record`
  MODIFY `play_record_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `role_menu`
--
ALTER TABLE `role_menu`
  MODIFY `role_menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 使用表AUTO_INCREMENT `section`
--
ALTER TABLE `section`
  MODIFY `section_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `vip_level`
--
ALTER TABLE `vip_level`
  MODIFY `vipLevelId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- 限制导出的表
--

--
-- 限制表 `carport`
--
ALTER TABLE `carport`
  ADD CONSTRAINT `carport_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_info` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- 限制表 `charge_record`
--
ALTER TABLE `charge_record`
  ADD CONSTRAINT `charge_record_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_info` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- 限制表 `play_record`
--
ALTER TABLE `play_record`
  ADD CONSTRAINT `play_record_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_info` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

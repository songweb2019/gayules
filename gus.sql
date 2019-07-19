SET NAMES UTF8;
DROP DATABASE IF EXISTS gus;
CREATE DATABASE gus CHARSET=UTF8;
USE gus;

/**用户信息表**/
CREATE TABLE gus_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(8),
  upwd VARCHAR(16), 
  user_name VARCHAR(12), 
  sex BOOL,
  birthday DATE,
  email VARCHAR(32),
  phone CHAR(11)
);

/**用户信息表**/
INSERT INTO gus_user VALUES(NULL,'one','123456','张一',1,'2000-3-20','one@qq.com','13007669921');
INSERT INTO gus_user VALUES(NULL,'two','123456','张二',0,'2001-6-8','two@qq.com','13007669922');
INSERT INTO gus_user VALUES(NULL,'three','123456','张三',1,'2002-5-14','three@qq.com','13007669923');
INSERT INTO gus_user VALUES(NULL,'four','123456','张四',0,'2003-10-23','four@qq.com','13007669924');
INSERT INTO gus_user VALUES(NULL,'five','123456','张五',0,'2004-12-22','five@qq.com','13007669925');
INSERT INTO gus_user VALUES(NULL,'six','123456','张六',1,'2005-11-23','six@qq.com','13007669926');

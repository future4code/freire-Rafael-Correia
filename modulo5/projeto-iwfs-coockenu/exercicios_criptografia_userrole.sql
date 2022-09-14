ALTER TABLE UserAulaAutenticao ADD COLUMN role VARCHAR(255) DEFAULT "normal" ;

SELECT * FROM UserAulaAutenticao;
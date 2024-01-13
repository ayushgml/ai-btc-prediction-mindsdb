CREATE DATABASE btc_datasource
WITH
  engine = 'mariadb',
  parameters = {
    "host": "",       -- EC2 public IP here
    "port": 3306,
    "database": "btc_price",
    "user": "root",
    "password": ""    -- root user password here
  };

SELECT * FROM btc_datasource.btc_price_data;

SHOW ML_ENGINES;

DROP PREDICTOR mindsdb.btc_price_predictor;

CREATE MODEL mindsdb.btc_price_predictor
FROM btc_datasource (
  SELECT * FROM btc_price_data
  )
PREDICT Open
ORDER BY Datetime
WINDOW 2160
HORIZON 72
USING ENGINE = 'statsforecast';

DESCRIBE btc_price_predictor;

SELECT m.Datetime as Datetime, m.Open as forecasted_open
FROM mindsdb.btc_price_predictor as m
JOIN btc_datasource.btc_price_data as t;


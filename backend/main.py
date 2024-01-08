from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
from sqlalchemy import create_engine
import requests
import time
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("starting the program")
DATABASE_URL = os.getenv("DATABASE_URL")
DATABASE_URL is not None
engine = create_engine(str(DATABASE_URL))

@app.post('/predict')
def predict():
  print("predicting")
  # getting data from Yahoo finance
  btc = yf.Ticker("BTC-USD")
  df = btc.history(period="6mo", interval="1h")
  
  # inserting data into mariadb
  table_name = "btc_price_data"
  df.to_sql(table_name, engine, if_exists='replace', index=True)
  
  
  url = os.getenv("MINDSDB_URL")
  drop_model_query = """DROP MODEL IF EXISTS mindsdb.btc_price_predictor;""";
  requests.post(url, json={'query': drop_model_query})
  model_query = """CREATE MODEL mindsdb.btc_price_predictor
                    FROM btc_datasource (
                      SELECT * FROM btc_price_data
                      )
                    PREDICT Open
                    ORDER BY Datetime
                    WINDOW 240
                    HORIZON 12
                    USING ENGINE = 'statsforecast';"""
  requests.post(url, json={'query': model_query})
  while(requests.post(url, json={'query': 'DESCRIBE btc_price_predictor;'}).json()['data'][0][6] == 'generating'):
    time.sleep(5)
  
  # # requesting mindsdb for predicted data
  resp = requests.post(url, json={'query':
                    'SELECT m.Datetime as Datetime, m.Open as forecasted_open FROM mindsdb.btc_price_predictor as m JOIN btc_datasource.btc_price_data as t;'})

  # response
  return resp.json()

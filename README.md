<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ayushgml/ai-btc-prediction-mindsdb.git">
  
  </a>
  <!-- A cover image in assets/cover.png -->
  <img src="assets/cover.png" alt="Logo" width="100%" height="auto">

  <h1 align="center">Bitcoin predicting AI using SQL</h1>

  <p align="center">
    A fullstack applicationthat uses MindsDB, MariaDB, FastAPI, Docker, AWS EC2 and NextJS to predict the price of Bitcoin.
</div>


## About The Project

This project is a fullstack application that uses MindsDB, MariaDB, FastAPI, Docker, AWS EC2 and NextJS to predict the price of Bitcoin. The project is divided into 4 parts:
 - A MariaDB database that stores the historical data of Bitcoin(hosted on EC2 instance)
 - MindsDB that uses the data from the database to train a model and make predictions
 - A FastAPI server that serves the predictions from MindsDB
 - A NextJS frontend that displays the predictions from the FastAPI server

## Built With

 - [MindsDB](https://mindsdb.com/)
 - [MariaDB](https://mariadb.org/)
 - [FastAPI](https://fastapi.tiangolo.com/)
 - [NextJS](https://nextjs.org/)
 - [Docker](https://www.docker.com/)
 - [AWS EC2](https://aws.amazon.com/ec2/)

## Project Structure

```
.
├── README.md
├── assets
│   ├── cover.png
│   └── mindsdb-arch.png
├── backend
│   ├── Dockerfile
│   ├── env.py
│   ├── main.py
│   └── requirements.txt
├── compose.yaml
├── config-mariadb
│   └── compose.yaml
├── connect.sh
├── frontend
│   ├── Dockerfile
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   ├── src
│   ├── tailwind.config.ts
│   └── tsconfig.json
├── mindsdb.sql
├── private
│   └── maria-secret-key.pem
├── sample-docker-compose.yaml
└── venv
    ├── bin
    ├── etc
    ├── include
    ├── lib
    ├── pyvenv.cfg
    └── share
```

## Architecture and Working

<img src="assets/mindsdb-arch.png" alt="Logo" width="100%" height="auto">

<!-- ## Installation and Running the Project -->

<!-- To be written -->


## Contact

Ayush Gupta - [@itsayush\_\_](https://twitter.com/itsayush__) - ayushgml@gmail.com

[Project link]()


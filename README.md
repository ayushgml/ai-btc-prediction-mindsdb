1. Set up MindsDB via docker.
2. Run the following command to start the MindsDB server:
```
docker run -p 47334:47334 -p 47335:47335 mindsdb/mindsdb
```
3. MindsDB server is now running on port 47334. You can check it by running the following command:
```
curl http://localhost:47334
```

4. Go to your AWS account and create an EC2 instance with basic specifications. You can use the following link to create an EC2 instance: https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html
5. Connect to your EC2 instance via SSH. You can use the following link to connect to your EC2 instance: https://docs.aws.amazon.com/efs/latest/ug/gs-step-two-connect-to-ec2-instance.html
6. Install MariaDB on your EC2 instance. You can use the following link to install MariaDB: https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04

# 🌖 PyChainCoin: A Cryptocurrency Starter Project

👋 Hi All! I am Nicholas Cheung. Here is a project in which I have implemented the basics of blockchain and cryptocurrency with Python. Feel free to follow the instructions below to set up the local development demo and see how it works.

## 👨🏻‍💻 Setting Up Environment
1. Clone this repository
```
$ git clone https://github.com/nicholaas2cheung/cryptocurrency-starter.git
```
2. Activate the virtual environment in Python
```
$ source blockchain-env/bin/activate
```

3. For Windows user, please create the virtual environment on your own and activate it (Please make sure you have pip installed)
```
$ py -m pip install --user virtualenv
$ py -m venv env
$ .\env\Scripts\activate
```

4. Install all the required packages in the virtual environment
```
(venv) $ pip3 install -r requirements.txt
```

## 🏌🏻‍♂️ Kicking Off the Project
1. Activate the virtual environment in Python
```
$ source blockchain-env/bin/activate
```

2. For Windows user, please create the virtual environment on your own and activate it (Please make sure you have pip installed)
```
$ py -m pip install --user virtualenv
$ py -m venv env
$ .\env\Scripts\activate
```
3. Start the backend server
```
(venv) $ python3 -m server.app
```

4. You can also start a backend server with dummy data
```
(venv) $ export SEED_DATA=True && python3 -m server.app
```

5. Start a peer instance to simulate production environment in which different nodes interacting with each other with the blockchain.
```
(venv) $ export PEER=True && python3 -m server.app
```

6. Start the frontend development server
```
$ /client npm install
$ /client npm run start
```

## 🧪 Running Tests

1. Activate the virtual environment in Python
```
$ source blockchain-env/bin/activate
```

2. For Windows user, please create the virtual environment on your own and activate it (Please make sure you have pip installed)
```
$ py -m pip install --user virtualenv
$ py -m venv env
$ .\env\Scripts\activate
```

3. Run tests with Pytest packages
```
(venv) $ python3 -m pytest server/tests
```
## 🌐 Website Frontend
![PyChainCoin](https://user-images.githubusercontent.com/74588363/127821856-b5cd8683-05cc-4448-bdb3-0e5f407c3cb8.png)


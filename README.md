**Activate the virtual environment**

```
source blockchain-env/bin/activate
```

**Install all packages**
```
pip3 install -r requirements.txt
```

**Run the test**

1. Activate the virtual environment.

```
python3 -m pytest server/test
```

**Run the application and APIs**

1. Activate the virtual environment.
```
python3 -m server.app
```

**Run a Peer Instance**

Make sure to activate the virtual environment.

```
export PEER=True && python3 -m server.app
```

**Seed the server with data**
Make sure to activate the virtual environment.
```
export SEED_DATA=True && python3 -m server.app
```

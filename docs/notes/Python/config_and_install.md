---
sidebar_position: 1
---
# Config and install

## - Download 

Download the regarding python version from:  
https://www.python.org/downloads/  

## - Windows Create venv

Set the windows Set-ExecutionPolicy if occur the policy issues.

```bash title="powershell as administrator"
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Select verison to install

```bash
python -m venv <env_name>

C:\Users\username\AppData\Local\Programs\Python\Python39\python.exe -m venv myenv
C:\Users\username\AppData\Local\Programs\Python\Python310\python.exe -m venv myenv
C:\Users\username\AppData\Local\Programs\Python\Python38\python.exe -m venv tfv
```

### Activite env
```bash
myenv\Scripts\Activate.ps1
```

### Upgrade pip
```bash
python -m pip install --upgrade pip

C:\Users\username\AppData\Local\Programs\Python\Python38\python.exe -m pip install --upgrade pip
```

### Exit env
```bash
deactivate
```
---
sidebar_position: 1
---
# Config and install

## - Windows Create venv

- Select python verison to install

```bash
python -m venv <env_name>

C:\Users\username\AppData\Local\Programs\Python\Python39\python.exe -m venv myenv
C:\Users\username\AppData\Local\Programs\Python\Python310\python.exe -m venv myenv
C:\Users\username\AppData\Local\Programs\Python\Python38\python.exe -m venv tfv
```

- Activite env
```bash
myenv\Scripts\Activate.ps1
```

- Upgrade pip
```bash
python -m pip install --upgrade pip

C:\Users\username\AppData\Local\Programs\Python\Python38\python.exe -m pip install --upgrade pip
```

- Exit env
```bash
deactivate
```
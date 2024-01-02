---
sidebar_position: 2
---
# [Basic] pyautogui

## - References 

https://pyautogui.readthedocs.io/en/latest/mouse.html#mouse-clicks

## - Basic with clickk qutting

```python
## https://pyautogui.readthedocs.io/en/latest/mouse.html#mouse-clicks

import os
import time
import keyboard
import pyautogui

def on_space():
    print("qutting apps")
    os._exit(0)

def mainFunc():

    try:   
        keyboard.add_hotkey('space', on_space)    

        # Wait 4 seconds    
        time.sleep(4)   

        # Loop forever
        while True:
            time.sleep(2)

            # Click mouse in pol x=100, y=200 
            pyautogui.click(x=100, y=200)
            time.sleep(0.5)

            pyautogui.click(x=100, y=200)
            time.sleep(0.5)
            pyautogui.click(x=100, y=200)
            time.sleep(0.5)

    except KeyboardInterrupt:
        exit() 

   
if __name__ == "__main__":
    mainFunc()

```
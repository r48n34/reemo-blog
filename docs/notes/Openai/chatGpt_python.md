---
sidebar_position: 2
---

# Chat GPT Python

Create a api key from here:   
https://platform.openai.com/account/api-keys    

```bash showLineNumbers title=".env"
OPEN_AI_APIKEY=xxxxxxxxxxxx
```

Then add the library with 

```bash
pip install openai dotenv
```

```python showLineNumbers title="chat.py"
from dotenv import dotenv_values
import openai

openai.api_key = dotenv_values(".env")["OPEN_AI_APIKEY"]

def gptGen():

    result = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
            { "role": "user", "content": "Help me to make a instagram post"},
        ]
    )
    
    print(result.choices[0].message.content)

if __name__ == "__main__":
    gptGen()
```
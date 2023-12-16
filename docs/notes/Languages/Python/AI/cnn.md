---
sidebar_position: 2
---
# [AI] CNN Tensorflow

The following code will be builg for using tensorflow keras to train a simple state-of-the-art CNN model in python.



## Training

### Import library
```python
# Use tensorflow 2.13
import time
import tensorflow as tf
from tensorflow import keras
import matplotlib.pyplot as plt
import logging
```

### Setup logging
```python
t = time.time()
current_time = int(t * 1000)
model_name = str(current_time) + "_isStairModelMobieNet.h5"
log_name = str(current_time) + "_isStairModel.log"

logging.basicConfig(
    level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s', 
    datefmt='%Y-%m-%d %H:%M', 
    handlers=[logging.FileHandler(log_name, 'w', 'utf-8'), ]
)
```

### Import dataset from folders
```python
data_dir = "G:\\dataset\\someData"

batch_size = 128
imgSize = 224
split_rate = 0.25
dataSeed = 1238

train_ds = tf.keras.preprocessing.image_dataset_from_directory(
  data_dir, seed=dataSeed, batch_size=batch_size, validation_split=split_rate, subset="training",
  image_size=(imgSize, imgSize), color_mode='rgb'
)

valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
  data_dir, seed=dataSeed, batch_size=batch_size, validation_split=split_rate, subset="validation",
  image_size=(imgSize, imgSize), color_mode='rgb'
)

classNum = len(train_ds.class_names)
classArr = train_ds.class_names
print(classNum)
print(train_ds.class_names)
```

### Setup data augmentation
```python
randomAugSeed = 123

data_augmentation = keras.Sequential([
  tf.keras.layers.RandomFlip( "horizontal", seed=randomAugSeed ),
  tf.keras.layers.RandomRotation(0.1, seed=randomAugSeed ),
  tf.keras.layers.RandomZoom(0.1, seed=randomAugSeed ),
  tf.keras.layers.RandomContrast(0.1, seed=randomAugSeed)
])

expendRound = 1
temp_ds = train_ds
for i in range(expendRound):
    train_ds = train_ds.concatenate(temp_ds)

train_ds = train_ds.map(lambda image,label:(data_augmentation(image),label))
```

### Setup model
```python
pretrained_model = tf.keras.applications.MobileNetV3Large(
    include_top=False,
    weights='imagenet',
    input_shape=(imgSize, imgSize, 3)
)

pretrained_model.trainable = True

model = tf.keras.Sequential([
    pretrained_model,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(classNum, activation='softmax')
])
```

### Setup callback and epochs, lr
```python
epochsRound = 14
base_learning_rate = 0.0001

# save model callback
checkpoint_filepath = './tmp/checkpoint'
model_checkpoint_callback = tf.keras.callbacks.ModelCheckpoint(
    filepath=checkpoint_filepath,
    save_weights_only=True,
    monitor='val_accuracy',
    mode='max',
    save_best_only=True
)

# set lr decay callback
def learnDecay(epoch, lr):
    if epoch < (epochsRound / 2):
        return lr
    else:
        return lr * tf.math.exp(-0.15)

learnDecayCallback = tf.keras.callbacks.LearningRateScheduler(learnDecay)

class LogCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        # keys = list(logs.keys())
        # print("End epoch {} of training; got log keys: {}".format(epoch, keys))
        logging.info(f"End epoch {epoch} of training:")
        logging.info(f"Loss: { logs['loss'] } ")
        logging.info(f"accuracy: { logs['accuracy'] } ")
        logging.info(f"val_loss: { logs['val_loss'] } ")
        logging.info(f"val_accuracy: { logs['val_accuracy'] } ")
        logging.info(f"---------------------------------------")
```

### Training and save model
```python
model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=base_learning_rate),
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=False),
    metrics=['accuracy']
)

history = model.fit(
    train_ds,
    epochs=epochsRound,
    validation_data=valid_ds, 
    callbacks=[ model_checkpoint_callback, learnDecayCallback, LogCallback() ]
)

model.load_weights(checkpoint_filepath)
test_loss, test_acc = model.evaluate(valid_ds, verbose=2)
print(test_acc)

model.save(model_name)
```

### Plot result
```python
acc = history.history['accuracy']
val_acc = history.history['val_accuracy']
loss = history.history['loss']
val_loss = history.history['val_loss']

epochs_range = range(epochsRound)

plt.figure(figsize=(8, 8))
plt.subplot(1, 2, 1)
plt.plot(epochs_range, acc, label='Training Accuracy')
plt.plot(epochs_range, val_acc, label='Validation Accuracy')
plt.legend(loc='lower right')
plt.title('Training and Validation Accuracy')

plt.subplot(1, 2, 2)
plt.plot(epochs_range, loss, label='Training Loss')
plt.plot(epochs_range, val_loss, label='Validation Loss')
plt.legend(loc='upper right')
plt.title('Training and Validation Loss')
plt.show()
```

### Full code

```python
# Use tensorflow 2.13
import time
import tensorflow as tf
from tensorflow import keras
import matplotlib.pyplot as plt
import logging

t = time.time()
current_time = int(t * 1000)
model_name = str(current_time) + "_isStairModelMobieNet.h5"
log_name = str(current_time) + "_isStairModel.log"

logging.basicConfig(
    level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s', 
    datefmt='%Y-%m-%d %H:%M', 
    handlers=[logging.FileHandler(log_name, 'w', 'utf-8'), ]
)

data_dir = "G:\\dataset\\someData"

batch_size = 128
imgSize = 224
split_rate = 0.25
dataSeed = 1238

train_ds = tf.keras.preprocessing.image_dataset_from_directory(
  data_dir, seed=dataSeed, batch_size=batch_size, validation_split=split_rate, subset="training",
  image_size=(imgSize, imgSize), color_mode='rgb'
)

valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
  data_dir, seed=dataSeed, batch_size=batch_size, validation_split=split_rate, subset="validation",
  image_size=(imgSize, imgSize), color_mode='rgb'
)

classNum = len(train_ds.class_names)
classArr = train_ds.class_names
print(classNum)
print(train_ds.class_names)

randomAugSeed = 123

data_augmentation = keras.Sequential([
  tf.keras.layers.RandomFlip( "horizontal", seed=randomAugSeed ),
  tf.keras.layers.RandomRotation(0.1, seed=randomAugSeed ),
  tf.keras.layers.RandomZoom(0.1, seed=randomAugSeed ),
  tf.keras.layers.RandomContrast(0.1, seed=randomAugSeed)
])

expendRound = 1
temp_ds = train_ds
for i in range(expendRound):
    train_ds = train_ds.concatenate(temp_ds)

train_ds = train_ds.map(lambda image,label:(data_augmentation(image),label))

pretrained_model = tf.keras.applications.MobileNetV3Large(
    include_top=False,
    weights='imagenet',
    input_shape=(imgSize, imgSize, 3)
)

pretrained_model.trainable = True

model = tf.keras.Sequential([
    pretrained_model,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(classNum, activation='softmax')
])

epochsRound = 14
base_learning_rate = 0.0001

# save model callback
checkpoint_filepath = './tmp/checkpoint'
model_checkpoint_callback = tf.keras.callbacks.ModelCheckpoint(
    filepath=checkpoint_filepath,
    save_weights_only=True,
    monitor='val_accuracy',
    mode='max',
    save_best_only=True
)

# set lr decay callback
def learnDecay(epoch, lr):
    if epoch < (epochsRound / 2):
        return lr
    else:
        return lr * tf.math.exp(-0.15)

learnDecayCallback = tf.keras.callbacks.LearningRateScheduler(learnDecay)

class LogCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        # keys = list(logs.keys())
        # print("End epoch {} of training; got log keys: {}".format(epoch, keys))
        logging.info(f"End epoch {epoch} of training:")
        logging.info(f"Loss: { logs['loss'] } ")
        logging.info(f"accuracy: { logs['accuracy'] } ")
        logging.info(f"val_loss: { logs['val_loss'] } ")
        logging.info(f"val_accuracy: { logs['val_accuracy'] } ")
        logging.info(f"---------------------------------------")

# model.load_weights(checkpoint_filepath)

model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=base_learning_rate),
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=False),
    metrics=['accuracy']
)

history = model.fit(
    train_ds,
    epochs=epochsRound,
    validation_data=valid_ds, 
    callbacks=[ model_checkpoint_callback, learnDecayCallback, LogCallback() ]
)

model.load_weights(checkpoint_filepath)
test_loss, test_acc = model.evaluate(valid_ds, verbose=2)
print(test_acc)

model.save(model_name)

acc = history.history['accuracy']
val_acc = history.history['val_accuracy']
loss = history.history['loss']
val_loss = history.history['val_loss']

epochs_range = range(epochsRound)

plt.figure(figsize=(8, 8))
plt.subplot(1, 2, 1)
plt.plot(epochs_range, acc, label='Training Accuracy')
plt.plot(epochs_range, val_acc, label='Validation Accuracy')
plt.legend(loc='lower right')
plt.title('Training and Validation Accuracy')

plt.subplot(1, 2, 2)
plt.plot(epochs_range, loss, label='Training Loss')
plt.plot(epochs_range, val_loss, label='Validation Loss')
plt.legend(loc='upper right')
plt.title('Training and Validation Loss')
plt.show()
```

## Predict
```python
import tensorflow as tf
import shutil
from pathlib import Path

import numpy as np
import os

def predictDataset(
    original_data_dir: str,
    model_path: str,
    output_data_dir: str,
    labels: list[str],
) -> None:
    """ Generate predict result with regarding model """

    batch_size = 64
    imgSize = 240

    model = tf.keras.models.load_model(model_path)

    first_stuff = Path(os.path.join(original_data_dir, os.listdir(original_data_dir)[0]))
    labels_mode = "inferred" if first_stuff.is_dir() else None

    valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
        original_data_dir, labels=labels_mode, shuffle=False,
        image_size=(imgSize, imgSize), batch_size=batch_size, color_mode='rgb'
    )

    file_paths: list[str] = valid_ds.file_paths

    result = model.predict(
        valid_ds, batch_size=batch_size,
    )

    # [file_path, file predicted result]
    labels_list = [ [file_paths[ind], labels[np.argsort(v)[::-1][0]]] for ind, v in enumerate(result) ]

if __name__ == "__main__":
    
    model_dir = "E:\\dir\\pythonCode\\isStairModelv5.h5"
    original_data_dir = "G:\\dir\\original_data_dir"
    labels = ['isStair', 'notStair']
    
    output_data_dir = "G:\\dir\\output_data_dir"

    predictDataset(
        original_data_dir,
        model_dir,
        output_data_dir,
        labels
    )
```
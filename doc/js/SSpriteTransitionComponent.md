# Attributes

Here's the list of available attribute(s).

## src

The source of the sprite to use as transition

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


## frameWidth

The frame width

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **null**


## stillFrame

Specify which is the still frame where the transition will stop before continue

Type : **{ Integer }**

Default : **null**


## yoyo

Specify if the out animation is the yoyo version of the in one

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**


## duration

Set the transition duration wanted in ms

Type : **{ Integer }**

Default : **1000**


## outDuration

Set the out duration if wanted a different one

Type : **{ Integer }**

Default : **null**


## color

Specify a color to colorize the sprite if wanted

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**



# Properties

The urban sprite

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


# Methods


## totalFrames

Get the number of frame that the sprite has

Return **{ Integer }** The number of frame that the sprite has


## goToStillFrame

Go to the still frame or to the end of sprite if yoyo prop is true


## goToFrame

Go to a special frame


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
frame  |  **{ Integer }**  |  The frame number to go to  |  required  |


## animateIn

Animate the transition in

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** A promised fulfilled when the transition is finished


## animateOut

Animate the transition out

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** A promised fulfilled when the transition is finished
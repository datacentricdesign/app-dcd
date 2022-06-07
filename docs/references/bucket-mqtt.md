# Bucket MQTT API


The MQTT API follow the structure of the REST API. The verb is placed at the end.

Each published payload must be JSON format and content a request ID. This request ID is an identifier of your choice. It is added to responses and logs to recognise what it relates to.

## Publishing

### Create property

**Topic: /things/:thingId/properties/create**

Payload:

```json
{
    "requestId": "myId",
    "property": {
        "name": "Prop name",
        "typeId": "ACCELEROMETER"
    }   
}
```

**Response topic: /things/:thingId/reply**

Payload:

```json
{
    "requestId": "myId",
    "property": Property
}
```

### Update property

**Topic: /things/:thingId/properties/:propertyId/update**

Payload:

```json
{
    "requestId": "myId",
    "property": {
        "id": "dcd:properties:....",
        "values": [
            [ timestamp, val, val ],
            [ timestamp, val, val ]
        ]
    }
}
```
    
### Read thing

**Topic: /things/:thingId/read**

Payload:

```json
{
    "requestId": "myId"
}
```
    
**Response topic: /things/:thingId/reply**

Payload:

```json
    "requestId": "myId",
    "thing": Thing
```

## Subscribing

* Logs topic: /things/:thingId/log
* Request's response topic: /things/:thingId/reply
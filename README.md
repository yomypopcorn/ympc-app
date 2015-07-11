# yo-service
yo service

## API

Parameters

```
token: a token specific for each user. sha1(username + YO_APIKEY).substr(0, 16)
       its submitted as html tag attribute: x-token, <html x-token="a1b5....

```
### GET /shows?compact=1

Get all shows compacted.

Responds with 200

```json
[
  {
    "imdb_id": "tt2575988",
    "title":   "Silicon Valley",
    "rating":  7.3
  },
  {
    "imdb_id": "tt7392128",
    "title":   "Example",
    "rating":  1.2
  }
]
```


### GET /users/:username/feed?token=token

Get a users feed

Responds with 200

Example
```json
[
  {
    "imdb_id":   "episode id",
    "title":    "title",
    "season":   3,
    "episode":  2,
    "poster":   "image url",
    "first_aired":  "releasedate"
  }
]

### GET /users/:username/shows?token=token

Get a users feed

Responds 200

Example

```json
[ "tt2575988", "tt6113213" ]
```


### POST /users/:username/shows?id=showid&token=token

Subscribe to a new show

Responds 201
```json
{
 "status": "ok"
}
```

### DELETE /users/:username/shows?id=showid&token=token

Subscribe to a show

Responds 200
```json
{
 "status": "ok"
}
```

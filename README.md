# yo-service
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fyomypopcorn%2Fympc-app.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fyomypopcorn%2Fympc-app?ref=badge_shield)

yo service

## API

Parameters

```
token: a token specific for each user. sha1(username + YO_APIKEY).substr(0, 16)
       its submitted as html tag attribute: x-token, <html x-token="a1b5....

```
### GET /api/shows?compact=1

Get all shows compacted.

Responds with 200

```json
[
  {
    "id": "tt2575988",
    "imdb_id": "tt2575988",
    "title":   "Silicon Valley",
    "rating":  7.3
  },
  {
    "id": "tt7392128",
    "imdb_id": "tt7392128",
    "title":   "Example",
    "rating":  1.2
  }
]
```


### GET /api/users/:username/feed?token=token

Get a users feed

Responds with 200

Example
```json
[
  {
    "show_id":        "show id",
    "imdb_id":        "show IMDB id",
    "title":          "show title",
    "episode_title":  "episode title",
    "season":         3,
    "episode":        2,
    "poster":         "image url",
    "first_aired":    "releasedate"
  }
]
```

### GET /api/users/:username/shows?token=token

Get a users subscriptions

Responds 200

Example

```json
[
  {
    "id": "tt2575988",
    "imdb_id": "tt2575988",
    "title":   "Silicon Valley",
    "rating":  7.3
  },
  {
    "id": "tt7392128",
    "imdb_id": "tt7392128",
    "title":   "Example",
    "rating":  1.2
  }
]
```


### POST /api/users/:username/shows?token=token

Subscribe to a new show

Request body:
```json
{ "show_id": "tt2575988" }
```



Responds 201
```json
{
 "status": "ok"
}
```

### DELETE /api/users/:username/shows/:showid&token=token

Unsubscribe to a show

Responds 200
```json
{
 "status": "ok"
}
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fyomypopcorn%2Fympc-app.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fyomypopcorn%2Fympc-app?ref=badge_large)
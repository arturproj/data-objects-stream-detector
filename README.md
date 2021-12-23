# data-objects-stream-detector
objective : to create a reactjs application for displaying predictions on a streamed video

## Getting-Started

### run webpack app
#### `npm install && npm start`

### run json api dev

Install JSON Server 

```
npm install -g json-server
```

Create a `db.json` file with some data

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server

```bash
json-server --watch db.json
```

Now if you go to [http://localhost:3000/posts/1](http://localhost:3000/posts/1), you'll get

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

## More of [https://github.com/typicode/json-server/](json-server)
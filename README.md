# Blog: powerd by Nuxt.js & Contentful & Vercel

Blog's URL: [https://mycode.rip](https://mycode.rip/)

## Development

### Using local Node.js

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000 after a few seconds later
$ yarn run dev
```

### Using Docker

``` bash
# install dependencies
$ docker-compose run --rm node yarn install

# serve with hot reload at localhost:3000 after a few seconds later
$ docker-compose up
```

## Contentful Post model

```json
{
  "name": "Post",
  "description": "",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "slug",
      "name": "Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "unique": true
        },
        {
          "regexp": {
            "pattern": "[a-z0-9]",
            "flags": ""
          }
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "content",
      "name": "Content",
      "type": "Text",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ],
  "sys": {...}
}
```

# Blog - Nuxt.js + Contentful

- Blog: https://mycode.rip/
- Qiita: https://qiita.com/hareku/items/acd9dfe5d77293a4a6d9
- MyCode.rip(Terraform): https://github.com/hareku/mycode.rip-terraform

## Build Setup

``` bash
# install dependencies
$ docker-compose run --rm node yarn install

# serve with hot reload at localhost:3000 after a few seconds later
$ docker-compose up

# generate static project
$ docker-compose run --rm node yarn run generate

# develop without docker
$ cross-env NODE_ENV=development CTF_SPACE_ID=vrsagmse1qfb CTF_CDA_ACCESS_TOKEN=5d3d838e7be39328a3f20175aafa937201e308d0bb10498d3283361db3aa1654 yarn run dev
```

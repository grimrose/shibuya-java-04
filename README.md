shibuya-java-04
===============

第四回 #渋谷java

## スライド

[Shibuya.Java #04](https://speakerdeck.com/grimrose/shibuya-dot-java-number-04)

## 使い方

### serverについて

**Vert.xを予めインストールしておいてください**

[http://vertx.io](http://vertx.io)

* サーバーの起動

```bash
$ cd server
$ vertx run server.js
```

### clientについて

* タスク一覧

```bash
$ cd client
$ gradle tasks
```

* SSHでログインして何かしらコマンドを実行するタスク

```bash
$ gradle demo
$ gradle demo -i // antの出力を表示
```

* CRaSHのbusコマンドを使ってJSONのメッセージを投げるタスク

```bash
$ gradle hello
```

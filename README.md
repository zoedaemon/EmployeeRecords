# employee-records

### Run Docker Postgresql

```
$ npm install sails-postgresql --save
$ docker network create moovaz
$ docker-compose up -d
```

##### NOTE For Auto Migrate (Seeding)

increase HARD_CODED_DATA_VERSION with value greater than 0

```
  // This bootstrap version indicates what version of fake data we're dealing with here.
  var HARD_CODED_DATA_VERSION = 1;
```

### Run Project

```
$ sail lift
```

if success open browser and accessing http://localhost:1337
login with seeding data as default super admin `email:admin@example.com;password:abc123`

### Dependency

1.  [Sails v1](https://sailsjs.com)
<!-- Internally, Sails used [`sails-generate@1.17.2`](https://github.com/balderdashy/sails-generate/tree/v1.17.2/lib/core-generators/new). -->
2.  Postgresql

<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

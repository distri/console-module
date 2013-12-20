(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "console-module\n==============\n\nA module to load and launch a console.\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Console\n=======\n\nThis mixin opens up a console window and receives commands from it.\n\nOpen up a console in a window and run commands from it.\n\n    Eval = require \"eval\"\n\n    module.exports = (I={}, self={}) ->\n      consoleWindow = null\n\n      send = (data) ->\n        consoleWindow?.postMessage data, \"*\"\n\n      eventProcessor = (event) ->\n        if event.source is consoleWindow\n          console.log event\n\n          if code = event.data?.code\n            try\n              result = self.eval(code)\n              \n              console.log result\n\n              send \n                result: result\n            catch error\n              console.error\n\n              send\n                error: error\n\n      addEventListener \"unload\", ->\n        consoleWindow?.close()\n      , false\n\n      addEventListener \"message\", eventProcessor, false\n\n      self.launchConsole = ->\n        return if consoleWindow and !consoleWindow.closed\n\n        consoleWindow = window.open \"http://distri.github.io/console/?0\", \"\", \"width=640,height=160\"\n\n      Eval(I, self)\n\n      return self\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\ndependencies:\n  eval: \"distri/eval:v0.1.0\"\n",
      "type": "blob"
    },
    "test/main.coffee": {
      "path": "test/main.coffee",
      "mode": "100644",
      "content": "Console = require \"../main\"\n\nconsole = Console()\n\nconsole.launchConsole()",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var Eval;\n\n  Eval = require(\"eval\");\n\n  module.exports = function(I, self) {\n    var consoleWindow, eventProcessor, send;\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = {};\n    }\n    consoleWindow = null;\n    send = function(data) {\n      return consoleWindow != null ? consoleWindow.postMessage(data, \"*\") : void 0;\n    };\n    eventProcessor = function(event) {\n      var code, error, result, _ref;\n      if (event.source === consoleWindow) {\n        console.log(event);\n        if (code = (_ref = event.data) != null ? _ref.code : void 0) {\n          try {\n            result = self[\"eval\"](code);\n            console.log(result);\n            return send({\n              result: result\n            });\n          } catch (_error) {\n            error = _error;\n            console.error;\n            return send({\n              error: error\n            });\n          }\n        }\n      }\n    };\n    addEventListener(\"unload\", function() {\n      return consoleWindow != null ? consoleWindow.close() : void 0;\n    }, false);\n    addEventListener(\"message\", eventProcessor, false);\n    self.launchConsole = function() {\n      if (consoleWindow && !consoleWindow.closed) {\n        return;\n      }\n      return consoleWindow = window.open(\"http://distri.github.io/console/?0\", \"\", \"width=640,height=160\");\n    };\n    Eval(I, self);\n    return self;\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"dependencies\":{\"eval\":\"distri/eval:v0.1.0\"}};",
      "type": "blob"
    },
    "test/main": {
      "path": "test/main",
      "content": "(function() {\n  var Console, console;\n\n  Console = require(\"../main\");\n\n  console = Console();\n\n  console.launchConsole();\n\n}).call(this);\n\n//# sourceURL=test/main.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.1.0",
  "entryPoint": "main",
  "repository": {
    "id": 15328076,
    "name": "console-module",
    "full_name": "distri/console-module",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/console-module",
    "description": "A module to load and launch a console.",
    "fork": false,
    "url": "https://api.github.com/repos/distri/console-module",
    "forks_url": "https://api.github.com/repos/distri/console-module/forks",
    "keys_url": "https://api.github.com/repos/distri/console-module/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/console-module/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/console-module/teams",
    "hooks_url": "https://api.github.com/repos/distri/console-module/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/console-module/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/console-module/events",
    "assignees_url": "https://api.github.com/repos/distri/console-module/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/console-module/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/console-module/tags",
    "blobs_url": "https://api.github.com/repos/distri/console-module/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/console-module/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/console-module/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/console-module/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/console-module/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/console-module/languages",
    "stargazers_url": "https://api.github.com/repos/distri/console-module/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/console-module/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/console-module/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/console-module/subscription",
    "commits_url": "https://api.github.com/repos/distri/console-module/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/console-module/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/console-module/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/console-module/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/console-module/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/console-module/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/console-module/merges",
    "archive_url": "https://api.github.com/repos/distri/console-module/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/console-module/downloads",
    "issues_url": "https://api.github.com/repos/distri/console-module/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/console-module/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/console-module/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/console-module/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/console-module/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/console-module/releases{/id}",
    "created_at": "2013-12-20T02:27:19Z",
    "updated_at": "2013-12-20T02:27:39Z",
    "pushed_at": "2013-12-20T02:27:19Z",
    "git_url": "git://github.com/distri/console-module.git",
    "ssh_url": "git@github.com:distri/console-module.git",
    "clone_url": "https://github.com/distri/console-module.git",
    "svn_url": "https://github.com/distri/console-module",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {
    "eval": {
      "source": {
        "LICENSE": {
          "path": "LICENSE",
          "mode": "100644",
          "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
          "type": "blob"
        },
        "README.md": {
          "path": "README.md",
          "mode": "100644",
          "content": "eval\n====\n\nSuperSystem Eval Component\n",
          "type": "blob"
        },
        "main.coffee.md": {
          "path": "main.coffee.md",
          "mode": "100644",
          "content": "Eval\n====\n\nAllow for evaluation within the context of a SuperSystem component.\n\nProvides `self.eval` which will evaluate JS code and return the result.\n\n    module.exports = (I={}, self={}) ->\n      self.eval = (code) ->\n        eval code\n\n      return self\n",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "mode": "100644",
          "content": "version: \"0.1.0\"\n",
          "type": "blob"
        },
        "test/eval.coffee": {
          "path": "test/eval.coffee",
          "mode": "100644",
          "content": "Eval = require \"../main\"\n\ndescribe \"eval\", ->\n  it \"should evaluate code within the context of the component\", ->\n    e = Eval()\n    \n    I = e.eval \"I\"\n    e.eval \"I.a = 0\"\n    \n    assert.equal I.a, 0\n",
          "type": "blob"
        }
      },
      "distribution": {
        "main": {
          "path": "main",
          "content": "(function() {\n  module.exports = function(I, self) {\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = {};\n    }\n    self[\"eval\"] = function(code) {\n      return eval(code);\n    };\n    return self;\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.1.0\"};",
          "type": "blob"
        },
        "test/eval": {
          "path": "test/eval",
          "content": "(function() {\n  var Eval;\n\n  Eval = require(\"../main\");\n\n  describe(\"eval\", function() {\n    return it(\"should evaluate code within the context of the component\", function() {\n      var I, e;\n      e = Eval();\n      I = e[\"eval\"](\"I\");\n      e[\"eval\"](\"I.a = 0\");\n      return assert.equal(I.a, 0);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/eval.coffee",
          "type": "blob"
        }
      },
      "progenitor": {
        "url": "http://strd6.github.io/editor/"
      },
      "version": "0.1.0",
      "entryPoint": "main",
      "repository": {
        "id": 15091435,
        "name": "eval",
        "full_name": "distri/eval",
        "owner": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/distri/eval",
        "description": "SuperSystem Eval Component",
        "fork": false,
        "url": "https://api.github.com/repos/distri/eval",
        "forks_url": "https://api.github.com/repos/distri/eval/forks",
        "keys_url": "https://api.github.com/repos/distri/eval/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/distri/eval/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/distri/eval/teams",
        "hooks_url": "https://api.github.com/repos/distri/eval/hooks",
        "issue_events_url": "https://api.github.com/repos/distri/eval/issues/events{/number}",
        "events_url": "https://api.github.com/repos/distri/eval/events",
        "assignees_url": "https://api.github.com/repos/distri/eval/assignees{/user}",
        "branches_url": "https://api.github.com/repos/distri/eval/branches{/branch}",
        "tags_url": "https://api.github.com/repos/distri/eval/tags",
        "blobs_url": "https://api.github.com/repos/distri/eval/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/distri/eval/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/distri/eval/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/distri/eval/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/distri/eval/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/distri/eval/languages",
        "stargazers_url": "https://api.github.com/repos/distri/eval/stargazers",
        "contributors_url": "https://api.github.com/repos/distri/eval/contributors",
        "subscribers_url": "https://api.github.com/repos/distri/eval/subscribers",
        "subscription_url": "https://api.github.com/repos/distri/eval/subscription",
        "commits_url": "https://api.github.com/repos/distri/eval/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/distri/eval/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/distri/eval/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/distri/eval/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/distri/eval/contents/{+path}",
        "compare_url": "https://api.github.com/repos/distri/eval/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/distri/eval/merges",
        "archive_url": "https://api.github.com/repos/distri/eval/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/distri/eval/downloads",
        "issues_url": "https://api.github.com/repos/distri/eval/issues{/number}",
        "pulls_url": "https://api.github.com/repos/distri/eval/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/distri/eval/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/distri/eval/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/distri/eval/labels{/name}",
        "releases_url": "https://api.github.com/repos/distri/eval/releases{/id}",
        "created_at": "2013-12-10T22:35:17Z",
        "updated_at": "2013-12-10T22:35:40Z",
        "pushed_at": "2013-12-10T22:35:18Z",
        "git_url": "git://github.com/distri/eval.git",
        "ssh_url": "git@github.com:distri/eval.git",
        "clone_url": "https://github.com/distri/eval.git",
        "svn_url": "https://github.com/distri/eval",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "master_branch": "master",
        "permissions": {
          "admin": true,
          "push": true,
          "pull": true
        },
        "organization": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 0,
        "subscribers_count": 1,
        "branch": "v0.1.0",
        "defaultBranch": "master"
      },
      "dependencies": {}
    }
  }
});
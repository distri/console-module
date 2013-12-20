Console
=======

This mixin opens up a console window and receives commands from it.

Open up a console in a window and run commands from it.

    Eval = require "eval"

    module.exports = (I={}, self={}) ->
      consoleWindow = null

      send = (data) ->
        consoleWindow?.postMessage data, "*"

      eventProcessor = (event) ->
        if event.source is consoleWindow
          console.log event

          if code = event.data?.code
            try
              result = self.eval(code)
              
              console.log result

              send 
                result: result
            catch error
              console.error

              send
                error: error

      addEventListener "unload", ->
        consoleWindow?.close()
      , false

      addEventListener "message", eventProcessor, false

      self.launchConsole = ->
        return if consoleWindow and !consoleWindow.closed

        consoleWindow = window.open "http://distri.github.io/console/", "", "width=640,height=160"

      Eval(I, self)

      return self

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase)
  return 
  function(logShout) {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    return(spy).shout('HELLO')

    console.log.restore()
}


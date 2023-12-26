const core = require('@actions/core')
const github = require('@actions/github')

try {
    core.debug('Debug message')
    core.warning('Warning message')
    core.error('Error message')

    const name = core.getInput('who-to-greet')
    console.log(`Hello ${name}`)

    const time = new Date()
    core.setOutput('time', time.toTimeString())
    core.exportVariable("HELLO_TIME", time)

    core.startGroup("Logging github context")
    console.log(JSON.stringify(github.context, null, 2))
    core.endGroup()

} catch (error) {
    core.setFailed(error.message)
}



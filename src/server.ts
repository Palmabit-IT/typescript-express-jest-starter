import app from './app'

const appPort = process.env.APP_PORT || 8000
app.listen(appPort, () => console.log(`Server running on ${appPort}!!!`))
const registerLoginEvent = (user) => {
  const newLog = { userId: user._id, log: new Date() }
  fetch('/log', {
    method: 'POST',
    body: JSON.stringify(newLog),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
}

export default registerLoginEvent

import { differenceInMinutes, parseJSON } from 'date-fns'

const userEnergyCheck = (user, updateUser, setUser) => {
  if (user.energy.value < user.maxEnergy) {
    const now = new Date()
    const timestamp = parseJSON(user.energy.timestamp)
    const difference = differenceInMinutes(now, timestamp)
    console.log(difference)
    if (difference >= 1 && difference < 2) {
      user = {
        ...user,
        energy: { value: user.energy.value + 1, timestamp: new Date() },
      }
      updateUser(user)
      setUser(user)
    } else if (difference >= 2 && difference < 3) {
      user = {
        ...user,
        energy: { value: user.energy.value + 2, timestamp: new Date() },
      }
      updateUser(user)
      setUser(user)
    } else if (difference >= 3) {
      user = {
        ...user,
        energy: { value: user.energy.value + 3, timestamp: new Date() },
      }
      updateUser(user)
      setUser(user)
    }
    if (user.energy.value > user.maxEnergy) {
      user = {
        ...user,
        energy: { value: user.maxEnergy, timestamp: new Date() },
      }
      updateUser(user)
      setUser(user)
    }
  }
}

export default userEnergyCheck

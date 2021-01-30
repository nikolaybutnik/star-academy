const checkLevelUp = (user) => {
  if (user.experience >= user.experienceToNextLevel) {
    const level = user.level + 1
    let userClass
    switch (level) {
      case 2:
        userClass = 'Busker'
        break
      case 3:
        userClass = 'Local Talent'
        break
      case 4:
        userClass = 'Local Star'
        break
      case 5:
        userClass = 'Upcoming Legend'
        break
      default:
        userClass = 'Super Star'
    }
    user = {
      ...user,
      level: level,
      class: userClass,
      experience: 0,
      experienceToNextLevel: Math.floor(
        user.experienceToNextLevel * (1 + 1.25)
      ),
    }
  }
  return user
}

export default checkLevelUp

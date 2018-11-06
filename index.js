class Driver {
  constructor(name, day){
    this.name = name;
    this.startDate = new Date(day)
  }

  yearsExperienceFromBeginningOf(year){
    let totalYears = year-(this.startDate.getFullYear())
    return totalYears;
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let horizontalBeginning = eastWest.indexOf(this.beginningLocation.horizontal)
    let horizontalEnding = eastWest.indexOf(this.endingLocation.horizontal)
    let horizontal = Math.abs(horizontalEnding-horizontalBeginning)
    let total = horizontal + vertical
    return total
  }

  estimatedTime(peak){
    let offPeakRate = (1/3)
    let peakRate = (1/2)
    let time;

    if (peak){
      time = this.blocksTravelled() * peakRate
    } else {
      time = this.blocksTravelled() * offPeakRate
    }
    return time
  }

}

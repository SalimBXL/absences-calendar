

export const DAYLENGTH = (1000*60*60*24);

export const WEEKLENGTH = (7 * DAYLENGTH);

export const weeksInMonth = (year, month) => 
{
  const date = new Date(year, month, 0);
  return Math.floor((date.getDate() - 1) / 7) + 1;
}

export const findFirstDayOfTheYear = (year) => 
{
    let _currentDate = Date.parse(year + "-01-01")
    const day = new Date(_currentDate).getDay();
    let daysBefore = (day > 1) 
        ? (DAYLENGTH * (day-1)) 
        : (day < 1) 
            ? (DAYLENGTH * (day+1)) 
            : 0;
    _currentDate -= daysBefore;
    return _currentDate;
}

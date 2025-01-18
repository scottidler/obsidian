// Define the function to calculate the work week
function calculateWorkWeek() {
    const today = new Date();
    const firstJan = new Date(today.getFullYear(), 0, 1);
    const firstSunday = firstJan.getDay() === 0 ? firstJan : new Date(firstJan.getFullYear(), 0, 1 + (7 - firstJan.getDay()));
    const msInDay = 24 * 60 * 60 * 1000;

    // Calculate the difference in days between the current date and the first Sunday
    const diffInDays = Math.floor((today - firstSunday) / msInDay);

    // Calculate the work week, adding 1 because WW01 starts from the first Sunday
    let workWeek = Math.floor(diffInDays / 7) + 1;

    // Check for negative or zero work week, which means the date is before the first WW of the year
    if (workWeek <= 0) {
        workWeek = 'Last year\'s final WW';
    }

    return workWeek;
}

// Helper function to determine if a year is a leap year
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// Export the function for Templater to use
module.exports = calculateWorkWeek;

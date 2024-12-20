// Example function to parse weekdays
function parseWeekday(day) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (day >= 0 && day < weekdays.length) {
        return weekdays[day];
    } else {
        return 'Unknown';
    }
}

// Example function to parse additional information
function parseAdditionalInfo(info) {
    // Implement parsing logic based on the structure of the info
    // This function can dynamically adjust to different formats or structures
    // and parse accordingly.
    // Example:
    if (typeof info === 'object') {
        // Handle object format
        return JSON.stringify(info);
    } else if (typeof info === 'string') {
        // Handle string format
        return info.toUpperCase();
    } else {
        return 'Unknown';
    }
}

// Usage examples:
console.log(parseWeekday(3)); // Outputs: Wednesday
console.log(parseAdditionalInfo({ key: 'value' })); // Outputs: {"key":"value"}
console.log(parseAdditionalInfo("example")); // Outputs: EXAMPLE

function calculateAge(birthDateStr) {
    const currentDate = new Date();
    const birthDate = new Date(birthDateStr);

    // Calculate the difference in milliseconds between the current date and the birth date
    const diffInMilliseconds = currentDate - birthDate;

    // Check if valid inputed date
    if(Number.isNaN(diffInMilliseconds)){
        document.querySelector('.js-print-age').innerHTML = `Please enter a valid date!`;
        return ;
    }

    // Check if the birth date is in the future
    if (birthDate > currentDate) {
        document.querySelector('.js-print-age').innerHTML = `Invalid input: Birth date is in the future`;
        return ;
    }

    
  
    // Calculate the number of milliseconds in a day, month, and year
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30.44 * millisecondsPerDay;
    const millisecondsPerYear = 365.25 * millisecondsPerDay;
  
    // Calculate the number of years, months, and days
    const years = Math.floor(diffInMilliseconds / millisecondsPerYear);
    const months = Math.floor(diffInMilliseconds / millisecondsPerMonth) % 12;
    const days = Math.round(Math.floor(diffInMilliseconds / millisecondsPerDay) % 30.44);
  
    document.querySelector('.js-print-age').innerHTML = `You are ${years} years, ${months} months, ${days} days old`;
}

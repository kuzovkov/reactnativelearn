export const getFullFormettedDate = (date: Date) => {
  if (date instanceof Date) {
      return new Intl.DateTimeFormat('en-US', {
           day: 'numeric',
           month: 'short',
           year: 'numeric',
          }).format(date); 
  } else {
    throw new Error('Invalid date object');
  }

}





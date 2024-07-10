export const formatDateTo_DayName = (dateString: Date) => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
    return formattedDate;
};
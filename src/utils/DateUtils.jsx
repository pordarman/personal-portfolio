class DateUtils {
    // Formats a Date object or date string to 'YYYY-MM-DD'
    static formatDate(
        time,
        options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        },
        lang = "en"
    ) {
        return new Date(time).toLocaleDateString(lang, options);
    }
}

export default DateUtils;
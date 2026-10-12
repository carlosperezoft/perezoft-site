export const BOOKING_SCHEDULE_URL =
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3HumqCMtjZy1J6tPoXdBo-lVLTYEsEA5wMeAHSEr9oRf6c679c3iGQkYqSmE_-wnxF3yL0ri3q?gv=true';

export function triggerBookingModal(e) {
    if (e && e.preventDefault) e.preventDefault();
    const hiddenBtn = document.querySelector('.google-calendar-hidden-trigger');
    if (hiddenBtn) {
        hiddenBtn.click();
    } else {
        window.open(BOOKING_SCHEDULE_URL, '_blank', 'noopener,noreferrer');
    }
}

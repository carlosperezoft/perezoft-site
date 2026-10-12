import { Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { triggerBookingModal } from '../utils/calendar';

export default function BookingButton({
    className = 'btn btn-outline',
    children,
    showIcon = true,
    size = 16,
    style = {},
}) {
    const { t } = useLanguage();
    const label = children || t.hero.bookCall;

    return (
        <button
            type="button"
            className={className}
            onClick={triggerBookingModal}
            style={style}
            aria-label={typeof label === 'string' ? label : 'Book an appointment'}
        >
            {showIcon && <Calendar size={size} />}
            {label}
        </button>
    );
}

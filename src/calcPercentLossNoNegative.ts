
function calcPercentLostNoNegative(oldValue: number, newValue: number) {
    if (newValue === 0 || oldValue === 0) return 0
    return ((-(newValue - oldValue) / oldValue) > .999999 || (-(newValue - oldValue) / oldValue) <= 0) ? 0 : (-(newValue - oldValue) / oldValue);
}

export default calcPercentLostNoNegative;
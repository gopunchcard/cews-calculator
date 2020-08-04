
function calcPercentLostNoNegative(oldValue: number, newValue: number) {
    if (oldValue === 0 || newValue === 0)
        return 0;
    return ((-(newValue - oldValue) / oldValue) > 1 || (-(newValue - oldValue) / oldValue) <= 0) ? 0 : (-(newValue - oldValue) / oldValue);
}

export default calcPercentLostNoNegative;
class Checker {
    static counters = {};

    static checkInRange(value, min, max) {
        if (!Checker.checkIfNumber([min, max])) {
            return;
        }

        if (value >= min && value <= max) {
            return true;
        }
        alert(`${value} Out of Range (${min} to ${max})`);
        return false;
    }

    static restartCounter(key, initialValue) {

        if (!Checker.checkIfNumber([initialValue])) {
            return;
        }

        Checker.counters[key] = initialValue;
    }

    static plusCounter(key, value) {
        if (!Checker.checkIfNumber([value])) {
            return;
        }
        Checker.counters[key] += value;
    }

    static SubtractCounter(key, value) {
        if (!Checker.checkIfNumber([value])) {
            return;
        }
        Checker.counters[key] += value;
    }

    static checkIfLower(key, low) {
        if (Checker.counters[key] <= low) {
            alert("Min raised! restart app!")
            return false;
        }
        return true;
    }

    static checkIfHigher(key, high) {
        if (Checker.counters[key] >= high) {
            alert("Max raised! Restart app!")
            return true;
        }
        return false;

    }


    static checkIfNumber(values = []) {
        for (let i = 0; i < values.length; i++) {
            if (isNaN(values[i])) {
                alert(`Values must be numbers! ${values[i]} given!`);
                return false
            }
        }
        return true;

    }
}

export default Checker;
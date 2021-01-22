// Repo-link :  https://github.com/627md-Tajul-Islam/assignment


// Problem No.1 [ Kilometer-Meter-Converter ]
function kilometerToMeter(kilometer) {
    if (typeof kilometer == 'string' || kilometer < 0) {
        return 'Distance cant be negative.Please input a positive number.';
    } else {
        var meter = kilometer * 1000;
        return meter;
    }
}

/*
[This output has shown only for demo purpose.]
var distance = kilometerToMeter(10);
console.log(distance);
*/


// Problem No.2 [ Budget-Calculator ]
function budgetCalculator(watch, phone, laptop) {
    if (watch < 1 || phone < 1 || laptop < 1) {
        return 'Products cant be negative.Please input valid numbers.'
    } else {
        var Watch = watch * 50;
        var Phone = phone * 100;
        var Laptop = laptop * 500;
        var Total = Watch + Phone + Laptop;
        return Total;
    }
}

/*
[This output has shown only for demo purpose.]
var cost = budgetCalculator(10, 10, 10);
console.log(cost);
*/


// Problem No.3 [ Hotel-Cost ]
function hotelCost(night) {
    if (night > 0 && typeof night == 'number') {
        var nightCost = 0;
        if (night <= 10) {
            nightCost = night * 100;
        } else if (night <= 20) {
            var first10Nights = 10 * 100;
            var remaining = night - 10;
            var second10Nights = remaining * 80;
            nightCost = first10Nights + second10Nights;
        } else {
            var first10Nights = 10 * 100;
            var second10Nights = 10 * 80;
            var remaining = night - 20;
            var after20Nights = remaining * 50;
            nightCost = first10Nights + second10Nights + after20Nights;
        }
        return nightCost;
    } else {
        return 'Cost cant be in negative';
    }
}

/*
 [This output has shown only for demo purpose.]
var cost = hotelCost(50);
console.log(cost);
*/

// Problem No.4 [ Mega-Friends ]

function megaFriend(name) {
    if (name.length > 0 && Array.isArray(name)) {
        var largestName = name[0];
        var largestNameLength = largestName.length;

        for (var i = 1; i < name.length; i++) {
            var currentLength = name[i].length;
            if (currentLength > largestNameLength) {
                largestName = name[i];
                largestNameLength = currentLength;
            }
        }
        return largestName;
    } else {
        return ' Name you have typed is invalid.Please input a right name'
    }
}

/*
 [This output has shown only for demo purpose.]
var largename = megaFriend(['Tajul Islam', 'Rakib Chowdhury', 'Rakibul Islam', 'Tanjim Alve', 'Likhon Shahariar']);
console.log(largename);
*/
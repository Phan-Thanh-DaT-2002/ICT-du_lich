var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
var order = function (fruit_name, call_production) {
    setTimeout(function () {
        console.log("".concat(stocks.Fruits[fruit_name], " was selected"));
        // Order placed. Call production to start
        call_production();
    }, 2000);
};
// 2nd Function
var production = function () {
    setTimeout(function () {
        console.log("production has started");
        setTimeout(function () {
            console.log("The fruit has been chopped");
            setTimeout(function () {
                console.log("".concat(stocks.liquid[0], " and ").concat(stocks.liquid[1], " Added"));
                setTimeout(function () {
                    console.log("start the machine");
                    setTimeout(function () {
                        console.log("Ice cream placed on ".concat(stocks.holder[1]));
                        setTimeout(function () {
                            console.log("".concat(stocks.toppings[0], " as toppings"));
                            setTimeout(function () {
                                console.log("serve Ice cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
};
// Trigger
order(0, production);
var stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
var is_shop_open = true;
var order = function (time, work) {
    return new Promise(function (resolve, reject) {
        if (is_shop_open) {
            setTimeout(function () {
                // work is getting done here
                resolve(work());
                // Setting time here for 1 work
            }, time);
        }
        else {
            reject(console.log("Our shop is closed"));
        }
    });
};
// step 1
order(2000, function () { return console.log("".concat(stocks.Fruits[0], " was selected")); })
    // step 2
    .then(function () {
    return order(0, function () { return console.log('production has started'); });
})
    // step 3
    .then(function () {
    return order(2000, function () { return console.log("Fruit has been chopped"); });
})
    // step 4
    .then(function () {
    return order(1000, function () { return console.log("".concat(stocks.liquid[0], " and ").concat(stocks.liquid[1], " added")); });
})
    // step 5
    .then(function () {
    return order(1000, function () { return console.log("start the machine"); });
})
    // step 6
    .then(function () {
    return order(2000, function () { return console.log("ice cream placed on ".concat(stocks.holder[1])); });
})
    // step 7
    .then(function () {
    return order(3000, function () { return console.log("".concat(stocks.toppings[0], " as toppings")); });
})
    // Step 8
    .then(function () {
    return order(2000, function () { return console.log("Serve Ice Cream"); });
});
var stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
var is_shop_open = true;
function time(ms) {
    return new Promise(function (resolve, reject) {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log("Shop is closed"));
        }
    });
}
function production() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    return [4 /*yield*/, time(2000)];
                case 1:
                    _a.sent();
                    console.log("".concat(stocks.Fruits[0], " was selected"));
                    return [4 /*yield*/, time(0)];
                case 2:
                    _a.sent();
                    console.log("production has started");
                    return [4 /*yield*/, time(2000)];
                case 3:
                    _a.sent();
                    console.log("fruit has been chopped");
                    return [4 /*yield*/, time(1000)];
                case 4:
                    _a.sent();
                    console.log("".concat(stocks.liquid[0], " and ").concat(stocks.liquid[1], " added"));
                    return [4 /*yield*/, time(1000)];
                case 5:
                    _a.sent();
                    console.log("start the machine");
                    return [4 /*yield*/, time(2000)];
                case 6:
                    _a.sent();
                    console.log("ice cream placed on ".concat(stocks.holder[1]));
                    return [4 /*yield*/, time(3000)];
                case 7:
                    _a.sent();
                    console.log("".concat(stocks.toppings[0], " as toppings"));
                    return [4 /*yield*/, time(2000)];
                case 8:
                    _a.sent();
                    console.log("Serve Ice Cream");
                    return [3 /*break*/, 10];
                case 9:
                    error_1 = _a.sent();
                    console.log("customer left");
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
production();

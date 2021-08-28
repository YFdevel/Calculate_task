const app = new Vue({
    el: '#app',

    data: {
        number1: null,
        number2: null,
        operator: '',
        result: null,
        errorMessage:"Вводите числа в правильном формате"


    },
    methods: {
        operation() {
            switch (this.operator){
                case "+":
                    this.result = this.add(this.number1, this.number2);
                    break;
                case "-":
                    this.result = this.substract(this.number1, this.number2);
                    break;
                case "*":
                    this.result = this.multiply(this.number1, this.number2);
                    break;
                case "/":
                    this.result = this.divide(this.number1, this.number2);
                    break;
                default:
                    this.result ="Неправильный арифметический оператор";

            }
        },
        clear() {
            this.number1 = null;
            this.number2 = null;
            this.operator = '';
            this.result = null;
        },
        add(a, b) {
            if (a == null || b == null || typeof a == "undefined" || typeof b == "undefined" || isNaN(a) || isNaN(b)) {
                alert(this.errorMessage)
                return null;
            }
            return parseFloat(a)+ parseFloat(b);
        },

        substract(a, b) {
            if (a == null || b == null || typeof a == "undefined" || typeof b == "undefined" || isNaN(a) || isNaN(b)) {
                alert(this.errorMessage)
                return null;
            }
            return parseFloat(a)- parseFloat(b);
        },

        multiply(a, b) {
            if (a == null || b == null || typeof a == "undefined" || typeof b == "undefined" || isNaN(a) || isNaN(b)) {
                alert(this.errorMessage)
                return null;
            }
            return parseFloat(a)*parseFloat(b);
        },

        divide(a, b) {
            if (a == null || b == null || typeof a == "undefined" || typeof b == "undefined" || isNaN(a) || isNaN(b)) {
                alert(this.errorMessage)
                return null;
            }
            return parseFloat(a)/ parseFloat(b);
        },

    },

})



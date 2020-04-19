        //function that displays value in bar
        function dis(val) {
            document.getElementById("result").value += val
        }

        //function that takes the digit and return result 
        function solve() {
            var x = document.getElementById("result").value
            var z = 7
            var y = x * z

            document.getElementById("result").value = y

        }

        //function that clears calculator
        function clr() {
            document.getElementById("result").value = ""
        } 

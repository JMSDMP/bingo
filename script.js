function toggle(dabber_id) {
    e = document.getElementById("dabber-"+dabber_id)
    e.classList.toggle("active")
}

function new_nums() {
    var nums = [];
    var ThisRow = 0;
    for (let y = 0; y < 3;){
        let num = Math.floor(Math.random() * 90) + 1;
        if (nums.indexOf(num) == -1) {
            var col = Math.floor((num - 1) / 10);
            var cell = document.getElementById(`number-${col}-${y}`);
            if (cell.textContent == '-') {
                cell.textContent = num;
                nums.push(num);
                ThisRow += 1;
                if (ThisRow == 5) {
                    y++;
                    ThisRow = 0;
                }
            }

        }
    }
}
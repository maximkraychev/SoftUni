function createSortedList() {

    const arr = [];

    return {
        add(element) {
            arr.push(element);
            this.size++;
            return arr.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                this.size--;
                return arr.sort((a, b) => a - b);
            }
        },
        get(index) {
            if (index >= 0 && index < arr.length) {
                return arr[index]
            }
        },
        size: 0,
    }
}





let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

list.add(60);
list.add(3);
list.add(22);
list.add(1);

for (let i = 0; i < 6; i++) {
    console.log(list.get(i))
}

console.log(list.size);

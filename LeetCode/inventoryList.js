function inventory() {
    return {
        list: [],
        add(val) {
            this.list.push(val);
            return this;
        },
        remove(val) {
            const ans = this.list.indexOf(val);
            this.list.splice(ans, 1);
            return this;
        },
        getList() {
            console.log(this.list);
        },
    };
}

inventory().add("trouser").add("shirt").add("tie").remove().getList();

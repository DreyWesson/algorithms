//TODO:
// change one of the methods to another scope and use function bind

function Kanban(stages, name = "") {
    function move(item, currentStage, moveType) {
        const index = this.findItem(item, currentStage);
        if (typeof index !== "number") return this;
        let val = this.stageItems(currentStage).splice(index, 1)[0];
        console.log(">>>", val);
        const newStage = val.stage + moveType === "next" ? +1 : -1;
        console.log(">>>", val);
        val = { ...val, stage: newStage };
        moveType === "next"
            ? val.stage <= stages.length - 1 &&
              this.list[stages[val.stage]].unshift(val)
            : val.stage >= 0 && this.list[stages[val.stage]].push(val);
        return this;
    }

    return {
        list: stages.reduce((prev, curr) => ({ ...prev, [curr]: [] }), {}),
        stageItems(currentStage) {
            return this.list[stages[currentStage]];
        },
        findItem(item, currentStage) {
            return this.stageItems(currentStage).reduce((prev, { type }, i) => {
                if (type === item) prev = i;
                return prev;
            }, null);
        },
        add(val) {
            this.list[stages[0]].push({ type: val, stage: 0 });
            return this;
        },
        next(item, currentStage) {
            return move.call(this, item, currentStage, "next");
        },
        prev(item, currentStage) {
            return move.call(this, item, currentStage, "prev");
        },
        getList() {
            console.log(`*** ${name.toUpperCase()} KANBAN *** \n`, this.list);
            return this;
        },
    };
}
const stages = ["test", "development", "production", "deploy"];
const k = new Kanban(stages, "Fashion");
const k2 = new Kanban(stages, "Software");

k.add("trouser")
    .add("shirt")
    .add("tie")
    .next("shirt", 0)
    .next("shirt", 1)
    .next("shirt", 2)
    // .next("shirt", 3) // remove right
    .prev("shirt", 3)
    .prev("shirt", 2)
    // .prev("shirt", 1)
    // .prev("shirt", 0) // remove left
    .getList();

k2.add("new feature")
    .add("bug")
    .add("refactor")
    .next("new feature", 0)
    .next("bug", 0)
    .next("bug", 1)
    .prev("bug", 2)
    .prev("bug", 1)
    // .prev("shirt", 0) // remove left
    .getList();

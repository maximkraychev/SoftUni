function solve() {

    const canCast = () => {
        return {
            cast(spellName) {
                this.mana--;
                console.log(`${this.name} cast ${spellName}`);
            }
        }
    }

    const canFight = (obj) => ({
        fight: () => {
            obj.stamina--;
            console.log(`${obj.name} slashes at the foe!`);
        }
    })

    //Without this
    const fighter = (name) => {
        const state = {
            name,
            health: 100,
            stamina: 100,
        }

        return Object.assign(state, canFight(state))
    }

    //With this
    const mage = (name) => {
        const state = {
            name,
            health: 100,
            mana: 100,
        }

        return Object.assign(state, canCast())
    }

    return { 'mage': mage, 'fighter': fighter }
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

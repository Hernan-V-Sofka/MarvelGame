class RandomCarts {
    private listNumber: Array<number> = [];

    public genericNumberRamdom(): Array<number> {
        let random: Array<number> = [];
        for (let i = 0; i < 5; i++) {
            random[i] = Math.floor(Math.random() * (10 - 1) + 1);
            this.listNumber.push(random[i]);
        }
        return this.listNumber;
    }
}

export default RandomCarts;
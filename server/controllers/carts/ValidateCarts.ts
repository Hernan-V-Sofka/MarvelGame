class ValitateCart{ 
    private xpUser: number = 0;

    public deciGanador(xpUser: number){
        this.xpUser = xpUser;
        if(this.xpUser > 100){
            return {cartUser: true}
        }
        return {cartUser: false}
    }
}

export default ValitateCart
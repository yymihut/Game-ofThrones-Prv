export class Page {
    constructor(fetchCurrentPage, chatractersFunc) {
        this.pg = 1;
        this.pgC = 10;
        this.fetchCurrentPage = fetchCurrentPage;
        this.chatractersFunc = chatractersFunc;
    }
    nextCharacters() {
        let next = this.pgC + 10;
        this.chatractersFunc(this.pgC, next) 
        this.pgC = this.pgC + 10;        
    }
    prevCharacters() {
        if (this.pgC > 10) {
            this.pgC = this.pgC - 10;
            let prev = this.pgC - 10;
            this.chatractersFunc(prev, this.pgC)
        }        
    }
    nextHouses() {
        this.pg++;
        this.fetchCurrentPage(this.pg);
        
    }
    prevHouses() {
        this.pg--;
        this.fetchCurrentPage(this.pg);
        
    }
}
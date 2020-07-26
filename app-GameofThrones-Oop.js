import {
    displayHouses,
    hookHouses,
    displayCharacters,
    showCharacters,
    sarchCharacters
} from "../OOP-aproach/classes/model.js";
import { Page } from "../OOP-aproach/classes/Page.js";

class App {
    constructor() {
        this.housesBtn = document.getElementById('houses');
        this.charactersBtn = document.getElementById('characters');
        this.inputArea = document.getElementById('myInput')/* .toUpperCase() */;
        this.searchBtn = document.getElementById('search');
        this.nextBtn = document.getElementById('next');
        this.prevBtn = document.getElementById('prev');
        this.page = new Page(displayHouses, showCharacters)
        this.cond = false;
        this.condC = false;
        this.key = '';
    }
    init() {
        this.searchBtn.addEventListener('click', () => {
            console.log('this.inputArea', this.inputArea.value)
            sarchCharacters(this.inputArea.value.toLowerCase());
        });

        this.housesBtn.addEventListener('click', event => {
            displayHouses(1);
            this.scroolTop();
            this.cond = true;
            this.condC = false;
            this.key = 'houses'
            this.page.pgC = 10;
            this.inputArea.value = '';
        });
        this.charactersBtn.addEventListener('click', event => {
            showCharacters(0, 10);
            this.scroolTop();
            this.condC = true;
            this.cond = false;
            this.key = 'characters';
            this.page.pg = 1;
            this.inputArea.value = '';
        });

        this.nextBtn.addEventListener('click', event => {
            switch (this.key) {
                case 'houses':
                    if (this.cond) {
                        this.page.nextHouses();
                        this.scroolTop();
                    }
                    break;
                case 'characters':
                    if (this.condC) {
                        this.page.nextCharacters();
                        this.scroolTop();
                        break;
                    }
            }
        });

        this.prevBtn.addEventListener('click', event => {
            switch (this.key) {
                case 'houses':
                    if (this.cond && this.page.pg > 1) {
                        this.page.prevHouses();
                        this.scroolTop();
                    }
                    break;
                case 'characters':
                    if (this.condC && (this.page.pgC >= 10)) {
                        this.page.prevCharacters();
                        this.scroolTop();
                        break;
                    }
            }
        });

        hookHouses.addEventListener('click', event => {
            if (event.target.id == 'swornMembers') {
                const houseId = event.target.closest('div').id;
                const houseName = event.target.closest('div').title;
                console.log('numeleeeee : ' + houseId + houseName)
                displayCharacters(houseId, houseName);
            }
        })
    }
    scroolTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
const app = new App();
app.init();

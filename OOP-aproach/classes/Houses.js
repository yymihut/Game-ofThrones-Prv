import { hookMembers } from "../classes/model.js";
export class HouseElement {
    constructor(id, name, coatOfArms, region, words, swornMembersList) {
        this.id = id;
        this.name = name;
        this.coatOfArms = coatOfArms;
        this.region = region;
        this.words = words;
        this.swornMembersList = swornMembersList;
    }
    render() {
        const pageElement = document.createElement('div');
        pageElement.setAttribute('class', 'house-cards');
        pageElement.innerHTML = `<div class="media" id="media">
                                <div class="media-action" id="${this.id}" title="${this.name}">
                                    <img class="mr-3" src="./assets/img/150px.jpg">
                                    <button class="btn btn-primary" id="swornMembers"
                                    data-toggle="modal" data-target="#modal-swornMembers" type="button" 
                                    style="padding: 0;padding-right: 6px;padding-left: 6px;">Members<br></button>
                                </div>                                
                                <div class="media-body">                                    
                                    <h3 id="name">${this.name}</h3>
                                    <p id="coatOfArms">Proverb: ${this.coatOfArms}<br></p>
                                    <p id="region">Location (region): ${this.region}</p>
                                    <p id="words">Their words: ${this.words}</p>                                  
                                </div>
                            </div>`;
        return pageElement;
    }
    addModalTitle() {
        document.getElementById('modal-Htitle').innerHTML = `<br>Sworn Members of ${this.name}<br></br>`;
        hookMembers.innerHTML = '';
    }
    message() {
        hookMembers.innerHTML = `${this.name} doesn't have registered Sworn Members`;
    }
}




export class HouseMembers {
    constructor(name, culture, born, titles, aliases, playedBy) {
        this.name = name;
        this.culture = culture;
        this.born = born;
        this.titles = titles;
        this.aliases = aliases;
        this.playedBy = playedBy;
        this.houseMembersList = [];
    }
    render() {
        const memberElement = document.createElement('div');
        memberElement.innerHTML = `<h1 id="name">${this.name}</h1>
                                   <p id="culture">Culture:  ${this.culture}<br></p>
                                    <p id="born">Born: ${this.born}<br></p>
                                    <p id="titles">Titles:  ${this.titles}</p>
                                    <p id="aliases">Aliases:  ${this.aliases}</p>
                                    <p id="playedBy">Played by:  ${this.playedBy}</p>`;
        return memberElement;
    }
}


